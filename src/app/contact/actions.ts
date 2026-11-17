"use server";

import { Resend } from "resend";
import { siteConfig } from "@/data/site";
import { verifyCaptcha } from "@/lib/captcha";

export interface ContactFormState {
  success: boolean;
  message: string;
}

// Basic email format check — not exhaustive, just catches obvious typos.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Accepts digits, spaces, dashes, parentheses, and an optional leading +.
// Requires at least 7 digits total.
const PHONE_REGEX = /^\+?[\d\s\-()]{7,20}$/;

// ─── HTML EMAIL TEMPLATES ────────────────────────────────────────────────────

function contactOwnerEmail(p: {
  name: string; email: string; phone: string; secondaryPhone: string;
  company: string; contactTime: string; referralSource: string;
  projectType: string; budget: string; message: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>New Project Inquiry – Lexical Software</title>
</head>
<body style="margin:0;padding:0;background:#0f0f13;font-family:Arial,sans-serif;color:#e2e8f0;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f13;padding:32px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f0f13;border-radius:16px;overflow:hidden;border:1px solid #1e1e30;">

  <!-- HEADER -->
  <tr><td style="background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 55%,#06b6d4 100%);padding:40px 32px;text-align:center;">
    <div style="font-size:20px;font-weight:700;color:#fff;letter-spacing:-0.5px;">Lexical<span style="color:#a5f3fc;">.</span>Software</div>
    <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-top:4px;letter-spacing:2px;text-transform:uppercase;">Elite Software Startup &amp; Consulting</div>
    <div style="display:inline-block;background:rgba(255,255,255,0.18);color:#fff;font-size:12px;font-weight:600;padding:5px 14px;border-radius:20px;margin-top:18px;border:1px solid rgba(255,255,255,0.3);">🔔 New Inquiry Received</div>
  </td></tr>

  <!-- ALERT BAR -->
  <tr><td style="background:#1a1a2e;padding:28px 32px 0;">
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="background:linear-gradient(90deg,#6366f1,#8b5cf6);border-radius:10px;padding:16px 20px;">
      <table cellpadding="0" cellspacing="0"><tr>
        <td style="font-size:22px;padding-right:12px;">📬</td>
        <td>
          <div style="font-size:15px;font-weight:600;color:#fff;">New project inquiry from ${p.name}</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.75);margin-top:3px;">Submitted via Contact Form · Reply directly to respond</div>
        </td>
      </tr></table>
    </td></tr>
    </table>
  </td></tr>

  <!-- CLIENT INFO -->
  <tr><td style="background:#1a1a2e;padding:24px 32px 0;">
    <div style="font-size:11px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Client Information</div>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f1a;border:1px solid #2d2d44;border-radius:12px;overflow:hidden;">
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">👤</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Full Name</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;font-weight:500;">${p.name}</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">✉️</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Email</div><div style="font-size:14px;margin-top:2px;"><a href="mailto:${p.email}" style="color:#818cf8;text-decoration:none;">${p.email}</a></div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">📞</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Phone</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;font-weight:500;">${p.phone}</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">📱</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Secondary Phone</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;font-weight:500;">${p.secondaryPhone}</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">🏢</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Company</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;font-weight:500;">${p.company}</div></td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr>

  <!-- PROJECT DETAILS -->
  <tr><td style="background:#1a1a2e;padding:20px 32px 0;">
    <div style="font-size:11px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Project Details</div>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f1a;border:1px solid #2d2d44;border-radius:12px;overflow:hidden;">
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">💼</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Project Type</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;font-weight:500;">${p.projectType}</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">💰</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Budget</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;font-weight:500;">${p.budget}</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">🕐</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Preferred Contact Time</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;font-weight:500;">${p.contactTime}</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">🔍</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Heard About Us Via</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;font-weight:500;">${p.referralSource}</div></td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr>

  <!-- MESSAGE -->
  <tr><td style="background:#1a1a2e;padding:20px 32px 0;">
    <div style="font-size:11px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Message</div>
    <div style="background:#0f0f1a;border:1px solid #2d2d44;border-left:3px solid #6366f1;border-radius:12px;padding:18px;">
      <div style="font-size:14px;color:#cbd5e1;line-height:1.75;">${p.message}</div>
    </div>
  </td></tr>

  <!-- CTA -->
  <tr><td style="background:#1a1a2e;padding:28px 32px;text-align:center;">
    <a href="mailto:${p.email}" style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:14px;font-weight:600;padding:14px 28px;border-radius:8px;text-decoration:none;">↩ Reply to ${p.name}</a>
  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#0f0f13;padding:22px 32px;text-align:center;border-top:1px solid #1e1e30;">
    <div style="font-size:14px;font-weight:700;color:#6366f1;">Lexical Software</div>
    <div style="margin-top:8px;">
      <a href="https://lexicalsoftware.dev" style="color:#4b5563;font-size:12px;text-decoration:none;margin:0 8px;">Website</a>
      <a href="https://github.com/lexicalsoftware" style="color:#4b5563;font-size:12px;text-decoration:none;margin:0 8px;">GitHub</a>
      <a href="https://linkedin.com/company/lexicalsoftware" style="color:#4b5563;font-size:12px;text-decoration:none;margin:0 8px;">LinkedIn</a>
    </div>
    <div style="font-size:11px;color:#1e293b;margin-top:8px;">© 2025 Lexical Software · Gurugram, Haryana, India</div>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function contactClientEmail(p: {
  name: string; email: string; phone: string;
  projectType: string; budget: string; message: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>We received your message – Lexical Software</title>
</head>
<body style="margin:0;padding:0;background:#0f0f13;font-family:Arial,sans-serif;color:#e2e8f0;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f13;padding:32px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f0f13;border-radius:16px;overflow:hidden;border:1px solid #1e1e30;">

  <!-- HEADER -->
  <tr><td style="background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 55%,#06b6d4 100%);padding:48px 32px;text-align:center;">
    <div style="font-size:48px;margin-bottom:16px;">✅</div>
    <div style="font-size:20px;font-weight:700;color:#fff;letter-spacing:-0.5px;">Lexical<span style="color:#a5f3fc;">.</span>Software</div>
    <div style="font-size:24px;font-weight:700;color:#fff;margin-top:18px;">Message Received!</div>
    <div style="font-size:14px;color:rgba(255,255,255,0.8);margin-top:8px;">We'll get back to you within one business day</div>
  </td></tr>

  <!-- BODY -->
  <tr><td style="background:#1a1a2e;padding:32px;">
    <div style="font-size:16px;color:#e2e8f0;margin-bottom:16px;">Hi <strong style="color:#a5b4fc;">${p.name}</strong> 👋</div>
    <div style="font-size:14px;color:#94a3b8;line-height:1.8;margin-bottom:28px;">
      Thank you for reaching out to Lexical Software. We've received your inquiry and our team will review it shortly. You can expect a response from us within <strong style="color:#a5b4fc;">one business day</strong>.
    </div>

    <!-- SUMMARY -->
    <div style="font-size:11px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Your Inquiry Summary</div>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f1a;border:1px solid #2d2d44;border-radius:12px;overflow:hidden;margin-bottom:24px;">
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">💼</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Project Type</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;">${p.projectType}</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;border-bottom:1px solid #1e1e30;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">💰</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Budget</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;">${p.budget}</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:13px 18px;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="font-size:15px;width:28px;vertical-align:top;padding-top:2px;">📞</td>
          <td><div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Phone</div><div style="font-size:14px;color:#e2e8f0;margin-top:2px;">${p.phone}</div></td>
        </tr></table>
      </td></tr>
    </table>

    <!-- MESSAGE -->
    <div style="font-size:11px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Your Message</div>
    <div style="background:#0f0f1a;border:1px solid #2d2d44;border-left:3px solid #8b5cf6;border-radius:12px;padding:16px 18px;margin-bottom:24px;">
      <div style="font-size:14px;color:#94a3b8;line-height:1.75;font-style:italic;">"${p.message}"</div>
    </div>

    <!-- WHAT NEXT -->
    <div style="background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(139,92,246,0.08));border:1px solid rgba(99,102,241,0.2);border-radius:12px;padding:20px;margin-bottom:24px;">
      <div style="font-size:14px;font-weight:600;color:#a5b4fc;margin-bottom:14px;">🗓 What happens next?</div>
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr><td style="padding-bottom:10px;">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:26px;height:26px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:50%;text-align:center;vertical-align:middle;font-size:11px;font-weight:700;color:#fff;padding:0 8px;">1</td>
            <td style="font-size:13px;color:#94a3b8;padding-left:12px;">Our team reviews your inquiry and requirements</td>
          </tr></table>
        </td></tr>
        <tr><td style="padding-bottom:10px;">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:26px;height:26px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:50%;text-align:center;vertical-align:middle;font-size:11px;font-weight:700;color:#fff;padding:0 8px;">2</td>
            <td style="font-size:13px;color:#94a3b8;padding-left:12px;">We prepare an initial project assessment</td>
          </tr></table>
        </td></tr>
        <tr><td>
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:26px;height:26px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:50%;text-align:center;vertical-align:middle;font-size:11px;font-weight:700;color:#fff;padding:0 8px;">3</td>
            <td style="font-size:13px;color:#94a3b8;padding-left:12px;">We reach out via email or call within 1 business day</td>
          </tr></table>
        </td></tr>
      </table>
    </div>

    <!-- CONTACT -->
    <div style="font-size:11px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Reach Us Directly</div>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="33%" style="padding-right:8px;">
          <div style="background:#0f0f1a;border:1px solid #2d2d44;border-radius:10px;padding:14px;text-align:center;">
            <div style="font-size:20px;margin-bottom:6px;">📞</div>
            <div style="font-size:11px;color:#64748b;">Phone</div>
            <div style="font-size:12px;font-weight:600;color:#818cf8;margin-top:2px;">+91 9144462693</div>
          </div>
        </td>
        <td width="34%" style="padding:0 4px;">
          <div style="background:#0f0f1a;border:1px solid #2d2d44;border-radius:10px;padding:14px;text-align:center;">
            <div style="font-size:20px;margin-bottom:6px;">✉️</div>
            <div style="font-size:11px;color:#64748b;">Email</div>
            <div style="font-size:11px;font-weight:600;color:#818cf8;margin-top:2px;"><a href="mailto:softwarelexical@gmail.com" style="color:#818cf8;text-decoration:none;">softwarelexical@gmail.com</a></div>
          </div>
        </td>
        <td width="33%" style="padding-left:8px;">
          <div style="background:#0f0f1a;border:1px solid #2d2d44;border-radius:10px;padding:14px;text-align:center;">
            <div style="font-size:20px;margin-bottom:6px;">🌐</div>
            <div style="font-size:11px;color:#64748b;">Website</div>
            <div style="font-size:12px;font-weight:600;color:#818cf8;margin-top:2px;"><a href="https://lexicalsoftware.dev" style="color:#818cf8;text-decoration:none;">lexicalsoftware.dev</a></div>
          </div>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#0f0f13;padding:22px 32px;text-align:center;border-top:1px solid #1e1e30;">
    <div style="font-size:14px;font-weight:700;color:#6366f1;">Lexical Software</div>
    <div style="font-size:12px;color:#334155;margin-top:4px;">Elite Software Startup &amp; Consulting Group</div>
    <div style="margin-top:10px;">
      <a href="https://lexicalsoftware.dev" style="color:#4b5563;font-size:12px;text-decoration:none;margin:0 8px;">Website</a>
      <a href="https://github.com/lexicalsoftware" style="color:#4b5563;font-size:12px;text-decoration:none;margin:0 8px;">GitHub</a>
      <a href="https://linkedin.com/company/lexicalsoftware" style="color:#4b5563;font-size:12px;text-decoration:none;margin:0 8px;">LinkedIn</a>
    </div>
    <div style="font-size:11px;color:#1e293b;margin-top:8px;">© 2025 Lexical Software · Gurugram, Haryana, India · This is an automated confirmation</div>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ─── SERVER ACTION ────────────────────────────────────────────────────────────

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name            = formData.get("name")?.toString().trim();
  const email           = formData.get("email")?.toString().trim();
  const phone           = formData.get("phone")?.toString().trim();
  const secondaryPhone  = formData.get("secondaryPhone")?.toString().trim();
  const company         = formData.get("company")?.toString().trim();
  const contactTime     = formData.get("contactTime")?.toString().trim();
  const referralSource  = formData.get("referralSource")?.toString().trim();
  const projectType     = formData.get("projectType")?.toString().trim();
  const budget          = formData.get("budget")?.toString().trim();
  const message         = formData.get("message")?.toString().trim();

  // Honeypot: a hidden field that should always be empty for real users.
  const honeypot = formData.get("website")?.toString().trim();
  if (honeypot) {
    return { success: true, message: "Thanks! We'll get back to you within one business day." };
  }

  // Math captcha
  const captchaToken  = formData.get("captchaToken")?.toString()  || "";
  const captchaAnswer = formData.get("captchaAnswer")?.toString() || "";
  if (!verifyCaptcha(captchaToken, captchaAnswer)) {
    return { success: false, message: "That answer doesn't look right — please try the new sum below." };
  }

  if (!name || !email || !phone || !message) {
    return { success: false, message: "Please fill in your name, email, phone number, and message." };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }
  if (!PHONE_REGEX.test(phone)) {
    return { success: false, message: "Please enter a valid phone number." };
  }
  if (secondaryPhone && !PHONE_REGEX.test(secondaryPhone)) {
    return { success: false, message: "Please enter a valid secondary phone number, or leave it blank." };
  }

  const apiKey      = process.env.RESEND_API_KEY;
  const toAddress   = process.env.CONTACT_TO_EMAIL   || siteConfig.email;
  const fromAddress = process.env.CONTACT_FROM_EMAIL  || "Lexical Software <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.", { name, email, phone, message });
    return { success: false, message: "Sorry, something went wrong on our end. Please email us directly instead." };
  }

  try {
    const resend = new Resend(apiKey);

    // ── Owner email ──────────────────────────────────────────────────────────
    const { error } = await resend.emails.send({
      from:     fromAddress,
      to:       toAddress,
      reply_to: email,
      subject:  `New project inquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
      html: contactOwnerEmail({
        name:            name!,
        email:           email!,
        phone:           phone!,
        secondaryPhone:  secondaryPhone  || "Not provided",
        company:         company         || "Not provided",
        contactTime:     contactTime     || "Not specified",
        referralSource:  referralSource  || "Not specified",
        projectType:     projectType     || "Not specified",
        budget:          budget          || "Not specified",
        message:         message!,
      }),
      text: [
        `Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`,
        `Secondary phone: ${secondaryPhone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        `Preferred contact time: ${contactTime || "Not specified"}`,
        `Heard about us via: ${referralSource || "Not specified"}`,
        `Project type: ${projectType || "Not specified"}`,
        `Budget: ${budget || "Not specified"}`,
        "", "Message:", message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, message: "Sorry, something went wrong sending your message. Please email us directly instead." };
    }

    // ── Client confirmation email ────────────────────────────────────────────
    try {
      await resend.emails.send({
        from:    fromAddress,
        to:      email,
        subject: "We received your message — Lexical Software",
        html: contactClientEmail({
          name:        name!,
          email:       email!,
          phone:       phone!,
          projectType: projectType || "Not specified",
          budget:      budget      || "Not specified",
          message:     message!,
        }),
        text: [
          `Hi ${name},`, "",
          "Thanks for reaching out to Lexical Software. We've received your message and will get back to you within one business day.",
          "", "For reference, here's what you sent us:",
          `Project type: ${projectType || "Not specified"}`,
          `Budget: ${budget || "Not specified"}`,
          `Message: ${message}`,
          "", "Best regards,", "Team Lexical Software", siteConfig.email,
        ].join("\n"),
      });
    } catch (confirmErr) {
      // Don't fail the whole submission if the confirmation email fails.
      console.error("Failed to send confirmation email:", confirmErr);
    }
  } catch (err) {
    console.error("Unexpected error sending contact form email:", err);
    return { success: false, message: "Sorry, something went wrong sending your message. Please email us directly instead." };
  }

  return { success: true, message: "Thanks! We'll get back to you within one business day." };
}
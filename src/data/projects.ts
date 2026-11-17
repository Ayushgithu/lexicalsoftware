export interface ProjectResult {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  technologies: string[];
  description: string;
  cloudinaryId?: string;
  // Temporary placeholder image (any https URL on an allowed host). Used only
  // when cloudinaryId is empty. Replace later by setting cloudinaryId.
  imageUrl?: string;
  // Live website URL. Shows a "Live Site" link on card and detail page.
  liveUrl?: string;
  // Shows the "Powered by Lexical Software" highlight on card and detail page.
  poweredByLexical?: boolean;
  featured?: boolean;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  results: ProjectResult[];
}

export const projectCategories = [
  "All",
  "Web App",
  "E-Commerce",
  "SaaS",
  "Mobile App",
  "API / Backend",
  "Dashboard",
  "Business Website",
  "Healthcare",
  "AI & Education",
];

export const projectTechnologies = [
  "Next.js",
  "React",
  "React Native",
  "Node.js",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "AWS",
  "PHP",
  "Redis",
  "TypeScript",
  "Google Sheets",
  "Cloudinary",
  "Vercel",
];

export const projects: Project[] = [
  {
    slug: "the-aaruh",
    name: "The Aaruh",
    category: "E-Commerce",
    featured: true,
    liveUrl: "https://theaaruh.in",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Cloudinary",
      "Razorpay",
    ],
    description:
      "A full-fledged e-commerce store for The Aaruh, a handcrafted ethnic and everyday wear brand, with a complete admin dashboard to manage products, orders, banners and customers.",

    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",

    overview:
      "The Aaruh is a clothing brand from Gurgaon selling suit sets, sarees, co-ords, kids wear and twinning wear. We built the complete online store along with a custom admin dashboard, so the owner can run the entire business, from catalogue to deliveries, without any technical help.",

    problem:
      "The brand was selling through social media and WhatsApp, which meant manual order taking, scattered product photos, no proper payment flow and no way to track customers or stock in one place.",

    solution:
      "Built a fast storefront in Next.js, TypeScript and Tailwind CSS with MongoDB as the database and Cloudinary for image and video delivery. Razorpay powers UPI, card and netbanking payments alongside cash on delivery. A full admin dashboard lets the owner manage products, collections, banners, orders, coupons and customer data in real time.",

    features: [
      "Product catalogue with collections, categories and filters",
      "Shop by video and shoppable lookbook",
      "Wishlist, cart and quick add to bag",
      "Razorpay payments (UPI, cards, netbanking) and cash on delivery",
      "Order tracking page for customers",
      "Customer accounts and sign in",
      "Size guide, exchange and shipping policy pages",
      "WhatsApp chat integration for sizing help",
      "Full admin dashboard for products, orders, banners and customers",
      "Cloudinary image and video management",
      "Mobile-first design and SEO optimized pages",
    ],

    results: [
      { value: "Full", label: "Admin Dashboard" },
      { value: "4+", label: "Payment Options" },
      { value: "100%", label: "Mobile Responsive" },
    ],
  },
  {
    slug: "uday-clinic-jhansi",
    name: "Uday Clinic Jhansi",
    category: "Healthcare",
    featured: true,
    poweredByLexical: true,
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel"],
    description:
      "A modern healthcare website for Uday Clinic Jhansi that enables patients to learn about services, book appointments, and connect with doctors through a responsive web experience.",

    cloudinaryId: "v1782394054/hospital-landing-page-image.png",

    overview:
      "Uday Clinic Jhansi is a complete healthcare platform designed to improve the clinic's online presence. The website provides information about doctors, medical services, clinic facilities, and allows patients to book appointments through a clean and mobile-friendly interface.",

    problem:
      "The clinic lacked a professional online platform for showcasing its services and managing patient appointment requests, making it difficult for new patients to access information and contact the clinic.",

    solution:
      "Developed a responsive healthcare website using Next.js and Tailwind CSS with MongoDB integration. The platform includes online appointment booking, doctor profiles, service information, contact forms, and an admin-friendly backend for managing patient requests.",

    features: [
      "Online appointment booking",
      "Doctor profile and specialization pages",
      "Medical services showcase",
      "Responsive design for all devices",
      "Contact and enquiry forms",
      "Patient-friendly navigation",
      "SEO optimized pages",
      "Fast deployment with Vercel",
    ],

    results: [
      { value: "100%", label: "Responsive Design" },
      { value: "24/7", label: "Appointment Requests" },
      { value: "SEO", label: "Optimized Website" },
    ],
  },
  {
    slug: "socialbug-media",
    name: "SocialBug Media",
    category: "Business Website",
    liveUrl: "https://socialbugmedia.in",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Sheets",
    ],
    description:
      "A bold, animated website for SocialBug Media, a creator-led influencer marketing agency, showcasing services, campaign case studies and a creator network of 1000+ influencers.",

    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format&fit=crop&q=80",

    overview:
      "SocialBug Media helps SaaS companies, startups and consumer brands grow through a curated network of 1000+ creators across LinkedIn, X, Instagram and YouTube. The website is the agency's main sales tool, built to convert brand visitors into campaign enquiries in two minutes.",

    problem:
      "The agency needed a site that matched the energy of its brand, proved its reach with real campaigns and brand logos, and made it easy for both brands and creators to get in touch.",

    solution:
      "Designed and built a dark, motion-rich website with Next.js, TypeScript and Tailwind CSS. Service pages, case studies, testimonials and a creator onboarding form are all included, and every enquiry and creator application is saved directly into Google Sheets so the team can follow up instantly.",

    features: [
      "Animated hero and scrolling creator and brand showcases",
      "Dedicated pages for each service",
      "Case study pages for featured campaigns",
      "Testimonials and brand logo wall",
      "Quick 2-minute brand enquiry form",
      "Creator sign-up form (Get Listed as a Creator)",
      "Google Sheets integration for leads and applications",
      "SEO optimized pages with rich metadata",
      "Fully responsive, performance focused design",
    ],

    results: [
      { value: "1000+", label: "Creators Showcased" },
      { value: "100+", label: "Campaigns Presented" },
      { value: "2 min", label: "To Start a Campaign" },
    ],
  },
  {
    slug: "qrtoprint",
    name: "QRtoPrint",
    category: "SaaS",
    poweredByLexical: true,
    liveUrl: "https://qr.lexicalsoftware.in",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Sheets",
    ],
    description:
      "QR printing software for cyber cafes, xerox shops and CSC centers. Customers scan a QR, upload files from their phone, pay by UPI and the print comes out automatically.",

    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",

    overview:
      "QRtoPrint removes the queue from print counters. Customers scan the shop's QR code, upload PDFs or photos from the phone browser, choose print options, pay and collect their pages, while the shop owner manages everything from a live dashboard.",

    problem:
      "Cyber cafes and xerox shops were receiving files on WhatsApp and pen drives, which filled up storage, spread viruses, left customer documents on the PC and created long queues at rush hour.",

    solution:
      "Built a complete SaaS with Next.js, TypeScript and Tailwind CSS: a no-app customer upload page, a shop dashboard with live orders and a Windows print agent that sends jobs to the right printer. UPI payments go straight to the shop owner's own UPI ID with 0% commission, and files are deleted once the order is collected.",

    features: [
      "Customer upload by QR scan, no app or login needed",
      "Up to 10 PDFs or photos per order with page ranges",
      "Pricing shown before payment with shop-defined rates",
      "Direct UPI payment with 0% commission or pay at counter",
      "Smart routing to any Windows printer by size and colour",
      "Passport and multi-photo layouts",
      "Live order alerts with sound on the shop dashboard",
      "Auto-delete of customer files after collection",
      "Downloadable QR poster for the shop counter",
      "Hindi and English customer interface",
      "Daily earnings and orders overview",
    ],

    results: [
      { value: "0%", label: "Commission on Payments" },
      { value: "10", label: "Files per Order" },
      { value: "10 min", label: "Shop Setup Time" },
    ],
  },
  {
    slug: "pradeep-csc",
    name: "Pradeep CSC & Digital Seva Kendra",
    category: "Web App",
    poweredByLexical: true,
    liveUrl: "https://pradeepcsc.lexicalsoftware.in",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Sheets",
    ],
    description:
      "A digital service portal for Pradeep CSC that lists government and banking services, takes online service requests and offers free tools like image merge and scan to PDF.",

    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80",

    overview:
      "Pradeep CSC & Digital Seva Kendra is a local Common Service Centre in Mahoba, Uttar Pradesh, serving citizens with Aadhaar, PAN, banking, passport, insurance and certificate services. The website brings the centre online and adds handy tools that bring people back.",

    problem:
      "The centre depended on walk-in customers and word of mouth. Citizens had no easy way to see available services, send a request or prepare documents like Aadhaar scans in the right size before visiting.",

    solution:
      "Built a fast, mobile-first portal with Next.js, TypeScript and Tailwind CSS. Visitors can browse services, book a service request that lands in Google Sheets, and use free utilities such as Merge Two Image, Scan to PDF and a Passbook tool.",

    features: [
      "Service pages for Aadhaar, PAN, banking, passport, insurance and certificates",
      "Book a Service request form saved to Google Sheets",
      "Merge Two Image tool to combine card front and back under 100 KB",
      "Scan to PDF tool for multiple documents",
      "Passbook tool",
      "Government portal quick links",
      "WhatsApp and phone contact with working hours",
      "Promotional banners for key services",
      "Fully responsive and easy to use on low-end phones",
    ],

    results: [
      { value: "8+", label: "Services Listed" },
      { value: "3", label: "Free Utility Tools" },
      { value: "24/7", label: "Online Service Requests" },
    ],
  },
  {
    slug: "pt-kisan-kumar",
    name: "Pt. Kisan Kumar Astrology",
    category: "Web App",
    liveUrl: "https://ptnkishankumar.in",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Sheets",
    ],
    description:
      "A personal brand and booking website for Vedic astrologer Pt. Kisan Kumar, with consultation booking, service pricing, sample reports and UPI payments.",

    imageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",

    overview:
      "Pt. Kisan Kumar is a Nadi Nakshatra, KP and Lal Kitab astrologer based in Bengaluru. The website presents his approach, services and client stories, and lets visitors book a free 30 minute consultation or buy readings online.",

    problem:
      "The astrologer wanted to move beyond social media enquiries and offer a trustworthy, professional way for clients to understand his services, see sample reports and book and pay online.",

    solution:
      "Built an elegant, Hindi and English friendly website with Next.js, TypeScript and Tailwind CSS. Consultation bookings and birth details are stored in Google Sheets, services are priced clearly with sample PDF reports, and payments are collected by UPI before confirming on WhatsApp.",

    features: [
      "Free 30 minute consultation booking by topic",
      "Service catalogue with clear pricing",
      "Sample report PDFs for each service",
      "UPI payment and WhatsApp confirmation flow",
      "Birth details and question form saved to Google Sheets",
      "Client testimonials including video",
      "About page with story and approach",
      "SEO optimized with structured metadata",
      "Mobile-first design in Hindi and English",
    ],

    results: [
      { value: "6", label: "Consultation Areas" },
      { value: "24 hrs", label: "Reply Time" },
      { value: "100%", label: "Mobile Responsive" },
    ],
  },
  {
    slug: "ganga-amrit",
    name: "Ganga Amrit",
    category: "Business Website",
    liveUrl: "https://gangaamrit.co.in",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
    description:
      "A modern business website for Ganga Amrit showcasing the company's products, services, and brand with a fast, responsive, and SEO-friendly user experience.",

    cloudinaryId: "v1783761980/gangaamrit.png",

    overview:
      "Ganga Amrit is a professionally designed corporate website that strengthens the company's digital presence by presenting its products, company information, and customer contact channels in an attractive and easy-to-navigate interface.",

    problem:
      "The business required a modern online platform to showcase its products, improve brand credibility, and provide customers with an easy way to learn about the company and get in touch.",

    solution:
      "Built a responsive website using Next.js and Tailwind CSS with optimized performance and SEO. The platform highlights company information, product offerings, contact details, and inquiry forms while delivering an excellent experience across desktop and mobile devices.",

    features: [
      "Responsive mobile-first design",
      "Product showcase pages",
      "Company profile and about section",
      "Contact and enquiry forms",
      "SEO optimized pages",
      "Fast page loading with Next.js",
      "Image optimization",
      "Google Maps integration",
      "Clean and modern UI/UX",
    ],

    results: [
      { value: "100%", label: "Responsive Design" },
      { value: "SEO", label: "Optimized Website" },
      { value: "Fast", label: "Performance Optimized" },
    ],
  },
  {
    slug: "face-recognition-attendance",
    name: "Face Recognition Attendance System",
    category: "AI & Education",
    poweredByLexical: true,
    technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "OpenCV",
      "MongoDB",
      "Shadcn UI",
      "PRISMA",
      "Tailwind",
    ],
    description:
      "An AI-powered attendance management platform that automatically identifies students using facial recognition and records attendance in real time.",

    cloudinaryId: "v1783762760/attandance-marking-platfrom.jpg",

    overview:
      "The Face Recognition Attendance System streamlines attendance management for educational institutions by replacing manual attendance with AI-based facial recognition. It provides a modern dashboard for managing students, attendance records, and real-time recognition results.",

    problem:
      "Traditional attendance methods are time-consuming, prone to proxy attendance, and require manual record keeping. Educational institutions needed a faster, more accurate, and automated solution.",

    solution:
      "Developed a full-stack attendance platform using Next.js for the frontend and FastAPI with OpenCV for facial recognition. Student face encodings are securely stored, allowing the system to recognize individuals through a webcam and automatically mark attendance in MongoDB with minimal user interaction.",

    features: [
      "AI-powered facial recognition",
      "Automatic attendance marking",
      "Student registration with face dataset",
      "Real-time webcam detection",
      "Attendance history and reports",
      "Admin dashboard for student management",
      "MongoDB database integration",
      "Responsive dashboard for desktop and mobile",
      "Secure REST API using FastAPI",
    ],

    results: [
      { value: "95%+", label: "Recognition Accuracy" },
      { value: "80%", label: "Reduced Attendance Time" },
      { value: "100%", label: "Digital Attendance Records" },
    ],
  },
];
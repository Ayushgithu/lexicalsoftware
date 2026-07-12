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
];

export const projects: Project[] = [
{
  slug: "uday-clinic-jhansi",
  name: "Uday Clinic Jhansi",
  category: "Healthcare",
  featured: true,
  technologies: [
    "Next.js",
    "MongoDB",
    "Tailwind CSS",
    "Vercel"
  ],
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
    "Fast deployment with Vercel"
  ],

  results: [
    { value: "100%", label: "Responsive Design" },
    { value: "24/7", label: "Appointment Requests" },
    { value: "SEO", label: "Optimized Website" }
  ]
},
  {
  slug: "ganga-amrit",
  name: "Ganga Amrit",
  category: "Business Website",
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Vercel"
  ],
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
    "Clean and modern UI/UX"
  ],

  results: [
    { value: "100%", label: "Responsive Design" },
    { value: "SEO", label: "Optimized Website" },
    { value: "Fast", label: "Performance Optimized" }
  ]
},
  {
  slug: "face-recognition-attendance",
  name: "Face Recognition Attendance System",
  category: "AI & Education",
  technologies: [
    "Next.js",
    "Python",
    "FastAPI",
    "OpenCV",
    "MongoDB",
    "Shadcn UI",
    "PRISMA",
    "Tailwind"
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
    "Secure REST API using FastAPI"
  ],

  results: [
    { value: "95%+", label: "Recognition Accuracy" },
    { value: "80%", label: "Reduced Attendance Time" },
    { value: "100%", label: "Digital Attendance Records" }
  ]
},
  // {
  //   slug: "clinicflow-booking",
  //   name: "ClinicFlow Booking",
  //   category: "Web App",
  //   technologies: ["Next.js", "Java", "Spring Boot", "MySQL"],
  //   description:
  //     "An appointment booking and patient management web app for a multi-doctor clinic, replacing phone-based scheduling.",
  //   cloudinaryId: "", // e.g. "projects/clinicflow-booking"
  //   overview:
  //     "ClinicFlow gives patients an online booking calendar showing real-time doctor availability, while clinic staff manage appointments, patient records, and reminders from a single dashboard.",
  //   problem:
  //     "The clinic relied entirely on phone calls for booking, leading to long hold times for patients and frequent double-bookings across its three doctors.",
  //   solution:
  //     "We built a Spring Boot backend with MySQL to manage doctor schedules and patient records, paired with a Next.js frontend offering a public booking calendar and a staff dashboard for managing appointments and sending automated SMS reminders.",
  //   features: [
  //     "Public booking calendar with real-time availability",
  //     "Staff dashboard for appointments and patient records",
  //     "Automated SMS appointment reminders",
  //     "Doctor-specific schedules and time-off management",
  //   ],
  //   results: [
  //     { value: "50%", label: "Fewer no-shows" },
  //     { value: "3", label: "Doctor schedules managed" },
  //     { value: "24/7", label: "Online booking availability" },
  //   ],
  // },
  // {
  //   slug: "routewise-driver-app",
  //   name: "RouteWise Driver App",
  //   category: "Mobile App",
  //   technologies: ["React Native", "Node.js", "PostgreSQL"],
  //   description:
  //     "A cross-platform mobile app for delivery drivers to view assigned routes, mark deliveries complete, and capture proof of delivery photos.",
  //   cloudinaryId: "", // e.g. "projects/routewise-driver-app"
  //   overview:
  //     "RouteWise is a React Native app that gives delivery drivers their daily route, turn-by-turn stop order, and a simple way to confirm deliveries with a photo and signature \u2014 syncing back to the dispatch dashboard in real time.",
  //   problem:
  //     "Drivers were using paper delivery sheets and calling dispatch to confirm completions, causing delays in updating customers and no record of proof of delivery.",
  //   solution:
  //     "We built a React Native app (iOS and Android) with offline support for areas with poor signal, syncing route and delivery status to a Node.js API backed by PostgreSQL as soon as connectivity is available.",
  //   features: [
  //     "Daily route view with optimized stop order",
  //     "Photo and signature capture for proof of delivery",
  //     "Offline-first design with background sync",
  //     "Push notifications for new or updated routes",
  //   ],
  //   results: [
  //     { value: "35%", label: "Faster delivery confirmations" },
  //     { value: "100%", label: "Deliveries with proof captured" },
  //     { value: "2", label: "Platforms from one codebase" },
  //   ],
  // },
  // {
  //   slug: "billbox-invoicing-api",
  //   name: "BillBox Invoicing API",
  //   category: "API / Backend",
  //   technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
  //   description:
  //     "A standalone invoicing and billing API used by a SaaS platform to generate, send, and track invoices for its customers.",
  //   cloudinaryId: "", // e.g. "projects/billbox-invoicing-api"
  //   overview:
  //     "BillBox is a REST API that handles invoice generation, PDF rendering, payment status tracking, and webhook notifications \u2014 built as a service the client's existing platform calls for all billing operations.",
  //   problem:
  //     "The client's monolithic application had billing logic tightly coupled to its codebase, making it hard to update invoice templates or add new payment providers without risking the whole app.",
  //   solution:
  //     "We extracted billing into a standalone Spring Boot service with its own PostgreSQL database, exposing a REST API for invoice creation, PDF generation, and status webhooks, deployed independently on AWS so it can scale and deploy separately from the main app.",
  //   features: [
  //     "REST API for invoice creation and management",
  //     "PDF invoice generation with customizable templates",
  //     "Webhook notifications for payment status changes",
  //     "Independent deployment and scaling on AWS",
  //   ],
  //   results: [
  //     { value: "10k+", label: "Invoices processed monthly" },
  //     { value: "99.95%", label: "API uptime" },
  //     { value: "<200ms", label: "Average response time" },
  //   ],
  // },
  // {
  //   slug: "campushub-portal",
  //   name: "CampusHub Portal",
  //   category: "Web App",
  //   technologies: ["Next.js", "PHP", "MySQL"],
  //   description:
  //     "A student portal for a coaching institute to share study materials, track attendance, and publish exam results.",
  //   cloudinaryId: "", // e.g. "projects/campushub-portal"
  //   overview:
  //     "CampusHub gives students a single login to view their attendance, download study materials by subject, and check exam results, while staff upload content and mark attendance from an admin panel.",
  //   problem:
  //     "The institute shared materials over WhatsApp groups and announced results via printed notices, making it hard for students to find past materials or check their records.",
  //   solution:
  //     "We modernized the institute's existing PHP/MySQL backend and built a new Next.js portal on top of it, giving students organized access to materials, attendance, and results, with an admin panel for staff to manage content.",
  //   features: [
  //     "Student login with attendance and result history",
  //     "Subject-organized study material downloads",
  //     "Admin panel for uploading materials and marking attendance",
  //     "Built on the institute's existing PHP/MySQL data",
  //   ],
  //   results: [
  //     { value: "500+", label: "Students onboarded" },
  //     { value: "70%", label: "Drop in WhatsApp queries" },
  //     { value: "1", label: "Unified login for all materials" },
  //   ],
  // },
  // {
  //   slug: "pulsefit-membership",
  //   name: "PulseFit Membership App",
  //   category: "Mobile App",
  //   technologies: ["React Native", "Spring Boot", "MySQL"],
  //   description:
  //     "A membership management app for a gym chain, letting members book classes, track check-ins, and manage subscriptions.",
  //   cloudinaryId: "", // e.g. "projects/pulsefit-membership"
  //   overview:
  //     "PulseFit is a React Native app where gym members view their membership status, book group classes, and check in via QR code, while gym staff manage class schedules and membership renewals from a web admin panel.",
  //   problem:
  //     "The gym chain managed memberships on paper and class bookings via a shared notebook at the front desk, leading to overbooked classes and no easy way for members to check their membership status.",
  //   solution:
  //     "We built a React Native app for members (class booking, QR check-in, membership status) backed by a Spring Boot API and MySQL database, plus a web admin panel for staff to manage classes, capacity limits, and renewals.",
  //   features: [
  //     "Class booking with capacity limits and waitlists",
  //     "QR code check-in at the front desk",
  //     "Membership status and renewal reminders",
  //     "Admin panel for class schedules and member management",
  //   ],
  //   results: [
  //     { value: "3", label: "Gym locations using the app" },
  //     { value: "90%", label: "Classes booked via app" },
  //     { value: "0", label: "Overbooked classes since launch" },
  //   ],
  // },
];

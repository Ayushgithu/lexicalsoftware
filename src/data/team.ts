export interface SkillRating {
  name: string;
  level: number; // 0-100
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  experience: string;
  email: string;
  cloudinaryId?: string;
  localImage?: string;
  bio: string;
  resumeUrl?: string;
  availability: "available" | "busy" | "on-leave";
  quote: string;
  currentlyBuilding: string;
  funFacts: string[];
  skills: SkillRating[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export const team: TeamMember[] = [
  {
    slug: "akash-gupta",
    name: "Akash Gupta",
    role: "Sr Consultant",
    experience: "9+ years",
    email: "agupta2208@gmail.com",
    cloudinaryId: "",
    resumeUrl: "/resumes/kuldeep-singh-rajpoot.pdf",
    bio: "Specializes in strategic consulting, technical guidance, and delivering effective solutions for complex business needs.",
    availability: "available",
    quote: "Turning challenges into clear strategies and practical solutions.",
    currentlyBuilding: "Strategic solutions that help businesses improve and grow",
    funFacts: [
      "Believes every problem has a practical solution",
      "Turns complex challenges into simple strategies",
      "Always asks the right questions before making decisions",
    ],
    skills: [
      { name: "Java", level: 100 },
      { name: "Spring Boot", level: 100 },
      { name: "MySQL", level: 95 },
      { name: "AWS", level: 95 },
      { name: "Docker", level: 95 },
      { name: "Git", level: 98 },
    ],
    social: {
      linkedin: "",
    },
  },
  {
    slug: "kuldeep-singh-rajpoot",
    name: "Kuldeep Singh Rajpoot",
    role: "Developer",
    experience: "2+ years",
    email: "kuldeepsinghrajpoot40@gmail.com",
    cloudinaryId: "",
    resumeUrl: "/resumes/kuldeep-singh-rajpoot.pdf",
    bio: "Specializes in scalable backend systems, API design, and database performance.",
    availability: "available",
    quote: "First, solve the problem. Then, write the code.",
    currentlyBuilding: "Microservices architecture with Spring Boot and Kafka",
    funFacts: [
      "Debugs best at midnight",
      "Can write SQL queries faster than most people Google them",
      "Once fixed a production bug in under 3 minutes",
    ],
    skills: [
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 65 },
      { name: "Git", level: 80 },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/kuldeepsinghrajpoot",
    },
  },
  {
    slug: "ayush-gupta",
    name: "Ayush Gupta",
    role: "Developer",
    experience: "2+ years",
    email: "ayushguptajan22@gmail.com",
    cloudinaryId: "",
    //localImage: "/images/team/ayush-gupta.jpeg",
    resumeUrl: "/resumes/ayush-gupta.pdf",
    bio: "Builds end-to-end web applications with a focus on clean architecture and developer experience.",
    availability: "available",
    quote: "Make it work, make it right, make it fast — in that order.",
    currentlyBuilding: "Full-stack SaaS platform with Next.js and Spring Boot",
    funFacts: [
      "Tea over coffee, always",
      "Has strong opinions about folder structure",
      "Reads changelogs for fun",
    ],
    skills: [
      { name: "React", level: 85 },
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "AWS", level: 65 },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/ayush-gupta-b986a0225",
    },
  },
  {
    slug: "utkarsh-saxena",
    name: "Utkarsh Saxena",
    role: "Developer",
    experience: "2+ years",
    email: "utkarshsaxena19dec@gmail.com",
    cloudinaryId: "",
    resumeUrl: "/resumes/utkarsh-saxena.pdf",
    bio: "Crafts interactive, accessible interfaces with React and modern CSS.",
    availability: "available",
    quote: "Good UI is invisible — users just feel it.",
    currentlyBuilding: "Component design system with React and Tailwind CSS",
    funFacts: [
      "Pixel-perfect or nothing",
      "Judges websites before reading their content",
      "Animates everything, including grocery lists",
    ],
    skills: [
      { name: "React", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "Git", level: 75 },
    ],
    social: {
      linkedin: "",
    },
  },
  {
    slug: "nikhil-rajpoot",
    name: "Nikhil Rajpoot",
    role: "UI/UX Designer",
    experience: "2+ years",
    email: "nikhilrajpoot103@gmail.com",
    cloudinaryId: "",
    resumeUrl: "/resumes/nikhil-rajpoot.pdf",
    bio: "Designs clean, user-friendly interfaces and translates ideas into polished, ready-to-build UI.",
    availability: "available",
    quote: "Good design feels invisible — users just know it works.",
    currentlyBuilding: "UI component library and design system in Figma",
    funFacts: [
      "Spots a misaligned pixel from across the room",
      "Designs UI in his head before opening Figma",
      "Believes every click should feel satisfying",
    ],
    skills: [
      { name: "Figma", level: 90 },
      { name: "UI Design", level: 88 },
      { name: "UX Research", level: 78 },
      { name: "Prototyping", level: 85 },
      { name: "Wireframing", level: 85 },
      { name: "Adobe XD", level: 72 },
    ],
    social: {
      linkedin: "",
    },
  },
  {
    slug: "dhruv-singh-jadon",
    name: "Dhruv Singh Jadon",
    role: "SDET (Tester)",
    experience: "1+ years",
    email: "dhruvsinghjadonjgd@gmail.com",
    cloudinaryId: "",
    bio: "Software Development Engineer in Test who breaks things before users do, using test cases, automation and API checks to keep every release solid.",
    availability: "available",
    quote: "A bug caught early is a customer saved later.",
    currentlyBuilding: "Automated regression suite for our web apps",
    funFacts: [
      "Finds edge cases nobody thought of",
      "Treats every release like a puzzle to break",
      "Writes test cases before the coffee gets cold",
    ],
    skills: [
      { name: "Manual Testing", level: 88 },
      { name: "Selenium", level: 80 },
      { name: "Postman", level: 82 },
      { name: "Jira", level: 78 },
      { name: "API Testing", level: 82 },
      { name: "Test Automation", level: 78 },
    ],
    social: {
      linkedin: "",
    },
  },
];
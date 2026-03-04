import { Project, EducationItem, ExperienceItem, TechCategory, Metric } from "../types";

const ICON_BASE = "/stacks-icons";

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "CoachMe",
    description:
      "Full-stack SaaS platform connecting certified fitness coaches with clients. Features multi-role RBAC (Admin / Coach / Client), real-time 1:1 messaging, coach verification workflow with audit trail, secure media storage via Cloudflare R2, and full internationalisation (EN/FR). Delivered end-to-end — from requirements to DNS.",
    tags: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Pusher", "Cloudflare R2", "Redis", "JWT RBAC"],
    image: "/project-images/mandara.PNG",
    liveUrl: "https://coachme-by-ecotofitness.com/",
    githubUrl: "#",
    category: "SaaS / Marketplace",
    status: "Live",
  },
  {
    id: "02",
    title: "AI Educational Backend",
    description:
      "Production REST API backend generating flashcards and quizzes from 6 input modes — text, documents (PDF/DOCX), image OCR, audio transcription, and 30+ URL platforms including YouTube and TikTok. Multi-provider AI abstraction (Claude + GPT) with parallel batch processing, system prompt caching, and 6-tier subscription enforcement across 13 service modules.",
    tags: ["Node.js", "TypeScript", "Express", "Anthropic Claude", "OpenAI GPT", "AssemblyAI", "FFmpeg", "Tesseract.js"],
    image: "/project-images/ai-educational-backend.PNG",
    liveUrl: "#",
    githubUrl: "#",
    category: "Backend API",
    status: "Confidential",
  },
  {
    id: "03",
    title: "Livquiz",
    description:
      "Interactive educational platform serving students, teachers, and anonymous users. As part of the frontend team, built the quiz creation flow (manual and AI-assisted), community screen, onboarding flow, and landing pages — translating Figma designs into production-ready Next.js interfaces. Also engineered the standalone AI content-generation backend powering the platform's AI features.",
    tags: ["Next.js", "React.js", "Node.js", "TypeScript", "REST APIs"],
    image: "/project-images/livquiz.PNG",
    liveUrl: "https://www.livquiz.com/",
    githubUrl: "#",
    category: "EdTech Platform",
    status: "Live",
  },
  {
    id: "04",
    title: "LinguaMentor",
    description:
      "AI-orchestrated language proficiency evaluation system. Designed to teach, evaluate, adapt, and predict exam readiness autonomously at scale using localised LLMs and voice models. Currently in active development.",
    tags: ["Next.js", "Node.js", "FastAPI", "Python", "TypeScript", "AI Models"],
    image: "/project-images/linguamentor.PNG",
    liveUrl: "#",
    githubUrl: "#",
    category: "AI EdTech",
    status: "In Development",
  },
  {
    id: "05",
    title: "Personal Portfolio",
    description:
      "This portfolio — built with immersive HUD aesthetics, custom particle systems, Three.js 3D elements, and Framer Motion physics. The source is public on GitHub.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    image: "/project-images/portfolio.PNG",
    liveUrl: "https://kefoueg-frank.vercel.app/",
    githubUrl: "https://github.com/KefouegFrank/kefoueg-frank",
    category: "Frontend",
    status: "Live",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    year: "2023 - 2024",
    degree: "B. Tech in Software Engineering",
    institution: "Institut Universitaire des Grandes Écoles des Tropiques",
    modules: ["Advanced Web Engineering", "System Architecture", "Database Design"],
  },
  {
    year: "2020 - 2022",
    degree: "HND in Software Engineering",
    institution: "Institut Universitaire des Grandes Écoles des Tropiques",
    modules: ["Programming Fundamentals", "Backend Patterns", "Frontend Development"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "2024 – Present",
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    achievements: [
      "Designed and delivered CoachMe — a full-stack SaaS platform connecting certified fitness coaches with clients — handling the complete product lifecycle from client discovery and PRD documentation to production deployment.",
      "Architected a multi-role system (Admin / Coach / Client) with custom JWT-based RBAC, bcrypt hashing, and httpOnly cookie session management — full control over token lifecycle without third-party auth abstractions.",
      "Built real-time 1:1 messaging via Pusher WebSocket channels with database-level read-receipt tracking; optimised PostgreSQL schema with strategic Prisma @@index annotations — reducing query time from seconds to milliseconds.",
      "Integrated Cloudflare R2 for secure media storage via pre-signed URLs, Upstash Redis rate limiting, full i18n (EN/FR); managed domain purchase, DNS configuration, and staging-to-production pipeline independently.",
    ],
  },
  {
    year: "Sept 2023 – May 2025",
    role: "Full-Stack Developer",
    company: "Livquiz Ltd (Remote)",
    achievements: [
      "Owned and built key user-facing features end to end — including the quiz creation flow (manual and AI-assisted modes), community screen, personalised onboarding flow, and all marketing landing pages — translating Figma designs into pixel-perfect, responsive Next.js interfaces.",
      "Built a reusable component architecture and design system ensuring visual consistency across the platform; implemented SSR/SSG strategies to improve Core Web Vitals and SEO; handled REST API integration with robust state management, error boundaries, and loading states.",
      "Engineered a standalone AI content-generation backend (13 service modules) abstracting Anthropic Claude and OpenAI GPT — multi-modal ingestion across 30+ platforms, parallel batch processing via Promise.all, and 6-tier subscription enforcement middleware.",
      "Collaborated in Agile/Scrum sprints across a cross-functional remote team — participating in code reviews, sprint planning, and CI/CD delivery across both frontend and backend streams.",
    ],
  },
  {
    year: "Feb 2023 – Jul 2023",
    role: "Full-Stack Developer — Internship",
    company: "Levegi Sarl",
    achievements: [
      "Built Ensemble.cm (Laravel + MySQL) — a social platform for blogging, job listings, and user interaction — including admin dashboard, role-based access control, and secure authentication.",
      "Developed the Trip Management System RESTful API: designed and documented endpoints for trip creation, updates, and user management with authentication, data validation, and RBAC.",
      "Participated in Agile/Scrum ceremonies — sprint planning, standups, and retrospectives — gaining hands-on experience in cross-functional team collaboration.",
    ],
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    id: "01",
    title: "Frontend",
    subtitle: "WHAT USERS SEES & FEELS & INTERACTS",
    techs: [
      { name: "JavaScript", icon: `${ICON_BASE}/javascript.svg` },
      { name: "TypeScript", icon: `${ICON_BASE}/typescript.svg` },
      { name: "HTML5", icon: `${ICON_BASE}/html-5.svg` },
      { name: "CSS3", icon: `${ICON_BASE}/css.svg` },
      { name: "Tailwind CSS", icon: `${ICON_BASE}/tailwind-css.svg` },
      { name: "Next.js", icon: `${ICON_BASE}/next.js.svg` },
    ],
  },
  {
    id: "02",
    title: "Backend",
    subtitle: "CORE-LOGICS, DATA-STREAMS & SERVERS, API",
    techs: [
      { name: "Node.js", icon: `${ICON_BASE}/node-js-96.png` },
      { name: "Express.js", icon: `${ICON_BASE}/express-js-50.png` },
      { name: "Laravel", icon: `${ICON_BASE}/laravel-96.png` },
      { name: "Python", icon: `${ICON_BASE}/python.svg` },
      { name: "PostgreSQL", icon: `${ICON_BASE}/postgresql.svg` },
    ],
  },
  {
    id: "03",
    title: "Others",
    subtitle: "TOOLS, DEVOPS & INFRASTRUCTURE ECOSYSTEMS",
    techs: [
      { name: "Docker", icon: `${ICON_BASE}/docker-logo-96.png` },
      { name: "Git", icon: `${ICON_BASE}/git-logo.svg` },
      { name: "Postman", icon: `${ICON_BASE}/postman.svg` },
    ],
  },
];

export const HERO_ROLES = [
  "Full-Stack Software Engineer",
  "Backend Architect",
  "AI Integration Engineer",
  "Production Systems Builder",
];

export const METRICS: Metric[] = [
  { value: ["3+"], label: "YEARS EXP." },
  { value: ["3+"], label: "PROJECTS" },
  { value: ["8+"], label: "TECH STACKS" },
];

export const SOFT_SKILLS = [
  "Communication",
  "Problem Solving",
  "Creativity",
  "Collaboration",
  "Adaptability",
  "Fast Learning",
];

export const CONTACT_INFO = {
  email: "kefoueg@gmail.com",
  github: "https://github.com/KefouegFrank",
  linkedin: "https://www.linkedin.com/in/kefoueg-frank-61b64424a",
  twitter: "#",
};

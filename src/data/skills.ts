import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Python", category: "backend" },

  // Databases
  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Redis", category: "tools" },
  { name: "Prisma", category: "tools" },
  { name: "REST APIs", category: "tools" },

  // Other
  { name: "AI Integration", category: "other" },
  { name: "WordPress", category: "other" },
  { name: "VPS Deployment", category: "other" },
];

export const skillsByCategory = {
  frontend: skills.filter(s => s.category === "frontend"),
  backend: skills.filter(s => s.category === "backend"),
  database: skills.filter(s => s.category === "database"),
  tools: skills.filter(s => s.category === "tools"),
  other: skills.filter(s => s.category === "other"),
};

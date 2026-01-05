import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ensemble",
    title: "Ensemble.cm",
    description: "Social platform for blogging, user interaction, and job applications with admin dashboard",
    tech: ["Laravel", "MySQL", "JavaScript"],
    features: [
      "Authentication and role-based access control",
      "Content management system",
      "User interaction features",
      "Admin dashboard for management"
    ],
  },
  {
    id: "trip-management",
    title: "Trip Management System",
    description: "RESTful API backend for trip creation, updates, and user management",
    tech: ["Laravel", "REST APIs", "MySQL"],
    features: [
      "Clean API design",
      "Authentication system",
      "Data validation",
      "Trip CRUD operations"
    ],
  }
];

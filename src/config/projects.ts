export type Project = {
  id: string;
  title: string;
  description: string;
  category: "Enterprise System" | "Thesis Project" | "Other";
  techStack: string[];
  imageUrl: string;
  link?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "andon-monitoring",
    title: "Andon Monitoring System",
    description: "Real-time tracking and data dashboard for manufacturing lines, serving as my thesis project.",
    category: "Thesis Project",
    techStack: ["Vue.js", "Node.js", "SQL", "WebSockets"],
    imageUrl: "https://placehold.co/600x400/18181b/ffffff?text=Andon+Monitoring+System",
    highlights: [
      "Real-time equipment status tracking",
      "Live data visualization and dashboards",
      "Reduced downtime response by 30%"
    ]
  },
  {
    id: "enterprise-erp",
    title: "Global ERP System",
    description: "A comprehensive enterprise resource planning application used by 5,000+ internal employees across multiple regions.",
    category: "Enterprise System",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://placehold.co/600x400/18181b/ffffff?text=Global+ERP+System",
    highlights: [
      "Translated complex business requirements into scalable UI features",
      "Optimized load times by 40% with Server Components",
      "Integrated secure SSO authentication"
    ]
  },
  {
    id: "enterprise-crm",
    title: "Sales & CRM Portal",
    description: "A customer relationship management tool tailored for B2B sales pipelines and lead tracking.",
    category: "Enterprise System",
    techStack: ["React", "Redux", "Material-UI", "Node.js"],
    imageUrl: "https://placehold.co/600x400/18181b/ffffff?text=Sales+%26+CRM+Portal",
    highlights: [
      "Built custom data grids for 100k+ records",
      "Implemented role-based access control (RBAC)",
      "Automated lead assignment workflows"
    ]
  },
  {
    id: "enterprise-hris",
    title: "HRIS Dashboard",
    description: "Human Resources Information System for managing employee data, payroll, and performance reviews.",
    category: "Enterprise System",
    techStack: ["Next.js", "GraphQL", "ShadcnUI", "PostgreSQL"],
    imageUrl: "https://placehold.co/600x400/18181b/ffffff?text=HRIS+Dashboard",
    highlights: [
      "Developed interactive performance review modules",
      "Streamlined payroll report generation",
      "Achieved 99% accessibility score"
    ]
  }
];

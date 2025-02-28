import { SkillCategory, socialLink } from "@/types";

export const userEmail = "deebisht98.dev@gmail.com";

export const socialLinks: socialLink[] = [
  { name: "GitHub", icon: "github", url: "https://github.com/deebisht98" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/dheerajbisht98",
  },
  {
    name: "Twitter",
    icon: "twitter",
    url: "https://x.com/dheerajbisht_",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Three.js", proficiency: 75 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "Framer Motion", proficiency: 70 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 70 },
      { name: "GraphQL", proficiency: 65 },
      { name: "Firebase", proficiency: 80 },
    ],
  },
  {
    category: "Design",
    icon: "🎨",
    skills: [
      { name: "Figma", proficiency: 85 },
      { name: "UI/UX Design", proficiency: 80 },
      { name: "3D Modeling", proficiency: 65 },
      { name: "Blender", proficiency: 60 },
      { name: "Motion Graphics", proficiency: 70 },
    ],
  },
  {
    category: "DevOps",
    icon: "🚀",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "GitHub Actions", proficiency: 75 },
      { name: "Docker", proficiency: 70 },
      { name: "AWS", proficiency: 65 },
      { name: "Vercel", proficiency: 85 },
    ],
  },
];

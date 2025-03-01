import { LucideIcon } from "lucide-react";

export type socialLink = {
  name: string;
  icon: string;
  url: string;
};

export type Skill = {
  name: string;
  proficiency: number;
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: Skill[];
};

export type ExperienceDetail = {
  responsibility: string;
  description: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  details: ExperienceDetail[];
};

export type ExperienceCategory = {
  category: string;
  icon: string;
  experiences: Experience[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

export type NavItem = {
  name: string;
  url: string;
  icon: LucideIcon;
}

export type NavBarProps = {
  items: NavItem[];
  className?: string;
}

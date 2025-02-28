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

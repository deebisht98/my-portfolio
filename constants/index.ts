import {
  ExperienceCategory,
  Project,
  SkillCategory,
  socialLink,
} from "@/types";

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
      { name: "Encore.ts/Hono", proficiency: 80 },
      { name: "Prisma/Drizzle", proficiency: 80 },
    ],
  },
  {
    category: "Design",
    icon: "🎨",
    skills: [
      { name: "Figma", proficiency: 85 },
      { name: "UI/UX Design", proficiency: 80 },
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
      { name: "Azure", proficiency: 75 },
      { name: "Vercel", proficiency: 85 },
    ],
  },
];

export const experienceCategories: ExperienceCategory[] = [
  {
    category: "Professional",
    icon: "💼",
    experiences: [
      {
        title: "Senior Frontend Developer",
        company: "Tata Consultancy Services Ltd.",
        period: "2021 - Present",
        location: "Noida, New Delhi",
        details: [
          {
            responsibility: "Application Development",
            description:
              "Led development of immersive 3D product visualization tools using Three.js and React.",
          },
          {
            responsibility: "Team Leadership",
            description:
              "Managed a team of 5 developers implementing Agile methodologies to streamline project delivery.",
          },
          {
            responsibility: "Performance Optimization",
            description:
              "Reduced application load time by 45% through code splitting and lazy loading techniques.",
          },
          {
            responsibility: "Architecture Design",
            description:
              "Designed and implemented a scalable component library used across multiple projects.",
          },
        ],
      },
    ],
  },
  {
    category: "Freelance",
    icon: "🚀",
    experiences: [
      {
        title: "Full Stack Developer",
        company: "Self-employed",
        period: "2021 - Present",
        location: "Remote",
        details: [
          {
            responsibility: "E-commerce Development",
            description:
              "Built custom e-commerce solutions using Next.js, Stripe, and Shopify API.",
          },
          {
            responsibility: "3D Web Experiences",
            description:
              "Created immersive 3D web experiences for product showcases using Three.js.",
          },
          {
            responsibility: "Performance Optimization",
            description:
              "Optimized web applications for performance and SEO, improving client conversion rates.",
          },
        ],
      },
      {
        title: "UI/UX Designer",
        company: "Various Clients",
        period: "2020 - 2021",
        location: "Remote",
        details: [
          {
            responsibility: "User Interface Design",
            description:
              "Designed intuitive user interfaces for web and mobile applications using Figma.",
          },
          {
            responsibility: "User Research",
            description:
              "Conducted user research and testing to inform design decisions.",
          },
        ],
      },
    ],
  },
  {
    category: "Education",
    icon: "🎓",
    experiences: [
      {
        title: "Computer Science Engineering",
        company: "Galgotias  University",
        period: "2017 - 2021",
        location: "Greater Noida, Uttar Pradesh",
        details: [
          {
            responsibility: "Bachelor's Degree",
            description:
              "Graduated with honors, specializing in web technologies and interactive media.",
          },
          {
            responsibility: "Key Projects",
            description:
              "Developed a virtual campus tour using WebGL and Three.js as capstone project.",
          },
          {
            responsibility: "Relevant Coursework",
            description:
              "Advanced JavaScript, Data Structures & Algorithms, UI/UX Design, Computer Graphics.",
          },
        ],
      },
      {
        title: "Web Development Bootcamp",
        company: "Code Academy",
        period: "2019",
        location: "Online",
        details: [
          {
            responsibility: "Technical Training",
            description:
              "Intensive 12-week program focused on modern frontend and backend technologies.",
          },
          {
            responsibility: "Final Project",
            description:
              "Built a full-stack social media application using React, Node.js, and MongoDB.",
          },
        ],
      },
    ],
  },
  {
    category: "Certifications",
    icon: "🏆",
    experiences: [
      {
        title: "AWS Certified Developer",
        company: "Amazon Web Services",
        period: "2023",
        location: "Online",
        details: [
          {
            responsibility: "Cloud Expertise",
            description:
              "Demonstrated proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
          },
        ],
      },
      {
        title: "Meta Frontend Developer",
        company: "Meta",
        period: "2022",
        location: "Online",
        details: [
          {
            responsibility: "Frontend Specialization",
            description:
              "Mastered advanced React concepts including state management, hooks, and performance optimization.",
          },
        ],
      },
      {
        title: "Google UX Design",
        company: "Google",
        period: "2021",
        location: "Online",
        details: [
          {
            responsibility: "Design Principles",
            description:
              "Learned comprehensive UX design process including research, wireframing, prototyping, and testing.",
          },
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 4,
    title: "Name It!",
    description:
      "Do you find it difficult to name your projects or ventures? Fear not! Check out this cool name suggestion application which will help you find the best name for your next project, venture, or startup. Keep building!",
    image: "/images/nameit.png",
    githubUrl: "https://github.com/deebisht98/react1",
    tags: ["React", "Node.js"],
    liveUrl: "https://deebisht98.github.io/react1/",
  },
  {
    id: 5,
    title: "FlashType",
    description:
      "Having a good typing speed will always help you as a developer! Here, I present you the typing speed test application, where you can check your typing speed (in wpm) and share the results with your friends too.",
    image: "/images/typedash.png",
    githubUrl: "https://github.com/deebisht98/typedash",
    tags: ["React", "Node.js"],
    liveUrl: "https://deebisht98.github.io/typedash/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "As a developer/designer, you should definitely have your own portfolio website. There are endless benefits. But, a lot of people feel that it would be tough to make one. So here I bring you a tutorial to make your own website.",
    image: "/images/portfolio.png",
    githubUrl: "https://github.com/deebisht98/myPortfolio",
    tags: ["React", "Node.js"],
    liveUrl: "https://deebisht98.github.io/myPortfolio/#/",
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, user authentication, and payment processing.",
    image: "",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 2,
    title: "AI Image Generator",
    description:
      "Web application that generates images using AI based on text prompts from users.",
    image: "",
    tags: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description:
      "A real-time messaging application with features like read receipts, typing indicators, and file sharing.",
    image: "",
    tags: ["Socket.io", "Express", "React", "Firebase"],
    githubUrl: "",
    liveUrl: "",
  },
];

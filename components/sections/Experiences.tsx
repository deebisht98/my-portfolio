"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Experience with details
interface ExperienceDetail {
  responsibility: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  details: ExperienceDetail[];
}

interface ExperienceCategory {
  category: string;
  icon: string;
  experiences: Experience[];
}

export default function Experiences() {
  const [activeTab, setActiveTab] = useState(0);

  const experienceCategories: ExperienceCategory[] = [
    {
      category: "Professional",
      icon: "💼",
      experiences: [
        {
          title: "Senior Frontend Developer",
          company: "TechVision Inc.",
          period: "2022 - Present",
          location: "San Francisco, CA",
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
        {
          title: "Frontend Developer",
          company: "Digital Innovations",
          period: "2020 - 2022",
          location: "Austin, TX",
          details: [
            {
              responsibility: "UI Implementation",
              description:
                "Built responsive interfaces for client applications using React and Next.js.",
            },
            {
              responsibility: "Animation Development",
              description:
                "Created complex UI animations and transitions using Framer Motion and CSS.",
            },
            {
              responsibility: "Cross-browser Compatibility",
              description:
                "Ensured consistent experience across all major browsers and device types.",
            },
          ],
        },
        {
          title: "Junior Web Developer",
          company: "CreativeWeb Solutions",
          period: "2019 - 2020",
          location: "Remote",
          details: [
            {
              responsibility: "Frontend Development",
              description:
                "Developed and maintained client websites using HTML, CSS, and JavaScript.",
            },
            {
              responsibility: "CMS Integration",
              description:
                "Implemented content management systems for client websites.",
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
          title: "Computer Science",
          company: "Tech University",
          period: "2016 - 2020",
          location: "Boston, MA",
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My career journey across various roles and projects, showcasing growth
          and expertise in development and design.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex overflow-x-auto py-2 space-x-2 justify-center">
          {experienceCategories.map((category, index) => (
            <motion.button
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.category}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Experience Display */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          key={activeTab}
          className="space-y-6"
        >
          {experienceCategories[activeTab].experiences.map(
            (experience, idx) => (
              <motion.div
                key={`${experience.company}-${idx}`}
                variants={item}
                className="backdrop-blur-sm bg-black/30 rounded-xl p-6 shadow-lg border border-gray-800/50 mb-8"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {experience.title}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-gray-300">{experience.period}</p>
                    <p className="text-gray-400">{experience.location}</p>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  {experience.details.map((detail, index) => (
                    <div
                      key={index}
                      className="pl-4 border-l-2 border-blue-500"
                    >
                      <h4 className="text-white font-medium">
                        {detail.responsibility}
                      </h4>
                      <p className="text-gray-400 mt-1">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-4xl mx-auto mt-20 mb-12 px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Key Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Improved Web Performance",
              description:
                "Optimized critical rendering path resulting in 45% faster load times across multiple projects.",
              icon: "⚡",
            },
            {
              title: "Successful Team Leadership",
              description:
                "Led frontend team to deliver 12 projects on time and under budget over a 2-year period.",
              icon: "👥",
            },
            {
              title: "3D Web Innovation",
              description:
                "Pioneered implementation of interactive 3D product visualizations increasing conversion by 32%.",
              icon: "🔮",
            },
            {
              title: "Cross-functional Collaboration",
              description:
                "Bridged gap between design and development teams by establishing new workflow processes.",
              icon: "🤝",
            },
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 flex"
            >
              <div className="mr-4 text-4xl">{achievement.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

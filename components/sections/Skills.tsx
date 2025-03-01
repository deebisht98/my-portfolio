"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/constants";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

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
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My expertise spans across various technologies, allowing me to build
          immersive and responsive applications with a focus on 3D experiences.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex overflow-x-auto py-2 space-x-2 justify-center">
          {skillCategories.map((category, index) => (
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

      {/* Skills Display */}
      <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/30 rounded-xl p-6 shadow-lg">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          key={activeTab}
          className="space-y-6"
        >
          {skillCategories[activeTab].skills.map((skill) => (
            <motion.div key={skill.name} variants={item} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.proficiency}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Growth Timeline Section - Fixed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-4xl mx-auto mt-20 mb-12 px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Growth Timeline
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:block">
          {/* Vertical Line - Only visible in md and above */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Timeline Items */}
          {[
            {
              year: "2020",
              title: "Started Web Development",
              description:
                "Began learning HTML, CSS, and JavaScript fundamentals.",
            },
            {
              year: "2021",
              title: "Frontend Frameworks",
              description:
                "Mastered React and started exploring Three.js and WebGL.",
            },
            {
              year: "2022",
              title: "Full Stack Development",
              description:
                "Expanded to backend technologies and database management.",
            },
            {
              year: "2023",
              title: "3D Web Experiences",
              description:
                "Created immersive 3D web applications with advanced animations.",
            },
            {
              year: "2024",
              title: "Advanced Techniques",
              description:
                "Perfecting performance optimization and exploring AI integration.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="mb-12 relative md:flex"
            >
              {/* Dot on the timeline */}
              <div className="hidden md:block absolute left-1/2 top-5 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 z-10 shadow-lg shadow-blue-500/50"></div>

              {/* Content positioning */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 ml-auto" : "md:pl-12"
                }`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800">
                  <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

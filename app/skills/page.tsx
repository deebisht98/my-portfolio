"use client";
import { skillCategories } from "@/constants";
import Skills from "../../components/sections/Skills";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <div className="md:mt-32">
      <Skills />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-4xl mx-auto mt-16 mb-12"
      >
        <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Skills Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 hover:border-opacity-50 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{item.icon}</span>
                <h3 className="text-xl font-bold text-white">
                  {item.category}
                </h3>
              </div>

              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">
                  Average Proficiency
                </p>
                <div className="flex items-center">
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mr-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${
                          item.skills.reduce(
                            (acc, skill) => acc + skill.proficiency,
                            0
                          ) / item.skills.length
                        }%`,
                      }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className={`h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full`}
                    />
                  </div>
                  <span
                    className={`text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent`}
                  >
                    {Math.round(
                      item.skills.reduce(
                        (acc, skill) => acc + skill.proficiency,
                        0
                      ) / item.skills.length
                    )}
                    %
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                Top skill:{" "}
                <span className="text-white">
                  {
                    item.skills.reduce((prev, current) =>
                      prev.proficiency > current.proficiency ? prev : current
                    ).name
                  }
                </span>
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Skills: <span className="text-white">{item.skills.length}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

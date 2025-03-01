"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SociaLinks from "../custom/SocialLinks";
import { userEmail } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8">
      {/* Wave Divider */}
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(17, 24, 39, 0.8)"
            fillOpacity="1"
            d="M0,128L48,133.3C96,139,192,149,288,133.3C384,117,480,75,576,80C672,85,768,139,864,149.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-gray-900/80 backdrop-blur-sm pt-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
              <p className="text-gray-400 mb-4">
                I&apos;m a full-stack developer passionate about creating
                immersive 3D web experiences and innovative applications using
                cutting-edge technologies.
              </p>
              <SociaLinks />
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Projects", "Skills", "Experiences", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`/${
                          item.toLowerCase() === "home"
                            ? ""
                            : item.toLowerCase()
                        }`}
                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                      >
                        <span className="mr-2">→</span> {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-400 mb-4">
                Interested in working together? Feel free to reach out.
              </p>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-px rounded-lg">
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-300 mb-2 w-full">
                    <span className="text-white font-medium break-words">
                      Email: {userEmail}
                    </span>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Location:</span>{" "}
                    Noida, New Delhi
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 my-6"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center py-4"
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} Dheeraj Bisht. All rights reserved.
            </p>
            <div className="mt-2">
              <span className="inline-block h-1 w-10 rounded bg-gradient-to-r from-blue-500 to-purple-600"></span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "../custom/SocialLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please enter a valid email address.",
      });
      return;
    }

    setFormStatus({
      submitted: true,
      success: false,
      message: "Sending message...",
    });

    try {
      const response = await fetch("https://formspree.io/f/xlealyvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //  Ensure correct content type
          Accept: "application/json",
        },
        body: JSON.stringify(formData), // Convert data to JSON
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData); // Log the error for debugging
        setFormStatus({
          submitted: true,
          success: false,
          message: `Failed to send message.  ${
            errorData.error || "Please try again later."
          }`,
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  };

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
        id="getInTouch"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach
          out. I&apos;m always open to discussing new projects, creative ideas
          or opportunities to be part of your vision.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="backdrop-blur-sm bg-black/30 rounded-xl p-6 md:p-8 shadow-lg border border-gray-800"
        >
          <motion.h2
            variants={item}
            className="text-2xl font-bold mb-6 text-white"
          >
            Send a Message
          </motion.h2>

          <form onSubmit={handleSubmit}>
            <motion.div variants={item} className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white"
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div variants={item} className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div variants={item} className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="Project Inquiry">Project Inquiry</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>

            <motion.div variants={item} className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white resize-none"
                placeholder="Tell me about your project, ideas, or questions..."
              ></textarea>
            </motion.div>

            <motion.div variants={item}>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:translate-y-px flex items-center justify-center"
              >
                {formStatus?.submitted && !formStatus.success ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                ) : (
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
                {formStatus?.submitted && !formStatus.success
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {formStatus?.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm"
                >
                  {formStatus.message}
                </motion.div>
              )}
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-sm bg-black/30 rounded-xl p-6 md:p-8 shadow-lg border border-gray-800 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              Contact Information
            </h2>
            ...{" "}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-300">Email</h3>
                  <p className="text-blue-400 mt-1">deebisht98.dev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-300">Location</h3>
                  <p className="text-gray-400 mt-1">Noida, New Delhi</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-300">Working Hours</h3>
                  <p className="text-gray-400 mt-1">
                    Monday - Friday, 9AM - 6PM IST
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-medium text-gray-300 mb-4">Follow Me</h3>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-sm bg-black/30 rounded-xl p-2 shadow-lg border border-gray-800 h-64"
          >
            {/* Placeholder for map - in a real app you would use a map component */}
            <div className="w-full h-full rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"></div>
              <div className="z-10 text-center px-4">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto mb-3 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-blue-400 font-medium">Noida, New Delhi</p>
                <p className="text-gray-400 text-sm mt-2">
                  We Can&apos;t Wait to Welcome You
                </p>
              </div>

              {/* Grid lines for design effect */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="border border-blue-500/10"></div>
                ))}
              </div>

              {/* Location marker glow effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-4xl mx-auto mt-24 mb-16 px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {[
            {
              question: "What services do you offer?",
              answer:
                "I specialize in 3D web experiences, interactive websites, frontend development using React/Next.js, and bespoke web applications that stand out from the crowd.",
            },
            {
              question: "What is your typical process for new projects?",
              answer:
                "My process includes an initial consultation, requirements gathering, design mockups, development phase with regular updates, testing, and deployment with ongoing support.",
            },
            {
              question: "How much do your services cost?",
              answer:
                "Each project is unique, so pricing varies based on requirements, complexity, and timeline. I offer competitive rates and can work with different budget ranges.",
            },
            {
              question:
                "How long does it typically take to complete a project?",
              answer:
                "Timeline depends on project scope and complexity. Simple websites might take 2-3 weeks, while complex applications with 3D elements could take 2-3 months.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="backdrop-blur-sm bg-black/30 rounded-xl p-6 shadow-lg border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-300">
                {faq.question}
              </h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

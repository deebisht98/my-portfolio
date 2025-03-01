"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const chars = titleRef.current.innerText.split("");
    titleRef.current.innerHTML = "";

    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.opacity = "0";
      span.style.display = "inline-block";
      titleRef.current?.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.05 * index,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section className="md:mt-32 flex flex-col justify-center">
      <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 md:p-12 shadow-xl ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-blue-400 font-mono mb-2">Hello, I&apos;m</p>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            {" Dheeraj  Bisht"}
          </h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            I craft responsive websites where technology meets creativity. When
            I&apos;m not coding or pushing pixels, you&apos;ll find me exploring
            new technologies or working on exciting open-source projects.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href={"/projects"}>View Projects</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-400"
              asChild
            >
              <Link href={"/contact"}>
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// return (
//   <section className="mt-24 flex flex-col justify-center">
//     <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px]">
//       <div className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//       <div className="backdrop-blur-lg bg-gradient-to-b from-black to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl ">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <p className="text-blue-400 font-mono mb-2">Hello, I&apos;m</p>
//           <h1
//             ref={titleRef}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
//           >
//             Your Name
//           </h1>

//           <motion.h2
//             className="text-xl md:text-2xl text-gray-300 mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             Frontend Developer & UI/UX Designer
//           </motion.h2>

//           <motion.p
//             className="text-gray-400 max-w-2xl mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1.2 }}
//           >
//             I craft responsive websites where technology meets creativity. When
//             I&apos;m not coding or pushing pixels, you&apos;ll find me exploring
//             new technologies or working on exciting open-source projects.
//           </motion.p>

//           <motion.div
//             className="flex flex-wrap gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.5 }}
//           >
//             <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
//               View Projects
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-blue-600 text-blue-400"
//             >
//               Contact Me <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

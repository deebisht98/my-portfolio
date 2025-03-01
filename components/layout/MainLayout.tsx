"use client";

import {
  Home,
  User,
  Briefcase,
  FlaskConical,
  BookOpenText,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useSpring } from "framer-motion";
import Scene from "../3d/Scene";
import { TubelightNavbar } from "../custom/tubelight-navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("scroll", handleScroll);
      return () => containerElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Projects", url: "/projects", icon: Briefcase },
    { name: "Skills", url: "/skills", icon: BookOpenText },
    { name: "Experiences", url: "/experiences", icon: FlaskConical },
    { name: "Contact", url: "/contact", icon: User },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* 3D background canvas - fixed position */}
      <div className="fixed inset-0 z-0">
        <Canvas shadows>
          <Scene scrollY={scrollY} />
        </Canvas>
      </div>

      {/* Scrollable content container with glass effect */}
      <div
        ref={containerRef}
        className="relative z-10 h-screen overflow-y-auto"
      >
        {/* <Navbar /> */}
        <TubelightNavbar items={navItems} />

        {/* Scroll progress indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
          style={{ scaleX }}
        />

        {/* Content sections with glass morphism */}
        <div className="container mx-auto px-4 pb-24 pt-20">{children}</div>
      </div>
    </div>
  );
}

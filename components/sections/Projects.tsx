// app/components/sections/Projects.tsx

"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { projects } from "@/constants";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="relative h-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 transform transition-transform duration-300">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="opacity-30 group-hover:opacity-40 transition-opacity duration-300"
        />
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl text-white transform-gpu">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-200 transform-gpu">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-2 my-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="transform-gpu">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="relative z-10 flex justify-end gap-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-gray-300 hover:text-white transform-gpu"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-gray-300 hover:text-white transform-gpu"
          >
            <ExternalLink size={20} />
          </motion.a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 md:p-12 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

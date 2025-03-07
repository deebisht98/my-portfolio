"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavBarProps } from "@/types";

export function TubelightNavbar({ items, className }: NavBarProps) {
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState("");

  React.useEffect(() => {
    if (pathName) {
      if (pathName.substring(1) === "") {
        setActiveTab("home");
      } else {
        setActiveTab(pathName.substring(1));
      }
    }
  }, [pathName]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 h-fit",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-muted/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name.toLowerCase();

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name.toLowerCase())}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-secondary/90 hover:text-secondary",
                isActive && "bg-white/15 text-secondary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden text-accent">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-secondary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-secondary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-secondary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-secondary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-secondary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

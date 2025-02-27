import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, User, Briefcase, FileText } from "lucide-react";

export function NavBar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6">
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        
        {['Home', 'About', 'Projects', 'Resume'].map((tab, index) => {
          const icons = [Home, User, Briefcase, FileText];
          const Icon = icons[index];
          const isActive = activeTab === tab;

          return (
            <Link
              key={tab}
              to="#"
              onClick={() => setActiveTab(tab)}
              className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-foreground/80 hover:text-primary ${isActive ? "bg-muted text-primary" : ""}`}
            >
              <span className="hidden md:inline">{tab}</span>
              <span className="md:hidden"><Icon size={18} strokeWidth={2.5} /></span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
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

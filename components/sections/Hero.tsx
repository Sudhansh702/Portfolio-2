"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Welcome to my portfolio
          </span>
        </motion.div>

        <TextReveal
          delay={0.3}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          {portfolioData.personal.name}
        </TextReveal>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent"
        >
          {portfolioData.personal.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-dark-textSecondary max-w-3xl mx-auto mb-12"
        >
          {portfolioData.personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" onClick={scrollToProjects}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToContact}>
            Get in Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: portfolioData.personal.github },
            { icon: Linkedin, href: portfolioData.personal.linkedin },
            { icon: Mail, href: `mailto:${portfolioData.personal.email}` },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white dark:bg-dark-surface shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <social.icon className="w-6 h-6 text-primary" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
          <span className="text-sm text-gray-400 mt-2">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ParallaxWrapper from "@/components/animations/ParallaxWrapper";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background and expertise"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <ParallaxWrapper speed={0.3}>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-6xl text-gray-400 dark:text-gray-500">
                      👨‍💻
                    </span>
                  </div>
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"
                  />
                </div>
              </ParallaxWrapper>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div className="space-y-6">
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {portfolioData.about.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="space-y-4">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.6}>
              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
                >
                  <h3 className="text-xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    Let&apos;s work together!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I&apos;m always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

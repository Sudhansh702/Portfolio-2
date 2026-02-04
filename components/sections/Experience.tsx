"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const line = timeline.querySelector(".timeline-line");
    if (!line) return;

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and achievements"
        />

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700">
            <div
              className="timeline-line w-full h-full bg-gradient-to-b from-primary to-accent origin-top"
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <ScrollReveal
                key={exp.id}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Content */}
                  <div className="w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-2xl bg-white dark:bg-dark-surface shadow-lg border border-gray-200 dark:border-gray-700 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {/* Date Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.2 }}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3`}
                      >
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg text-primary font-semibold mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className={`flex items-start gap-2 ${
                              index % 2 === 0
                                ? "md:flex-row-reverse md:text-right"
                                : ""
                            }`}
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.1 }}
                    className="absolute left-8 md:left-1/2 w-8 h-8 -ml-4 bg-white dark:bg-dark-surface rounded-full border-4 border-primary shadow-lg flex items-center justify-center z-10"
                  >
                    <Briefcase className="w-4 h-4 text-primary" />
                  </motion.div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

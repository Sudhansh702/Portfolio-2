"use client";

import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { portfolioData } from "@/data/portfolio";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: portfolioData.skills.frontend,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Database,
    skills: portfolioData.skills.backend,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: portfolioData.skills.mobile,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: portfolioData.skills.tools,
    color: "from-green-500 to-emerald-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category.title}
              delay={categoryIndex * 0.1}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
            >
              <Card className="group hover:scale-[1.02] transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.05,
                              ease: "easeOut",
                            }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Spring Boot",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AWS",
                "Git",
                "REST API",
                "GraphQL",
                "Tailwind CSS",
                "Framer Motion",
                "GSAP",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:border-primary transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

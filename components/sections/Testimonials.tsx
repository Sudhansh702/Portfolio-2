"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless loop
  const allTestimonials = [
    ...portfolioData.testimonials,
    ...portfolioData.testimonials,
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50 dark:bg-dark-bg overflow-hidden">
      {/* Section Heading - Centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          title="Testimonials"
          subtitle="What people say about working with me"
        />
      </div>

      {/* Marquee Container - Full Width */}
      <div className="relative">
        {/* Gradient Overlays - Extend to screen edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-gray-50 dark:from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-gray-50 dark:from-dark-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling Testimonials */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: isPaused ? 0 : [0, -1 * (portfolioData.testimonials.length * 384)],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 w-96 p-6 rounded-2xl bg-white dark:bg-dark-surface shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-4">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pause Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hover to pause • Scroll automatically
          </p>
        </div>
      </div>
    </section>
  );
}

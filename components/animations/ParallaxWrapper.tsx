"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ParallaxWrapperProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxWrapper({
  children,
  speed = 0.5,
  className,
}: ParallaxWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const yPercent = -50 * speed;

    gsap.to(element, {
      yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

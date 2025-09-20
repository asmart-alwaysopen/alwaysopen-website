import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RiseUpAnimation = ({ 
  children, 
  className = "",
  stagger = 0.1,
  duration = 0.8,
  ease = "power2.out",
  y = 50,
  opacity = 0,
  triggerOnce = true
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all child elements that should be animated
    const elements = Array.from(container.children);

    // Set initial state
    gsap.set(elements, {
      y: y,
      opacity: opacity
    });

    // Create the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: triggerOnce ? "play none none reverse" : "play none none reverse"
      }
    });

    // Animate elements with stagger
    tl.to(elements, {
      duration: duration,
      y: 0,
      opacity: 1,
      ease: ease,
      stagger: stagger
    });

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [stagger, duration, ease, y, opacity, triggerOnce]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default RiseUpAnimation; 
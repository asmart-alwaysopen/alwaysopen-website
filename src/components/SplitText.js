import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function splitText(text, type) {
  if (type === "words") return text.split(/(\s+)/).filter(Boolean);
  if (type === "lines") return text.split(/\n/);
  // default to chars
  return Array.from(text);
}

const SplitText = ({
  text = "",
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef();
  const letters = splitText(text, splitType);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const targets = el.querySelectorAll(".split-text-letter");
    let hasAnimated = false;

    const animate = () => {
      if (hasAnimated) return;
      hasAnimated = true;
      gsap.fromTo(
        targets,
        from,
        {
          ...to,
          delay: (i) => (delay / 1000) * i,
          duration,
          ease,
          stagger: { each: delay / 1000 },
          onComplete: () => {
            if (onLetterAnimationComplete) onLetterAnimationComplete();
          },
        }
      );
    };

    // Intersection Observer for scroll-in-view
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, [text, splitType, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ display: "inline-block", textAlign }}
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          className="split-text-letter"
          style={{ display: "inline-block", whiteSpace: letter.match(/\s/) ? "pre" : undefined }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default SplitText; 
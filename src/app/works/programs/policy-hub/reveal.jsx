"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./policy-hub.module.css";

// Fades content up as it enters the viewport. The first paint uses a plain CSS
// entrance (no JavaScript needed); once hydrated, anything still below the fold
// is held back and animates when it scrolls into view.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...props }) {
  const ref = useRef(null);
  const [state, setState] = useState("shown");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motionClass =
    state === "pending" ? styles.pending : state === "shown" ? styles.rise : "";

  return (
    <Tag
      ref={ref}
      className={`${motionClass} ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

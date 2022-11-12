import "./AnimatedLine.css";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedLine() {
  const animatedLineRef = useRef(null);
  const animatedLineInView = useInView(animatedLineRef, { once: true });

  return (
    <div
      className="AnimatedLineContainer OverflowContainer"
      ref={animatedLineRef}
    >
      <div
        style={{
          transform: animatedLineInView ? "none" : "translateY(-100%)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className="AnimatedLine"
      >
        <div className="Circle"></div>
        <div className="GrowingLine"></div>
        <div className="Circle"></div>
      </div>
    </div>
  );
}

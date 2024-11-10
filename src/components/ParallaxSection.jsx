import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
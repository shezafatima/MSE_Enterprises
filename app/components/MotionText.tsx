"use client";
import { motion } from "framer-motion";

interface MotionTextProps {
  as?: "h1" | "p";
  text: string;
  className?: string;
  delay?: number;
}

export default function MotionText({
  as = "p",
  text,
  className,
  delay = 0,
}: MotionTextProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {text}
    </MotionTag>
  );
}

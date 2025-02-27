"use client";
import React from "react";
import { motion } from "framer-motion";

function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}) {
  return (
    <motion.h2
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={`font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm ${className}`}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export { WordPullUp };


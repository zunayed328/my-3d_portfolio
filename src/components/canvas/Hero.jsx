import { motion } from "framer-motion";

import { styles } from "../../styles";
import { ComputersCanvas } from ".";
import React from "react";
import Typewriter from "../Typewriter";

const Hero = () => {
  const phrases = [
    "AI Engineer",
    "Machine Learning Developer",
    "Deep Learning Enthusiast",
    "Web Application Developer",
    "Python Automation Specialist",
  ];

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Hero Content - Text on LEFT */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        {/* Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text Content - LEFT aligned */}
        <div className="text-left max-w-xl">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Zunayed</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${styles.heroSubText} mt-2 text-white-100 text-[14px] sm:text-[16px]`}
          >
            <p className="mb-2">I build AI systems, ML models, and intelligent automation.</p>
            <Typewriter words={phrases} typingSpeed={100} deletingSpeed={50} delay={1400} />
          </motion.div>
        </div>
      </div>

      {/* 3D Computer Canvas */}
      <ComputersCanvas />

      {/* Scroll Indicator - Mouse Icon */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

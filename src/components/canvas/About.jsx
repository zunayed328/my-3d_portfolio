import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import Typewriter from "../Typewriter";

const About = () => {
  return (
    <>
      {/* 1. HEADER SECTION (Correctly centered) */}
      <div className={`${styles.paddingX} mx-auto max-w-7xl text-center`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>INTRODUCTION</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      </div>

      {/* 2. BIO TEXT SECTION */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4'>
        {/* Ensures text width and padding are centered */}
        <div className={`${styles.paddingX} mx-auto max-w-3xl text-center`}> 
          <p className='text-secondary text-[17px] leading-[30px]'>
            Aspiring AI Engineer specializing in machine learning, deep learning, and intelligent automation. I design and implement production-ready ML systems and data-driven solutions that solve real-world problems. My work blends rigorous model development, scalable engineering, and practical deployment strategies to deliver measurable value across applications.
          </p>

          {/* Live typing animation */}
          <div className='mt-4'>
            <Typewriter
              import React from "react";
              import { motion } from "framer-motion";

              const About = () => {
                return (
                  <section className="relative w-full h-auto mx-auto pb-20 bg-primary">
                    <div className="max-w-7xl mx-auto px-6 mt-20">
                      <motion.div>
                        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest">
                          Introduction
                        </p>
                        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                          Overview.
                        </h2>
                      </motion.div>

                      <motion.p
                        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                      >
                        I am a Computer Science and Engineering student with a deep passion for 
                        Artificial Intelligence and Software Development. I specialize in building 
                        intelligent systems and scalable web applications. My goal is to bridge the 
                        gap between complex algorithms and user-centric design to deliver 
                        meaningful solutions.
                      </motion.p>
        
                      {/* Cards have been removed to maintain a clean, text-focused professional look */}
                    </div>
                  </section>
                );
              };

              export default About;
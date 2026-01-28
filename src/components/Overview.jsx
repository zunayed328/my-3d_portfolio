import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import Typewriter from "./Typewriter";

const Overview = () => {
  return (
    <>
      {/* Header */}
      <div className={`${styles.paddingX} mx-auto max-w-7xl text-center`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>INTRODUCTION</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      </div>

      {/* Bio with Typewriter */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4'>
        <div className={`${styles.paddingX} mx-auto max-w-3xl text-center`}>
          <p className='text-secondary text-[17px] leading-[30px]'>
            Aspiring AI Engineer specializing in machine learning, deep learning, and intelligent automation. I design and implement production-ready ML systems and data-driven solutions that solve real-world problems. My work blends rigorous model development, scalable engineering, and practical deployment strategies to deliver measurable value across applications.
          </p>

          <div className='mt-4'>
            <Typewriter
              words={[
                "AI Engineer",
                "Machine Learning Developer",
                "Deep Learning Enthusiast",
                "Web Application Developer",
                "Python Automation Specialist",
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              delay={1400}
              className={`${styles.sectionSubText} text-white-100 text-[14px] sm:text-[16px]`}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Overview, "about"); // Keeping ID 'about' for navbar navigation

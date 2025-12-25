import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-20 bg-primary'>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Computer Science and Engineering student specializing in machine learning, 
        deep learning, and intelligent automation. I design and implement production-ready 
        ML systems and data-driven solutions that solve real-world problems. My work blends 
        rigorous model development, scalable engineering, and practical deployment strategies 
        to deliver measurable value across applications.
      </motion.p>
    </div>
  );
};

export default About;

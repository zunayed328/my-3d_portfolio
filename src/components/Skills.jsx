import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import {
  javascript,
  typescript,
  python_placeholder,
  java_placeholder,
  cpp_placeholder,
  reactjs,
  nodejs,
} from "../assets/tech";

// Only keeping the first 3 skills to avoid repetition and keep the layout focused
const skills = [
  { name: "Python", icon: python_placeholder, desc: "AI & ML Development" },
  { name: "Java", icon: java_placeholder, desc: "Backend Systems" },
  { name: "C / C++", icon: cpp_placeholder, desc: "Systems Programming" },
];

const SkillCard = ({ index, name, icon, desc }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full sm:w-[320px]' // Fixes the 'huge' card issue by limiting width
  >
    <Tilt
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1.05}
      transitionSpeed={450}
      className='bg-tertiary rounded-[20px] p-[1px] green-pink-gradient shadow-card h-full'
    >
      <div className='bg-tertiary rounded-[20px] py-8 px-10 min-h-[300px] flex justify-evenly items-center flex-col h-full'>
        <img src={icon} alt={name} className='w-24 h-24 object-contain' />
        <h3 className='text-white text-[22px] font-bold text-center mt-4'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px] text-center leading-[20px]'>{desc}</p>
      </div>
    </Tilt>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical stack</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Flex container to align cards side-by-side in rows */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
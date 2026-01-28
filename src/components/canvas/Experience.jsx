import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  const IconComponent = experience.icon;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "0",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div
          className="flex justify-center items-center w-full h-full"
          style={{ margin: 0 }}
        >
          <IconComponent
            strokeWidth={2.5}
            className="w-[70%] h-[70%] text-[#312e81] !m-0 !top-0 !left-0 !static"
          />
        </div>
      }
    >
      {/* Hover-enabled content wrapper */}
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px #915EFF",
          borderColor: "rgba(255, 255, 255, 0.5)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          padding: "24px",
          borderRadius: "16px",
          border: "1px solid transparent",
          cursor: "pointer",
        }}
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills & Expertise
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Leveraging cutting-edge technologies
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

import React from "react";

//import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const TechnologyCard = ({ title, icon, description, color }) => (
    <div className={`flex-1 min-w-[300px] p-8 rounded-xl flex flex-col items-center text-center transition-transform hover:scale-105 ${color}`}>
        <div className="text-white text-6xl mb-6">
            {icon}
        </div>
        <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const CustomServices = () => {
    const technologies = [
        {
            title: "AI & Machine Learning",
            icon: "🧠",
            description: "Specializing in production-ready ML systems, deep learning models, and intelligent automation solutions.",
            color: "bg-red-600"
        },
        {
            title: "Software Engineering",
            icon: "💻",
            description: "Proficient in Python, Java, and C++, building scalable architectures and solving complex algorithmic problems.",
            color: "bg-zinc-800"
        },
        {
            title: "Full Stack Development",
            icon: "🌐",
            description: "Developing modern web applications using React, Node.js, and specialized AI-integrated frontends.",
            color: "bg-zinc-900"
        }
    ];

    return (
        <div className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-white text-5xl font-bold mb-2">Technology</h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="h-[2px] w-8 bg-red-600"></span>
                        <p className="text-red-600 font-medium">what i am doing</p>
                        <span className="h-[2px] w-8 bg-red-600"></span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-8 justify-center">
                    {technologies.map((tech, index) => (
                        <TechnologyCard key={index} {...tech} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomServices;

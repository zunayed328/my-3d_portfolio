import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { futureProjects } from "../constants";

// Custom SVG Icons for Future Projects
const AgentFrameworkIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#915EFF" />
            </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="20" fill="url(#agentGrad)" opacity="0.3" />
        <circle cx="30" cy="30" r="8" fill="#00D4FF" />
        <circle cx="15" cy="20" r="4" fill="#915EFF" />
        <circle cx="45" cy="20" r="4" fill="#ff0080" />
        <circle cx="15" cy="40" r="4" fill="#FFD93D" />
        <circle cx="45" cy="40" r="4" fill="#4ECDC4" />
        <line x1="22" y1="26" x2="15" y2="20" stroke="#00D4FF" strokeWidth="1.5" />
        <line x1="38" y1="26" x2="45" y2="20" stroke="#00D4FF" strokeWidth="1.5" />
        <line x1="22" y1="34" x2="15" y2="40" stroke="#00D4FF" strokeWidth="1.5" />
        <line x1="38" y1="34" x2="45" y2="40" stroke="#00D4FF" strokeWidth="1.5" />
    </svg>
);

const AgentDevIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#915EFF" />
                <stop offset="100%" stopColor="#ff0080" />
            </linearGradient>
        </defs>
        <rect x="15" y="12" width="30" height="36" rx="4" fill="url(#devGrad)" />
        <circle cx="30" cy="25" r="8" fill="rgba(255,255,255,0.3)" />
        <ellipse cx="30" cy="42" rx="10" ry="3" fill="rgba(255,255,255,0.2)" />
        <path d="M22 22 L28 28 L22 34" fill="none" stroke="white" strokeWidth="2" />
        <line x1="30" y1="34" x2="38" y2="34" stroke="white" strokeWidth="2" />
    </svg>
);

const MLDeepLearningIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="mlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff0080" />
                <stop offset="100%" stopColor="#FFD93D" />
            </linearGradient>
        </defs>
        <ellipse cx="30" cy="30" rx="22" ry="18" fill="url(#mlGrad)" opacity="0.3" />
        <ellipse cx="30" cy="30" rx="14" ry="10" fill="rgba(255, 0, 128, 0.5)" />
        <circle cx="20" cy="30" r="3" fill="white" />
        <circle cx="30" cy="30" r="3" fill="white" />
        <circle cx="40" cy="30" r="3" fill="white" />
        <line x1="23" y1="30" x2="27" y2="30" stroke="#00D4FF" strokeWidth="1.5" />
        <line x1="33" y1="30" x2="37" y2="30" stroke="#00D4FF" strokeWidth="1.5" />
        <circle cx="30" cy="18" r="4" fill="#FFD93D" />
        <circle cx="30" cy="42" r="4" fill="#FFD93D" />
        <line x1="30" y1="22" x2="30" y2="26" stroke="#FFD93D" strokeWidth="1.5" />
        <line x1="30" y1="34" x2="30" y2="38" stroke="#FFD93D" strokeWidth="1.5" />
    </svg>
);

const AIInfraIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
        </defs>
        <rect x="10" y="10" width="40" height="40" rx="4" fill="url(#infraGrad)" opacity="0.3" />
        <rect x="15" y="15" width="30" height="10" rx="2" fill="#4ECDC4" />
        <rect x="15" y="28" width="30" height="10" rx="2" fill="#00D4FF" />
        <rect x="15" y="41" width="30" height="6" rx="2" fill="#915EFF" />
        <circle cx="20" cy="20" r="2" fill="white" />
        <circle cx="26" cy="20" r="2" fill="white" />
        <circle cx="20" cy="33" r="2" fill="white" />
        <circle cx="26" cy="33" r="2" fill="#FFD93D" />
    </svg>
);

const MonitoringIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD93D" />
                <stop offset="100%" stopColor="#ff0080" />
            </linearGradient>
        </defs>
        <rect x="10" y="15" width="40" height="30" rx="3" fill="url(#monitorGrad)" opacity="0.3" />
        <rect x="14" y="19" width="32" height="22" rx="2" fill="#0a0a14" />
        <polyline points="18,35 24,28 30,32 36,22 42,26" fill="none" stroke="#4ECDC4" strokeWidth="2" />
        <circle cx="42" cy="26" r="3" fill="#4ECDC4" />
        <rect x="25" y="45" width="10" height="3" rx="1" fill="#FFD93D" />
    </svg>
);

const IntegrationIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="intGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="8" fill="url(#intGrad)" />
        <circle cx="40" cy="20" r="8" fill="#ff0080" />
        <circle cx="20" cy="40" r="8" fill="#FFD93D" />
        <circle cx="40" cy="40" r="8" fill="#4ECDC4" />
        <line x1="28" y1="20" x2="32" y2="20" stroke="white" strokeWidth="2" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="white" strokeWidth="2" />
        <line x1="40" y1="28" x2="40" y2="32" stroke="white" strokeWidth="2" />
        <line x1="28" y1="40" x2="32" y2="40" stroke="white" strokeWidth="2" />
        <path d="M26 26 L34 34" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <path d="M34 26 L26 34" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
    </svg>
);

// Map icons to projects
const iconMap = {
    "Agent Frameworks": AgentFrameworkIcon,
    "Agent Development": AgentDevIcon,
    "ML & Deep Learning": MLDeepLearningIcon,
    "AI Infrastructure": AIInfraIcon,
    "Monitoring": MonitoringIcon,
    "Integrations": IntegrationIcon,
};

const FutureProjectCard = ({ index, title, description, tags }) => {
    const IconComponent = iconMap[title] || AgentFrameworkIcon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.3), 0 20px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
                position: "relative",
                background: "linear-gradient(145deg, rgba(16, 13, 37, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%)",
                padding: "24px",
                borderRadius: "20px",
                border: "1px solid rgba(0, 212, 255, 0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                cursor: "pointer",
                overflow: "hidden",
                backdropFilter: "blur(10px)",
            }}
            className="future-project-card"
        >
            {/* Top gradient border */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.6), transparent)",
            }} />

            {/* Bottom gradient border */}
            <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, rgba(145, 94, 255, 0.6), transparent)",
            }} />

            {/* Circuit corner decorations */}
            <div style={{
                position: "absolute",
                top: "6px",
                left: "6px",
                width: "16px",
                height: "16px",
                borderTop: "2px solid rgba(0, 212, 255, 0.3)",
                borderLeft: "2px solid rgba(0, 212, 255, 0.3)",
            }} />
            <div style={{
                position: "absolute",
                top: "6px",
                right: "6px",
                width: "16px",
                height: "16px",
                borderTop: "2px solid rgba(145, 94, 255, 0.3)",
                borderRight: "2px solid rgba(145, 94, 255, 0.3)",
            }} />

            {/* Icon and Title Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(0, 0, 0, 0.3)",
                    padding: "8px",
                    boxShadow: "0 0 15px rgba(0, 212, 255, 0.2)",
                }}>
                    <IconComponent />
                </div>
                <h3 style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: "700",
                    margin: 0,
                }}>
                    {title}
                </h3>
            </div>

            {/* Description */}
            <p style={{
                color: "#aaa6c3",
                fontSize: "14px",
                margin: 0,
                lineHeight: "1.6",
            }}>
                {description}
            </p>

            {/* Tags */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
            }}>
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        style={{
                            fontSize: "11px",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            background: "rgba(0, 212, 255, 0.1)",
                            border: "1px solid rgba(0, 212, 255, 0.3)",
                            color: "#00D4FF",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const FutureProjects = () => {
    return (
        <div style={{ position: "relative" }}>
            {/* Section Background */}
            <div style={{
                position: "absolute",
                top: "-40px",
                left: "-40px",
                right: "-40px",
                bottom: "-40px",
                background: "linear-gradient(145deg, rgba(10, 8, 24, 0.95) 0%, rgba(16, 13, 37, 0.98) 100%)",
                borderRadius: "32px",
                border: "1px solid rgba(0, 212, 255, 0.15)",
                overflow: "hidden",
                zIndex: -1,
            }}>
                {/* Circuit pattern */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        linear-gradient(rgba(145, 94, 255, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(145, 94, 255, 0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    pointerEvents: "none",
                }} />

                {/* Corner glows */}
                <div style={{
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(145, 94, 255, 0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute",
                    bottom: "-100px",
                    left: "-100px",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
            </div>

            {/* Sparkle decoration */}
            <div style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                fontSize: "28px",
                color: "#915EFF",
                opacity: 0.6,
                zIndex: 1,
            }}>✦</div>

            {/* Section Header */}
            <motion.div
                variants={textVariant()}
                style={{
                    textAlign: "center",
                    marginBottom: "48px",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <p style={{
                    fontSize: "14px",
                    color: "#aaa6c3",
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    marginBottom: "12px",
                }}>
                    What's Next
                </p>
                <h2 style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    background: "linear-gradient(90deg, #00D4FF, #915EFF, #ff0080, #FFD93D, #4ECDC4, #00D4FF)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "gradient-shift 4s ease-in-out infinite",
                    margin: 0,
                }}>
                    Future Projects.
                </h2>
            </motion.div>

            {/* Cards Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                    position: "relative",
                    zIndex: 1,
                }}
                className="future-projects-grid"
            >
                {futureProjects.map((project, index) => (
                    <FutureProjectCard
                        key={project.title}
                        index={index}
                        {...project}
                    />
                ))}
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @media (max-width: 1024px) {
                    .future-projects-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 640px) {
                    .future-projects-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                .future-project-card:hover {
                    border-color: rgba(0, 212, 255, 0.5) !important;
                }
            `}</style>
        </div>
    );
};

export default SectionWrapper(FutureProjects, "future-projects");

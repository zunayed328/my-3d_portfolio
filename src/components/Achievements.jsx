import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Custom SVG Icons for Achievements
const TrophyIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD93D" />
                <stop offset="100%" stopColor="#FF8C00" />
            </linearGradient>
        </defs>
        <path d="M15 8 L45 8 L45 20 C45 32 35 40 30 42 C25 40 15 32 15 20 Z" fill="url(#trophyGradient)" />
        <rect x="25" y="42" width="10" height="8" fill="#FFD93D" />
        <rect x="20" y="50" width="20" height="5" rx="2" fill="#FFA500" />
        <ellipse cx="30" cy="18" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
        <path d="M10 12 L15 12 L15 18 C12 18 10 15 10 12 Z" fill="#FFD93D" opacity="0.8" />
        <path d="M50 12 L45 12 L45 18 C48 18 50 15 50 12 Z" fill="#FFD93D" opacity="0.8" />
    </svg>
);

const ResearchIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="researchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#0099CC" />
            </linearGradient>
        </defs>
        <rect x="12" y="8" width="36" height="44" rx="3" fill="url(#researchGradient)" />
        <rect x="16" y="14" width="20" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
        <rect x="16" y="20" width="28" height="2" rx="1" fill="rgba(255,255,255,0.5)" />
        <rect x="16" y="25" width="24" height="2" rx="1" fill="rgba(255,255,255,0.5)" />
        <rect x="16" y="30" width="26" height="2" rx="1" fill="rgba(255,255,255,0.5)" />
        <rect x="16" y="35" width="20" height="2" rx="1" fill="rgba(255,255,255,0.5)" />
        <rect x="16" y="40" width="22" height="2" rx="1" fill="rgba(255,255,255,0.5)" />
        <circle cx="42" cy="42" r="10" fill="#0d1117" stroke="#00D4FF" strokeWidth="2" />
        <line x1="42" y1="36" x2="42" y2="42" stroke="#00D4FF" strokeWidth="2" />
        <circle cx="42" cy="42" r="2" fill="#00D4FF" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="githubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="22" fill="url(#githubGradient)" />
        <path d="M30 12 C19 12 10 21 10 32 C10 41 16 48 24 50 C25 50 25 49 25 48 L25 44 C19 45 18 41 18 41 C17 39 16 38 16 38 C14 37 16 37 16 37 C18 37 19 39 19 39 C21 42 24 41 25 40 C25 39 26 38 26 37 C21 36 16 34 16 27 C16 25 17 23 18 21 C18 21 17 19 18 16 C18 16 20 16 25 19 C27 18 33 18 35 19 C40 16 42 16 42 16 C43 19 42 21 42 21 C43 23 44 25 44 27 C44 34 39 36 34 37 C35 38 35 40 35 42 L35 48 C35 49 35 50 36 50 C44 48 50 41 50 32 C50 21 41 12 30 12 Z" fill="white" />
    </svg>
);

const HackathonIcon = () => (
    <svg viewBox="0 0 60 60" width="100%" height="100%">
        <defs>
            <linearGradient id="hackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#FF0080" />
            </linearGradient>
        </defs>
        {/* Trophy */}
        <path d="M20 15 L40 15 L40 25 C40 33 33 38 30 40 C27 38 20 33 20 25 Z" fill="url(#hackGradient)" />
        <rect x="27" y="40" width="6" height="5" fill="#FF6B6B" />
        <rect x="24" y="45" width="12" height="3" rx="1" fill="#FF0080" />
        {/* Confetti */}
        <rect x="8" y="12" width="4" height="4" fill="#FFD93D" transform="rotate(15 10 14)" />
        <rect x="48" y="10" width="4" height="4" fill="#00D4FF" transform="rotate(-20 50 12)" />
        <rect x="50" y="25" width="3" height="3" fill="#4ECDC4" transform="rotate(30 51 26)" />
        <rect x="6" y="28" width="3" height="3" fill="#A855F7" transform="rotate(-15 7 29)" />
        <circle cx="12" cy="20" r="2" fill="#FF0080" />
        <circle cx="48" cy="35" r="2" fill="#FFD93D" />
        <circle cx="45" cy="18" r="1.5" fill="#915EFF" />
        <circle cx="15" cy="38" r="1.5" fill="#00D4FF" />
        {/* Star burst */}
        <path d="M30 5 L31 8 L34 8 L32 10 L33 13 L30 11 L27 13 L28 10 L26 8 L29 8 Z" fill="#FFD93D" />
    </svg>
);

const achievements = [
    {
        title: "LeetCode Problem Solver",
        subtitle: "Ranked among top globally in LeetCode contests.",
        IconComponent: TrophyIcon,
        glowColor: "rgba(255, 217, 61, 0.4)",
        borderColor: "rgba(255, 217, 61, 0.3)",
    },
    {
        title: "AI Research Publication",
        subtitle: "Working to publish a paper on NLP in an international journal.",
        IconComponent: ResearchIcon,
        glowColor: "rgba(0, 212, 255, 0.4)",
        borderColor: "rgba(0, 212, 255, 0.3)",
    },
    {
        title: "Open Source Contributor",
        subtitle: "Contributed to Hugging Face Transformers and LangChain.",
        IconComponent: GithubIcon,
        glowColor: "rgba(168, 85, 247, 0.4)",
        borderColor: "rgba(168, 85, 247, 0.3)",
    },
    {
        title: "Hackathon Winner",
        subtitle: "Secured a top position in the BUBT AI Hackathon 2025.",
        IconComponent: HackathonIcon,
        glowColor: "rgba(255, 0, 128, 0.4)",
        borderColor: "rgba(255, 0, 128, 0.3)",
    },
];

const AchievementCard = ({ index, title, subtitle, IconComponent, glowColor, borderColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: `0 0 30px ${glowColor}, 0 20px 40px rgba(0,0,0,0.3)`,
            }}
            whileTap={{ scale: 0.98 }}
            style={{
                position: "relative",
                background: "linear-gradient(145deg, rgba(16, 13, 37, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%)",
                padding: "28px",
                borderRadius: "20px",
                border: `1px solid ${borderColor}`,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                cursor: "pointer",
                overflow: "hidden",
                backdropFilter: "blur(10px)",
            }}
            className="achievement-card-premium"
        >
            {/* Top gradient border */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${borderColor.replace('0.3', '0.8')}, transparent)`,
            }} />

            {/* Bottom gradient border */}
            <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${borderColor.replace('0.3', '0.6')}, transparent)`,
            }} />

            {/* Circuit corner decorations */}
            <div style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                width: "20px",
                height: "20px",
                borderTop: `2px solid ${borderColor}`,
                borderLeft: `2px solid ${borderColor}`,
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                width: "20px",
                height: "20px",
                borderTop: `2px solid ${borderColor}`,
                borderRight: `2px solid ${borderColor}`,
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute",
                bottom: "8px",
                left: "8px",
                width: "20px",
                height: "20px",
                borderBottom: `2px solid ${borderColor}`,
                borderLeft: `2px solid ${borderColor}`,
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                width: "20px",
                height: "20px",
                borderBottom: `2px solid ${borderColor}`,
                borderRight: `2px solid ${borderColor}`,
                pointerEvents: "none",
            }} />

            {/* Icon Container */}
            <div
                style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    background: "rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    padding: "8px",
                    boxShadow: `0 0 20px ${glowColor}`,
                }}
            >
                <IconComponent />
            </div>

            {/* Text Content */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <h3
                    style={{
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "700",
                        margin: 0,
                        lineHeight: "1.3",
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        color: "#aaa6c3",
                        fontSize: "14px",
                        margin: 0,
                        marginTop: "8px",
                        lineHeight: "1.5",
                    }}
                >
                    {subtitle}
                </p>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <div style={{ position: "relative" }}>
            {/* Section Background with circuit pattern */}
            <div style={{
                position: "absolute",
                top: "-40px",
                left: "-40px",
                right: "-40px",
                bottom: "-40px",
                background: "linear-gradient(145deg, rgba(10, 8, 24, 0.95) 0%, rgba(16, 13, 37, 0.98) 100%)",
                borderRadius: "32px",
                border: "1px solid rgba(145, 94, 255, 0.15)",
                overflow: "hidden",
                zIndex: -1,
            }}>
                {/* Circuit pattern overlay */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    pointerEvents: "none",
                }} />

                {/* Corner glows */}
                <div style={{
                    position: "absolute",
                    top: "-100px",
                    left: "-100px",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute",
                    bottom: "-100px",
                    right: "-100px",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(145, 94, 255, 0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
            </div>

            {/* Sparkle decoration */}
            <div style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                fontSize: "32px",
                color: "#00D4FF",
                opacity: 0.6,
                zIndex: 1,
            }}>✦</div>

            {/* Section Header - Centered with animated gradient */}
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
                    Recognition & Milestones
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
                    Achievements.
                </h2>
            </motion.div>

            {/* Cards Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "24px",
                    position: "relative",
                    zIndex: 1,
                }}
                className="achievements-grid"
            >
                {achievements.map((achievement, index) => (
                    <AchievementCard
                        key={achievement.title}
                        index={index}
                        {...achievement}
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
                @media (max-width: 768px) {
                    .achievements-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                .achievement-card-premium:hover {
                    border-color: rgba(0, 212, 255, 0.5) !important;
                }
            `}</style>
        </div>
    );
};

export default SectionWrapper(Achievements, "achievements");

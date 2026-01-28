import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn, textVariant } from "../utils/motion";

// Research Icons
const ResearchIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
    </svg>
);

const DocumentIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

const BrainAIIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54" />
    </svg>
);

const ChipIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
);

const RocketIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const MultimodalIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
    </svg>
);

const TransformerIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const MobileIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
);

// Current Research Data
const currentResearch = [
    {
        title: "A Comparative Study of ML & DL Models for Sentiment Analysis of Bengali Social Media Text",
        description: "A systematic benchmarking of Traditional ML vs. Deep Learning (LSTM, BiLSTM) for classifying Bengali text sentiment, addressing the low-resource language gap.",
        status: "Ongoing",
        duration: "6-month duration",
        tags: ["#NLP", "#Bengali", "#LSTM", "#BiLSTM", "#Sentiment Analysis"],
        icon: BrainAIIcon,
        color: "#00D4FF",
    },
    {
        title: "Performance Evaluation of Lightweight CNNs for Image Classification on Resource-Constrained Systems",
        description: "An analysis of MobileNet, ShuffleNet, and EfficientNet against standard CNNs (ResNet) to optimize image classification for edge devices and mobile platforms.",
        status: "Ongoing",
        duration: "6-month duration",
        tags: ["#CNN", "#MobileNet", "#Edge AI", "#Computer Vision"],
        icon: ChipIcon,
        color: "#915EFF",
    },
];

// Future Research Data
const futureResearch = [
    {
        title: "Multimodal Sentiment Analysis for Bengali",
        description: "Combining Text + Image data for richer context in sentiment analysis. This research aims to leverage both visual and textual modalities to improve sentiment classification accuracy for Bengali content.",
        status: "Planned",
        duration: "Q2 2025",
        tags: ["#Multimodal", "#Bengali", "#Vision", "#NLP", "#Fusion"],
        icon: MultimodalIcon,
        color: "#ff0080",
    },
    {
        title: "Vision Transformers (ViT) on Edge Devices",
        description: "Benchmarking Transformers vs. CNNs for mobile efficiency. Exploring how Vision Transformers can be optimized and deployed on resource-constrained edge devices while maintaining accuracy.",
        status: "Planned",
        duration: "Q3 2025",
        tags: ["#ViT", "#Edge AI", "#Transformers", "#Mobile", "#Optimization"],
        icon: TransformerIcon,
        color: "#FFD93D",
    },
    {
        title: "Quantization of Bengali LLMs",
        description: "Optimizing Large Language Models to run offline on mobile devices. Researching quantization techniques to reduce model size while preserving Bengali language understanding capabilities.",
        status: "Planned",
        duration: "Q4 2025",
        tags: ["#LLM", "#Quantization", "#Bengali", "#Mobile", "#Optimization"],
        icon: MobileIcon,
        color: "#4ECDC4",
    },
];

// Current Research Card Component
const CurrentResearchCard = ({ index, title, description, status, duration, tags, icon: IconComponent, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: `0 0 40px ${color}40, 0 20px 60px rgba(0,0,0,0.4)`,
            }}
            style={{
                position: "relative",
                background: "linear-gradient(145deg, rgba(16, 13, 37, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%)",
                padding: "32px",
                borderRadius: "24px",
                border: `1px solid ${color}30`,
                overflow: "hidden",
                backdropFilter: "blur(10px)",
            }}
        >
            {/* Top gradient border */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
            />

            {/* Circuit corner decorations */}
            <div style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                width: "24px",
                height: "24px",
                borderTop: `2px solid ${color}50`,
                borderLeft: `2px solid ${color}50`,
            }} />
            <div style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "24px",
                height: "24px",
                borderTop: `2px solid ${color}50`,
                borderRight: `2px solid ${color}50`,
            }} />
            <div style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                width: "24px",
                height: "24px",
                borderBottom: `2px solid ${color}50`,
                borderLeft: `2px solid ${color}50`,
            }} />
            <div style={{
                position: "absolute",
                bottom: "12px",
                right: "12px",
                width: "24px",
                height: "24px",
                borderBottom: `2px solid ${color}50`,
                borderRight: `2px solid ${color}50`,
            }} />

            {/* Header with Icon */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "20px" }}>
                <div
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: color,
                        boxShadow: `0 0 20px ${color}30`,
                        flexShrink: 0,
                    }}
                >
                    <IconComponent />
                </div>
                <div style={{ flex: 1 }}>
                    <h3
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#ffffff",
                            margin: "0 0 8px 0",
                            lineHeight: "1.4",
                        }}
                    >
                        {title}
                    </h3>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <span
                            style={{
                                fontSize: "12px",
                                padding: "4px 12px",
                                borderRadius: "20px",
                                background: `${color}20`,
                                color: color,
                                fontWeight: "600",
                            }}
                        >
                            {status}
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                color: "#aaa6c3",
                            }}
                        >
                            {duration}
                        </span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p
                style={{
                    fontSize: "15px",
                    color: "#aaa6c3",
                    lineHeight: "1.7",
                    margin: "0 0 20px 0",
                }}
            >
                {description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        style={{
                            fontSize: "11px",
                            padding: "5px 12px",
                            borderRadius: "20px",
                            background: "rgba(145, 94, 255, 0.1)",
                            border: "1px solid rgba(145, 94, 255, 0.3)",
                            color: "#915EFF",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

// Future Research Card Component - Same design as Current Research
const FutureResearchCard = ({ index, title, description, status, duration, tags, icon: IconComponent, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: `0 0 40px ${color}40, 0 20px 60px rgba(0,0,0,0.4)`,
            }}
            style={{
                position: "relative",
                background: "linear-gradient(145deg, rgba(16, 13, 37, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%)",
                padding: "32px",
                borderRadius: "24px",
                border: `1px solid ${color}30`,
                overflow: "hidden",
                backdropFilter: "blur(10px)",
            }}
        >
            {/* Top gradient border */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
            />

            {/* Circuit corner decorations */}
            <div style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                width: "24px",
                height: "24px",
                borderTop: `2px solid ${color}50`,
                borderLeft: `2px solid ${color}50`,
            }} />
            <div style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "24px",
                height: "24px",
                borderTop: `2px solid ${color}50`,
                borderRight: `2px solid ${color}50`,
            }} />
            <div style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                width: "24px",
                height: "24px",
                borderBottom: `2px solid ${color}50`,
                borderLeft: `2px solid ${color}50`,
            }} />
            <div style={{
                position: "absolute",
                bottom: "12px",
                right: "12px",
                width: "24px",
                height: "24px",
                borderBottom: `2px solid ${color}50`,
                borderRight: `2px solid ${color}50`,
            }} />

            {/* Header with Icon */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "20px" }}>
                <div
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: color,
                        boxShadow: `0 0 20px ${color}30`,
                        flexShrink: 0,
                    }}
                >
                    <IconComponent />
                </div>
                <div style={{ flex: 1 }}>
                    <h3
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#ffffff",
                            margin: "0 0 8px 0",
                            lineHeight: "1.4",
                        }}
                    >
                        {title}
                    </h3>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <span
                            style={{
                                fontSize: "12px",
                                padding: "4px 12px",
                                borderRadius: "20px",
                                background: `${color}20`,
                                color: color,
                                fontWeight: "600",
                            }}
                        >
                            {status}
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                color: "#aaa6c3",
                            }}
                        >
                            {duration}
                        </span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p
                style={{
                    fontSize: "15px",
                    color: "#aaa6c3",
                    lineHeight: "1.7",
                    margin: "0 0 20px 0",
                }}
            >
                {description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        style={{
                            fontSize: "11px",
                            padding: "5px 12px",
                            borderRadius: "20px",
                            background: "rgba(145, 94, 255, 0.1)",
                            border: "1px solid rgba(145, 94, 255, 0.3)",
                            color: "#915EFF",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Research = () => {
    const location = useLocation();
    const isFutureResearch = location.pathname.includes("/future");
    const isCurrentResearch = location.pathname.includes("/current") || !isFutureResearch;

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #050816 0%, #0a0f1a 50%, #050816 100%)",
                paddingTop: "100px",
                paddingBottom: "60px",
            }}
        >
            {/* Embedded Styles */}
            <style>
                {`
                    @keyframes gradient-shift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    @keyframes pulse-glow {
                        0%, 100% { box-shadow: 0 0 20px rgba(145, 94, 255, 0.3); }
                        50% { box-shadow: 0 0 40px rgba(145, 94, 255, 0.5); }
                    }
                    .research-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 24px;
                    }
                    .animated-gradient-text {
                        font-size: 42px;
                        font-weight: 700;
                        background: linear-gradient(90deg, #00D4FF, #915EFF, #ff0080, #FFD93D, #4ECDC4, #00D4FF);
                        background-size: 300% 100%;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        animation: gradient-shift 4s ease-in-out infinite;
                        margin: 0;
                    }
                    .section-divider {
                        height: 1px;
                        background: linear-gradient(90deg, transparent, rgba(145, 94, 255, 0.3), transparent);
                        margin: 60px 0;
                    }
                    .tab-button {
                        padding: 12px 28px;
                        border-radius: 30px;
                        font-size: 15px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        border: 1px solid transparent;
                    }
                    .tab-button.active {
                        background: linear-gradient(135deg, #915EFF 0%, #00D4FF 100%);
                        color: white;
                        box-shadow: 0 0 20px rgba(145, 94, 255, 0.4);
                    }
                    .tab-button.inactive {
                        background: rgba(145, 94, 255, 0.1);
                        color: #aaa6c3;
                        border: 1px solid rgba(145, 94, 255, 0.3);
                    }
                    .tab-button.inactive:hover {
                        background: rgba(145, 94, 255, 0.2);
                        color: white;
                    }
                `}
            </style>

            <div className="research-container">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: "center",
                        marginBottom: "60px",
                    }}
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "80px",
                            height: "80px",
                            borderRadius: "24px",
                            background: "linear-gradient(135deg, rgba(145, 94, 255, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%)",
                            marginBottom: "24px",
                            color: "#915EFF",
                            animation: "pulse-glow 3s ease-in-out infinite",
                        }}
                    >
                        <ResearchIcon />
                    </motion.div>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#aaa6c3",
                            textTransform: "uppercase",
                            letterSpacing: "3px",
                            marginBottom: "12px",
                        }}
                    >
                        Academic Pursuits
                    </p>

                    {/* Title */}
                    <h1 className="animated-gradient-text">
                        Research.
                    </h1>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#aaa6c3",
                            maxWidth: "600px",
                            margin: "20px auto 0",
                            lineHeight: "1.7",
                        }}
                    >
                        Exploring the frontiers of AI/ML with a focus on low-resource languages
                        and efficient deep learning for edge devices.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "16px",
                        marginBottom: "50px",
                    }}
                >
                    <a
                        href="/research/current"
                        className={`tab-button ${isCurrentResearch ? 'active' : 'inactive'}`}
                        style={{ textDecoration: "none" }}
                    >
                        Current Research
                    </a>
                    <a
                        href="/research/future"
                        className={`tab-button ${isFutureResearch ? 'active' : 'inactive'}`}
                        style={{ textDecoration: "none" }}
                    >
                        Future Research
                    </a>
                </motion.div>

                {/* Current Research Section */}
                {isCurrentResearch && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Section Header - Centered with animated gradient */}
                        <div style={{ marginBottom: "50px", textAlign: "center" }}>
                            <h2
                                style={{
                                    fontSize: "32px",
                                    fontWeight: "700",
                                    background: "linear-gradient(90deg, #00D4FF, #915EFF, #ff0080, #FFD93D, #4ECDC4, #00D4FF)",
                                    backgroundSize: "300% 100%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    animation: "gradient-shift 4s ease-in-out infinite",
                                    margin: "0 0 12px 0",
                                }}
                            >
                                Current Research
                            </h2>
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "#aaa6c3",
                                    margin: 0,
                                }}
                            >
                                Active research projects and ongoing studies
                            </p>
                        </div>

                        {/* Research Cards Grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
                                gap: "30px",
                            }}
                        >
                            {currentResearch.map((research, index) => (
                                <CurrentResearchCard
                                    key={research.title}
                                    index={index}
                                    {...research}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Future Research Section */}
                {isFutureResearch && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Section Header - Centered with animated gradient */}
                        <div style={{ marginBottom: "50px", textAlign: "center" }}>
                            <h2
                                style={{
                                    fontSize: "32px",
                                    fontWeight: "700",
                                    background: "linear-gradient(90deg, #00D4FF, #915EFF, #ff0080, #FFD93D, #4ECDC4, #00D4FF)",
                                    backgroundSize: "300% 100%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    animation: "gradient-shift 4s ease-in-out infinite",
                                    margin: "0 0 12px 0",
                                }}
                            >
                                Future Research
                            </h2>
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "#aaa6c3",
                                    margin: 0,
                                }}
                            >
                                Upcoming research directions and areas of exploration
                            </p>
                        </div>

                        {/* Future Research Cards Grid - Same as Current Research */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
                                gap: "30px",
                            }}
                        >
                            {futureResearch.map((research, index) => (
                                <FutureResearchCard
                                    key={research.title}
                                    index={index}
                                    {...research}
                                />
                            ))}
                        </div>

                        {/* Roadmap Timeline Visual */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            style={{
                                marginTop: "60px",
                                padding: "32px",
                                background: "linear-gradient(145deg, rgba(16, 13, 37, 0.7) 0%, rgba(21, 16, 48, 0.8) 100%)",
                                borderRadius: "20px",
                                border: "1px solid rgba(145, 94, 255, 0.2)",
                                textAlign: "center",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    color: "#ffffff",
                                    marginBottom: "16px",
                                }}
                            >
                                Research Roadmap
                            </h3>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#aaa6c3",
                                    lineHeight: "1.7",
                                    maxWidth: "500px",
                                    margin: "0 auto",
                                }}
                            >
                                These research directions represent my commitment to advancing AI capabilities
                                for underrepresented languages and making deep learning accessible on edge devices.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "40px",
                                    marginTop: "30px",
                                }}
                            >
                                <div style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            fontSize: "32px",
                                            fontWeight: "700",
                                            color: "#00D4FF",
                                        }}
                                    >
                                        3+
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                            color: "#aaa6c3",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                        }}
                                    >
                                        Planned Topics
                                    </div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            fontSize: "32px",
                                            fontWeight: "700",
                                            color: "#915EFF",
                                        }}
                                    >
                                        2025
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                            color: "#aaa6c3",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                        }}
                                    >
                                        Target Year
                                    </div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            fontSize: "32px",
                                            fontWeight: "700",
                                            color: "#ff0080",
                                        }}
                                    >
                                        NLP
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                            color: "#aaa6c3",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                        }}
                                    >
                                        Primary Focus
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Research;

import React from "react";
import { motion } from "framer-motion";
import { Bot, Mic, Brain, Server, Activity, Plug, Newspaper, Calendar, Wallet, Mail, Smile, Hand, Leaf, FileText, Users, Trash2, BookOpen, Video, Briefcase, Plane, Shirt } from "lucide-react";

// Icon mapping based on project title (returns emoji string)
const emojiMap = {
    // My Projects
    "Fake News Detector": "📰",
    "AI-Powered Study Planner": "📅",
    "Smart Budget Tracker": "💰",
    "Spam & Phishing Classifier": "📧",
    "Basic Emotion Detector": "😊",
    "Sign Language Translator": "🤟",
    "Plant Disease Identification": "🌿",
    "Automated Resume Screener": "📄",
    "Smart Attendance System": "👥",
    "Garbage Segregation AI": "🗑️",
    "RAG-Based PDF Tutor": "📚",
    "Deepfake Video Detector": "🎬",
    "AI Career Counselor Agent": "💼",
    "Autonomous Drone Navigation": "✈️",
    "Virtual Try-On (GANs)": "👕",
    // Future Projects
    "Agent Frameworks": "🤖",
    "Agent Development": "🎙️",
    "ML & Deep Learning": "🧠",
    "AI Infrastructure": "🖥️",
    "Monitoring": "📊",
    "Integrations": "🔌",
};

// Tag color palette matching Blog section
const getTagColor = (tag) => {
    const colors = {
        // Common tags
        "NLP": { bg: "#f3e8ff", text: "#7c3aed" },
        "TF-IDF": { bg: "#dbeafe", text: "#2563eb" },
        "Python": { bg: "#fef9c3", text: "#ca8a04" },
        "Sklearn": { bg: "#dcfce7", text: "#16a34a" },
        "ML": { bg: "#f3e8ff", text: "#9333ea" },
        "Scheduling": { bg: "#cffafe", text: "#0891b2" },
        "Time-Series": { bg: "#ffedd5", text: "#ea580c" },
        "Pandas": { bg: "#dbeafe", text: "#2563eb" },
        "Finance": { bg: "#dcfce7", text: "#16a34a" },
        "Transformers": { bg: "#fee2e2", text: "#dc2626" },
        "Security": { bg: "#fce7f3", text: "#db2777" },
        "OpenCV": { bg: "#cffafe", text: "#0891b2" },
        "DeepFace": { bg: "#f3e8ff", text: "#7c3aed" },
        "Vision": { bg: "#dbeafe", text: "#2563eb" },
        "CNN": { bg: "#fee2e2", text: "#dc2626" },
        "ASL": { bg: "#dcfce7", text: "#16a34a" },
        "TensorFlow": { bg: "#ffedd5", text: "#ea580c" },
        "Transfer Learning": { bg: "#f3e8ff", text: "#9333ea" },
        "ResNet": { bg: "#fce7f3", text: "#db2777" },
        "Mobile": { bg: "#cffafe", text: "#0891b2" },
        "SpaCy": { bg: "#dbeafe", text: "#2563eb" },
        "NER": { bg: "#dcfce7", text: "#16a34a" },
        "Face Recognition": { bg: "#f3e8ff", text: "#7c3aed" },
        "Automation": { bg: "#ffedd5", text: "#ea580c" },
        "Image Classification": { bg: "#fee2e2", text: "#dc2626" },
        "Raspberry Pi": { bg: "#dcfce7", text: "#16a34a" },
        "IoT": { bg: "#cffafe", text: "#0891b2" },
        "LLM": { bg: "#fee2e2", text: "#dc2626" },
        "RAG": { bg: "#cffafe", text: "#0891b2" },
        "Llama 3": { bg: "#f3e8ff", text: "#9333ea" },
        "Deep Learning": { bg: "#fce7f3", text: "#db2777" },
        "Forensics": { bg: "#dbeafe", text: "#2563eb" },
        "Video AI": { bg: "#ffedd5", text: "#ea580c" },
        "AI Agents": { bg: "#f3e8ff", text: "#7c3aed" },
        "Web Scraping": { bg: "#dcfce7", text: "#16a34a" },
        "LangChain": { bg: "#cffafe", text: "#0891b2" },
        "Reinforcement Learning": { bg: "#fee2e2", text: "#dc2626" },
        "ROS": { bg: "#fce7f3", text: "#db2777" },
        "Robotics": { bg: "#dbeafe", text: "#2563eb" },
        "GANs": { bg: "#f3e8ff", text: "#9333ea" },
        "GenAI": { bg: "#ffedd5", text: "#ea580c" },
        "Fashion Tech": { bg: "#fce7f3", text: "#db2777" },
        // Future projects tags
        "LangGraph": { bg: "#dcfce7", text: "#16a34a" },
        "CrewAI": { bg: "#cffafe", text: "#0891b2" },
        "Pydantic AI": { bg: "#f3e8ff", text: "#7c3aed" },
        "AutoGen": { bg: "#fee2e2", text: "#dc2626" },
        "Agentic Workflow": { bg: "#dbeafe", text: "#2563eb" },
        "AgentOps": { bg: "#ffedd5", text: "#ea580c" },
        "Voice Agents": { bg: "#fce7f3", text: "#db2777" },
        "Machine Learning": { bg: "#f3e8ff", text: "#9333ea" },
        "Computer Vision": { bg: "#cffafe", text: "#0891b2" },
        "MLOps": { bg: "#dcfce7", text: "#16a34a" },
        "RAG Systems": { bg: "#dbeafe", text: "#2563eb" },
        "Vector DBs": { bg: "#ffedd5", text: "#ea580c" },
        "Docker": { bg: "#cffafe", text: "#0891b2" },
        "Langfuse": { bg: "#f3e8ff", text: "#7c3aed" },
        "Prometheus": { bg: "#fee2e2", text: "#dc2626" },
        "OpenTelemetry": { bg: "#fce7f3", text: "#db2777" },
        "API Integration": { bg: "#dbeafe", text: "#2563eb" },
        "Tool Calling": { bg: "#dcfce7", text: "#16a34a" },
    };

    // Clean the tag (remove # if present)
    const cleanTag = tag.startsWith('#') ? tag.substring(1) : tag;
    return colors[cleanTag] || { bg: "#f1f5f9", text: "#64748b" };
};

// Category display text
const categoryDisplay = {
    "Beginner": "Beginner Level",
    "Intermediate": "Intermediate Level",
    "Advanced": "Advanced Level",
};

const ProjectCard = ({ title, description, tags, category, index }) => {
    const emoji = emojiMap[title] || "🚀";

    return (
        <motion.article
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 50px -15px rgba(139, 92, 246, 0.4)",
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            style={{
                background: "rgba(21, 16, 48, 0.7)",
                backdropFilter: "blur(12px)",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid rgba(139, 92, 246, 0.15)",
                cursor: "pointer",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
            className="project-card-animated"
        >
            {/* Icon + Title Row - SAME AS BLOG */}
            <motion.div
                style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            >
                <motion.span
                    style={{ fontSize: "24px", flexShrink: 0 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {emoji}
                </motion.span>
                <h3 style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.4,
                    margin: 0,
                }}>
                    {title}
                </h3>
            </motion.div>

            {/* Category (like Date in Blog) */}
            <motion.p
                style={{ fontSize: "13px", color: "#aaa6c3", marginBottom: "12px" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
            >
                {category ? categoryDisplay[category] || category : "Project"}
            </motion.p>

            {/* Tags - SAME AS BLOG */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
                {tags.map((tag, i) => {
                    const displayTag = tag.startsWith('#') ? tag.substring(1) : tag;
                    const color = getTagColor(tag);
                    return (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: `0 0 12px ${color.text}40`
                            }}
                            style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                padding: "4px 10px",
                                borderRadius: "9999px",
                                backgroundColor: color.bg,
                                color: color.text,
                                cursor: "pointer",
                            }}
                        >
                            #{displayTag}
                        </motion.span>
                    );
                })}
            </div>

            {/* Description - SAME AS BLOG */}
            <motion.p
                style={{ fontSize: "14px", color: "#d1d5db", lineHeight: 1.7, margin: 0, flexGrow: 1 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
            >
                {description}
            </motion.p>
        </motion.article>
    );
};

export default ProjectCard;
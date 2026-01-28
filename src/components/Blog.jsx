import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

// ==================== BLOG POST DATA ====================
const blogPosts = [
    {
        id: 1,
        icon: "🚀",
        title: "Getting Started with AI: My Journey from Beginner to Engineer",
        date: "2025-06-15",
        tags: ["#AI", "#Beginner", "#Learning"],
        excerpt: "In this post, I share how I started learning AI from scratch, the courses and tools I used, and the mindset that helped me stick with it. If you're just beginning your AI journey, this roadmap might be helpful for you!",
    },
    {
        id: 2,
        icon: "🤖",
        title: "Building My First AI Project: A Smart Study Assistant with Python",
        date: "2025-06-20",
        tags: ["#AI", "#Python", "#Project"],
        excerpt: "I built a personal study assistant using Python and simple AI tools that helps organize tasks, generate summaries, and interact like a chatbot. Here's what I learned, what went wrong, and how you can build something similar.",
    },
    {
        id: 3,
        icon: "💡",
        title: "What Is Prompt Engineering? Why It Matters in the Age of AI Assistants",
        date: "2025-06-25",
        tags: ["#AI", "#Prompt Engineering", "#LLM"],
        excerpt: "Prompt engineering is becoming one of the most powerful skills in the world of AI. In this blog, I explain what it is, how it works with tools like ChatGPT, and how even beginners can master it.",
    },
    {
        id: 4,
        icon: "🔗",
        title: "Building a Production-Ready RAG Chatbot with LangGraph and Pinecone",
        date: "2025-12-10",
        tags: ["#RAG", "#LangGraph", "#LLM", "#VectorDB", "#Production"],
        excerpt: "A deep dive into building a sophisticated RAG (Retrieval-Augmented Generation) chatbot that intelligently routes between document search and web search. Learn about LangGraph workflow orchestration, vector databases, and deployment strategies.",
    },
    {
        id: 5,
        icon: "🎯",
        title: "Fine-Tuning LLMs: A Practical Guide with LoRA",
        date: "2025-12-15",
        tags: ["#LLM", "#FineTuning", "#LoRA", "#AI"],
        excerpt: "Learn how to fine-tune large language models effectively using LoRA and QLoRA. This guide covers dataset preparation, hyperparameter tuning, and cost optimization strategies for small teams.",
    },
    {
        id: 6,
        icon: "🚀",
        title: "Deploying AI Models to Production: Real-World Lessons",
        date: "2025-12-20",
        tags: ["#MLOps", "#Production", "#Docker", "#Deployment"],
        excerpt: "Moving from notebooks to production is challenging. Learn about Docker containerization, FastAPI deployment, monitoring with Prometheus, and cost management strategies for ML systems.",
    },
];

// All unique tags
const allTags = ["All", "#AI", "#Beginner", "#Learning", "#Python", "#Project", "#Prompt Engineering", "#LLM", "#RAG", "#LangGraph", "#VectorDB", "#Production", "#FineTuning", "#LoRA", "#MLOps", "#Docker", "#Deployment"];

// Tag color mapping
const getTagColor = (tag) => {
    const colors = {
        "#AI": { bg: "#f3e8ff", text: "#7c3aed" },
        "#Beginner": { bg: "#dcfce7", text: "#16a34a" },
        "#Learning": { bg: "#dbeafe", text: "#2563eb" },
        "#Python": { bg: "#fef9c3", text: "#ca8a04" },
        "#Project": { bg: "#fce7f3", text: "#db2777" },
        "#Prompt Engineering": { bg: "#f3e8ff", text: "#9333ea" },
        "#LLM": { bg: "#fee2e2", text: "#dc2626" },
        "#RAG": { bg: "#cffafe", text: "#0891b2" },
        "#LangGraph": { bg: "#dcfce7", text: "#16a34a" },
        "#VectorDB": { bg: "#ffedd5", text: "#ea580c" },
        "#Production": { bg: "#f3e8ff", text: "#7c3aed" },
        "#FineTuning": { bg: "#fce7f3", text: "#db2777" },
        "#LoRA": { bg: "#dbeafe", text: "#2563eb" },
        "#MLOps": { bg: "#dcfce7", text: "#16a34a" },
        "#Docker": { bg: "#cffafe", text: "#0891b2" },
        "#Deployment": { bg: "#ffedd5", text: "#ea580c" },
    };
    return colors[tag] || { bg: "#f1f5f9", text: "#64748b" };
};

// ==================== BLOG CARD COMPONENT ====================
const BlogCard = ({ post, index }) => {
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
            }}
            className="blog-card-animated"
        >
            {/* Icon + Title Row */}
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
                    {post.icon}
                </motion.span>
                <h3 style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.4,
                    margin: 0,
                }}>
                    {post.title}
                </h3>
            </motion.div>

            {/* Date */}
            <motion.p
                style={{ fontSize: "13px", color: "#aaa6c3", marginBottom: "12px" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
            >
                {post.date}
            </motion.p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
                {post.tags.map((tag, i) => {
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
                            {tag}
                        </motion.span>
                    );
                })}
            </div>

            {/* Excerpt */}
            <motion.p
                style={{ fontSize: "14px", color: "#d1d5db", lineHeight: 1.7, margin: 0 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
            >
                {post.excerpt}
            </motion.p>
        </motion.article>
    );
};

// ==================== MAIN BLOG COMPONENT ====================
const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("All");

    // Filter posts
    const filteredPosts = useMemo(() => {
        let result = [...blogPosts];

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (post) =>
                    post.title.toLowerCase().includes(q) ||
                    post.excerpt.toLowerCase().includes(q) ||
                    post.tags.some((t) => t.toLowerCase().includes(q))
            );
        }

        if (selectedTag !== "All") {
            result = result.filter((post) => post.tags.includes(selectedTag));
        }

        return result;
    }, [searchQuery, selectedTag]);

    return (
        <section style={{ paddingTop: "80px", minHeight: "100vh", background: "#050816" }} id="blog">

            {/* Dark Container Area - Matching Home Page */}
            <div style={{
                background: "#050816",
                borderRadius: "0",
                padding: "48px 16px 64px",
                minHeight: "calc(100vh - 80px)",
            }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>

                    {/* ==================== HEADER ==================== */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: "center", marginBottom: "32px" }}
                    >
                        <h1 style={{
                            fontSize: "36px",
                            fontWeight: 800,
                            color: "#ffffff",
                            marginBottom: "12px"
                        }}>
                            Blog
                        </h1>
                        <p style={{
                            fontSize: "15px",
                            color: "#aaa6c3",
                            maxWidth: "600px",
                            margin: "0 auto",
                            lineHeight: 1.7
                        }}>
                            Insights, tutorials, and stories from my journey in tech, AI, and creative coding.
                            Explore my thoughts, discoveries, and lessons learned along the way.
                        </p>
                    </motion.div>

                    {/* ==================== SEARCH BAR ==================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ marginBottom: "24px" }}
                    >
                        <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
                            <Search
                                style={{
                                    position: "absolute",
                                    left: "16px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "18px",
                                    height: "18px",
                                    color: "#64748b"
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Search blog posts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: "100%",
                                    background: "rgba(30, 41, 59, 0.6)",
                                    border: "1px solid rgba(148, 163, 184, 0.2)",
                                    borderRadius: "10px",
                                    padding: "14px 40px 14px 48px",
                                    fontSize: "14px",
                                    color: "#ffffff",
                                    outline: "none",
                                    boxShadow: "0 2px 8px -2px rgba(0, 0, 0, 0.3)",
                                }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    style={{
                                        position: "absolute",
                                        right: "12px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        padding: "4px",
                                        background: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "#94a3b8",
                                    }}
                                >
                                    <X style={{ width: "16px", height: "16px" }} />
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* ==================== TAG FILTERS ==================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ marginBottom: "40px" }}
                    >
                        <p style={{ fontSize: "13px", color: "#aaa6c3", marginBottom: "12px", textAlign: "center" }}>
                            Filter by tag:
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                            {allTags.map((tag) => {
                                const isActive = selectedTag === tag;

                                return (
                                    <button
                                        key={tag}
                                        onClick={() => setSelectedTag(tag)}
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            padding: "6px 14px",
                                            borderRadius: "9999px",
                                            border: "none",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            backgroundColor: isActive ? "#8b5cf6" : "rgba(30, 41, 59, 0.6)",
                                            color: isActive ? "#ffffff" : "#aaa6c3",
                                            boxShadow: isActive
                                                ? "0 4px 12px -2px rgba(139, 92, 246, 0.4)"
                                                : "0 1px 4px -1px rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        {tag}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* ==================== BLOG POSTS GRID ==================== */}
                    {filteredPosts.length > 0 ? (
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "24px",
                        }}
                            className="blog-grid"
                        >
                            {filteredPosts.map((post, index) => (
                                <BlogCard key={post.id} post={post} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ textAlign: "center", padding: "64px 0" }}
                        >
                            <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "16px" }}>
                                No blog posts found.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedTag("All");
                                }}
                                style={{
                                    color: "#8b5cf6",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    fontSize: "14px",
                                }}
                            >
                                Clear filters and try again
                            </button>
                        </motion.div>
                    )}

                </div>
            </div>

            {/* Responsive Grid Styles & Animations */}
            <style>{`
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Blog card hover glow animation */
        .blog-card-animated {
          position: relative;
          overflow: hidden;
        }
        
        .blog-card-animated::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }
        
        .blog-card-animated:hover::before {
          left: 100%;
        }
        
        .blog-card-animated:hover {
          border-color: rgba(139, 92, 246, 0.4) !important;
        }
        
        /* Staggered fade-in animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default Blog;

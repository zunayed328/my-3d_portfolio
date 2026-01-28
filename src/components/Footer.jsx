import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

// Typewriter component for AI Engineer text
const TypewriterText = ({ words, typingSpeed = 100, deletingSpeed = 50, delay = 2000 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < word.length) {
                    setCurrentText(word.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(word.slice(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delay]);

    return (
        <span style={{
            background: "linear-gradient(90deg, #06b6d4, #22d3ee, #67e8f9)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }}>
            {currentText}
            <span className="animate-pulse" style={{ color: "#22d3ee" }}>|</span>
        </span>
    );
};

const Footer = () => {
    // Social links
    const socialLinks = {
        github: "https://github.com/zunayed328",
        linkedin: "https://www.linkedin.com/in/mohammad-zunayed-7793122a3",
        facebook: "https://www.facebook.com/md.zunayed.7921",
        email: "mailto:mdzunayed2002@gmail.com"
    };

    return (
        <footer
            style={{
                width: "100%",
                padding: "25px 20px 35px 20px",
                marginTop: "-30px",
                // Gradient that blends from primary (#050816) to purple-blue-teal
                background: "linear-gradient(180deg, #050816 0%, #0a0f1a 30%, #1a1a3e 60%, #162447 80%, #1a535c 100%)",
                textAlign: "center",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Title with Typewriter - Centered */}
                <h2 style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    marginBottom: "8px",
                }}>
                    <span style={{ color: "#ffffff" }}>Zunayed</span>
                    <span style={{ color: "#64748b" }}> | </span>
                    <TypewriterText
                        words={["AI Engineer", "ML Developer", "Data Scientist", "Python Expert"]}
                        typingSpeed={100}
                        deletingSpeed={60}
                        delay={2000}
                    />
                </h2>

                {/* Copyright - Centered */}
                <p style={{
                    fontSize: "14px",
                    color: "#94a3b8",
                    marginBottom: "24px",
                }}>
                    © 2026 All rights reserved
                </p>

                {/* Social Icons - Centered */}
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                    {/* GitHub */}
                    <motion.a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                        }}
                        className="social-icon-github"
                    >
                        <Github style={{ width: "22px", height: "22px", color: "#ffffff" }} />
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                        }}
                        className="social-icon-linkedin"
                    >
                        <Linkedin style={{ width: "22px", height: "22px", color: "#0077b5" }} />
                    </motion.a>

                    {/* Facebook */}
                    <motion.a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                        }}
                        className="social-icon-facebook"
                    >
                        <Facebook style={{ width: "22px", height: "22px", color: "#1877F2" }} />
                    </motion.a>

                    {/* Email */}
                    <motion.a
                        href={socialLinks.email}
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                        }}
                        className="social-icon-email"
                    >
                        <Mail style={{ width: "22px", height: "22px", color: "#f59e0b" }} />
                    </motion.a>
                </div>
            </motion.div>

            {/* Hover & Click Animation Styles */}
            <style>{`
                .social-icon-github,
                .social-icon-linkedin,
                .social-icon-email {
                    position: relative;
                    overflow: visible;
                }
                
                .social-icon-github:hover {
                    background: rgba(255, 255, 255, 0.2) !important;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                }
                .social-icon-linkedin:hover {
                    background: rgba(0, 119, 181, 0.2) !important;
                    box-shadow: 0 0 20px rgba(0, 119, 181, 0.4);
                }
                .social-icon-facebook:hover {
                    background: rgba(24, 119, 242, 0.2) !important;
                    box-shadow: 0 0 20px rgba(24, 119, 242, 0.4);
                }
                .social-icon-email:hover {
                    background: rgba(245, 158, 11, 0.2) !important;
                    box-shadow: 0 0 20px rgba(245, 158, 11, 0.4);
                }
                
                /* Ripple/Pulse Click Animation */
                .social-icon-github:active::after,
                .social-icon-linkedin:active::after,
                .social-icon-facebook:active::after,
                .social-icon-email:active::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    animation: ripple-effect 0.6s ease-out forwards;
                }
                
                .social-icon-github:active::after {
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
                    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.3);
                }
                
                .social-icon-linkedin:active::after {
                    background: radial-gradient(circle, rgba(0, 119, 181, 0.4) 0%, transparent 70%);
                    box-shadow: 0 0 30px rgba(0, 119, 181, 0.6), 0 0 60px rgba(0, 119, 181, 0.3);
                }
                
                .social-icon-facebook:active::after {
                    background: radial-gradient(circle, rgba(24, 119, 242, 0.4) 0%, transparent 70%);
                    box-shadow: 0 0 30px rgba(24, 119, 242, 0.6), 0 0 60px rgba(24, 119, 242, 0.3);
                }
                
                .social-icon-email:active::after {
                    background: radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%);
                    box-shadow: 0 0 30px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.3);
                }
                
                @keyframes ripple-effect {
                    0% {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(2);
                        opacity: 0.6;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(2.5);
                        opacity: 0;
                    }
                }
                
                /* Bounce animation on click */
                .social-icon-github:active,
                .social-icon-linkedin:active,
                .social-icon-facebook:active,
                .social-icon-email:active {
                    animation: bounce-click 0.3s ease;
                }
                
                @keyframes bounce-click {
                    0% { transform: scale(1); }
                    30% { transform: scale(0.85); }
                    60% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </footer>
    );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// Profile image import
import profile from "../assets/company/profile.png";

// Social icons as SVG components
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const LeetCodeIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
);

const BehanceIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
);

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
);

const BrainIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

// Social links data
const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/zunayed328", label: "GitHub", color: "#ffffff" },
    { icon: LinkedInIcon, href: "https://www.linkedin.com/in/mohammad-zunayed-7793122a3", label: "LinkedIn", color: "#0A66C2" },
    { icon: FacebookIcon, href: "https://www.facebook.com/md.zunayed.7921", label: "Facebook", color: "#1877F2" },
    { icon: BehanceIcon, href: "https://www.behance.net/mohammadzunayed", label: "Behance", color: "#1769FF" },
    { icon: TelegramIcon, href: "https://t.me/zunayed328", label: "Telegram", color: "#26A5E4" },
];

// Tech badges data
const techBadges = [
    { name: "Python", color: "#3776AB" },
    { name: "AI/ML", color: "#FF6F61" },
    { name: "Docker", color: "#2496ED" },
    { name: "Linux", color: "#FCC624" },
];

// Technical Skills SVG Icons
const PythonSkillIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        <defs>
            <linearGradient id="pythonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3776AB" />
                <stop offset="100%" stopColor="#FFD43B" />
            </linearGradient>
        </defs>
        {/* Code editor background */}
        <rect x="5" y="10" width="90" height="70" rx="8" fill="#1a1a2e" stroke="rgba(145, 94, 255, 0.3)" strokeWidth="1" />
        {/* Code lines */}
        <rect x="12" y="20" width="35" height="4" rx="2" fill="#915EFF" opacity="0.8" />
        <rect x="12" y="28" width="50" height="4" rx="2" fill="#00D4FF" opacity="0.6" />
        <rect x="20" y="36" width="40" height="4" rx="2" fill="#ff0080" opacity="0.7" />
        <rect x="20" y="44" width="30" height="4" rx="2" fill="#00D4FF" opacity="0.5" />
        <rect x="12" y="52" width="45" height="4" rx="2" fill="#915EFF" opacity="0.6" />
        <rect x="12" y="60" width="25" height="4" rx="2" fill="#aaa6c3" opacity="0.5" />
        {/* Python snake */}
        <path d="M75 25 Q85 30, 80 40 Q75 50, 85 55 Q80 60, 75 65" fill="none" stroke="url(#pythonGrad)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="75" cy="25" r="4" fill="#FFD43B" />
    </svg>
);

const PandasSkillIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        {/* Dashboard background */}
        <rect x="5" y="5" width="90" height="90" rx="10" fill="#1a1a2e" stroke="rgba(145, 94, 255, 0.3)" strokeWidth="1" />
        {/* Panda face */}
        <circle cx="50" cy="35" r="18" fill="#ffffff" />
        <ellipse cx="40" cy="30" rx="6" ry="5" fill="#1a1a2e" />
        <ellipse cx="60" cy="30" rx="6" ry="5" fill="#1a1a2e" />
        <circle cx="40" cy="30" r="2" fill="#ffffff" />
        <circle cx="60" cy="30" r="2" fill="#ffffff" />
        <ellipse cx="50" cy="38" rx="3" ry="2" fill="#1a1a2e" />
        {/* Data charts */}
        <rect x="15" y="60" width="10" height="25" rx="2" fill="#915EFF" />
        <rect x="30" y="55" width="10" height="30" rx="2" fill="#00D4FF" />
        <rect x="45" y="65" width="10" height="20" rx="2" fill="#ff0080" />
        <rect x="60" y="50" width="10" height="35" rx="2" fill="#00D4FF" />
        <rect x="75" y="58" width="10" height="27" rx="2" fill="#915EFF" />
    </svg>
);

const DockerSkillIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        <defs>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#915EFF" stopOpacity="0.3" />
            </linearGradient>
        </defs>
        {/* Circuit lines background */}
        <line x1="10" y1="20" x2="30" y2="20" stroke="url(#circuitGrad)" strokeWidth="2" />
        <line x1="30" y1="20" x2="30" y2="40" stroke="url(#circuitGrad)" strokeWidth="2" />
        <line x1="70" y1="80" x2="90" y2="80" stroke="url(#circuitGrad)" strokeWidth="2" />
        <line x1="70" y1="60" x2="70" y2="80" stroke="url(#circuitGrad)" strokeWidth="2" />
        <circle cx="30" cy="20" r="3" fill="#00D4FF" />
        <circle cx="70" cy="80" r="3" fill="#915EFF" />
        {/* Docker whale */}
        <ellipse cx="50" cy="55" rx="30" ry="18" fill="#2496ED" />
        <ellipse cx="50" cy="50" rx="25" ry="8" fill="#1a8bcf" />
        {/* Containers on whale */}
        <rect x="30" y="42" width="8" height="6" rx="1" fill="#ffffff" opacity="0.9" />
        <rect x="40" y="42" width="8" height="6" rx="1" fill="#ffffff" opacity="0.9" />
        <rect x="50" y="42" width="8" height="6" rx="1" fill="#ffffff" opacity="0.9" />
        <rect x="35" y="35" width="8" height="6" rx="1" fill="#ffffff" opacity="0.9" />
        <rect x="45" y="35" width="8" height="6" rx="1" fill="#ffffff" opacity="0.9" />
        <rect x="40" y="28" width="8" height="6" rx="1" fill="#ffffff" opacity="0.9" />
        {/* Whale tail */}
        <path d="M20 55 Q15 45, 25 50" fill="#2496ED" />
        {/* Snowflake decoration */}
        <text x="80" y="25" fontSize="12" fill="#00D4FF">❄</text>
    </svg>
);

const GitSkillIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        <defs>
            <linearGradient id="branchGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff0080" />
                <stop offset="100%" stopColor="#915EFF" />
            </linearGradient>
            <linearGradient id="branchGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#4ECDC4" />
            </linearGradient>
        </defs>
        {/* Main branch line */}
        <line x1="25" y1="15" x2="25" y2="85" stroke="url(#branchGrad1)" strokeWidth="4" />
        {/* Feature branch */}
        <path d="M25 35 Q40 35, 50 50 Q60 65, 75 65" fill="none" stroke="url(#branchGrad2)" strokeWidth="3" />
        {/* Merge back */}
        <path d="M75 65 Q60 75, 50 80 Q40 85, 25 85" fill="none" stroke="url(#branchGrad2)" strokeWidth="3" strokeDasharray="4,2" />
        {/* Commit dots */}
        <circle cx="25" cy="20" r="6" fill="#ff0080" />
        <circle cx="25" cy="40" r="6" fill="#915EFF" />
        <circle cx="50" cy="50" r="5" fill="#00D4FF" />
        <circle cx="75" cy="65" r="5" fill="#4ECDC4" />
        <circle cx="25" cy="60" r="6" fill="#915EFF" />
        <circle cx="25" cy="80" r="6" fill="#ff0080" />
        {/* Package box */}
        <rect x="70" y="20" width="20" height="20" rx="3" fill="none" stroke="#FFD93D" strokeWidth="2" />
        <line x1="70" y1="28" x2="90" y2="28" stroke="#FFD93D" strokeWidth="2" />
        <line x1="80" y1="28" x2="80" y2="40" stroke="#FFD93D" strokeWidth="2" />
    </svg>
);

const LinuxSkillIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        {/* Terminal window */}
        <rect x="5" y="10" width="90" height="75" rx="8" fill="#0d0d0d" stroke="#915EFF" strokeWidth="1" />
        {/* Terminal header */}
        <rect x="5" y="10" width="90" height="15" rx="8" fill="#1a1a2e" />
        <circle cx="15" cy="17" r="3" fill="#ff5f56" />
        <circle cx="25" cy="17" r="3" fill="#ffbd2e" />
        <circle cx="35" cy="17" r="3" fill="#27ca40" />
        {/* Terminal text */}
        <text x="12" y="38" fontSize="8" fill="#00D4FF" fontFamily="monospace">zunayed@linux:~$</text>
        <text x="12" y="48" fontSize="7" fill="#aaa6c3" fontFamily="monospace">sudo apt-get install</text>
        <text x="12" y="58" fontSize="7" fill="#4ECDC4" fontFamily="monospace">Reading package lists...</text>
        <text x="12" y="68" fontSize="7" fill="#915EFF" fontFamily="monospace">Done.</text>
        {/* Penguin */}
        <ellipse cx="78" cy="70" rx="12" ry="10" fill="#1a1a2e" stroke="#ffffff" strokeWidth="1" />
        <circle cx="75" cy="67" r="2" fill="#ffffff" />
        <circle cx="81" cy="67" r="2" fill="#ffffff" />
        <path d="M78 72 L76 75 L80 75 Z" fill="#FFD93D" />
        {/* Progress bar */}
        <rect x="12" y="75" width="55" height="4" rx="2" fill="#1a1a2e" />
        <rect x="12" y="75" width="40" height="4" rx="2" fill="url(#skillProgressGrad)" />
    </svg>
);

const SQLSkillIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        {/* Server rack */}
        <rect x="25" y="15" width="50" height="70" rx="5" fill="#1a1a2e" stroke="rgba(145, 94, 255, 0.4)" strokeWidth="1" />
        {/* Server units */}
        <rect x="30" y="20" width="40" height="12" rx="3" fill="#0d0d0d" stroke="#915EFF" strokeWidth="1" />
        <rect x="30" y="37" width="40" height="12" rx="3" fill="#0d0d0d" stroke="#00D4FF" strokeWidth="1" />
        <rect x="30" y="54" width="40" height="12" rx="3" fill="#0d0d0d" stroke="#915EFF" strokeWidth="1" />
        {/* LED indicators */}
        <circle cx="36" cy="26" r="2" fill="#4ECDC4" />
        <circle cx="42" cy="26" r="2" fill="#4ECDC4" />
        <circle cx="36" cy="43" r="2" fill="#00D4FF" />
        <circle cx="42" cy="43" r="2" fill="#00D4FF" />
        <circle cx="36" cy="60" r="2" fill="#915EFF" />
        <circle cx="42" cy="60" r="2" fill="#915EFF" />
        {/* Vents */}
        <line x1="55" y1="23" x2="65" y2="23" stroke="#333" strokeWidth="1" />
        <line x1="55" y1="26" x2="65" y2="26" stroke="#333" strokeWidth="1" />
        <line x1="55" y1="29" x2="65" y2="29" stroke="#333" strokeWidth="1" />
        {/* Base platform with glow */}
        <ellipse cx="50" cy="88" rx="35" ry="5" fill="rgba(0, 212, 255, 0.2)" />
        <ellipse cx="50" cy="88" rx="25" ry="3" fill="rgba(145, 94, 255, 0.3)" />
    </svg>
);

const DeepLearningSkillIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        <defs>
            <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b9d" />
                <stop offset="50%" stopColor="#c44569" />
                <stop offset="100%" stopColor="#ff6b9d" />
            </linearGradient>
        </defs>
        {/* Circuit/network background */}
        <circle cx="15" cy="20" r="3" fill="#00D4FF" opacity="0.5" />
        <circle cx="85" cy="25" r="3" fill="#915EFF" opacity="0.5" />
        <circle cx="10" cy="70" r="3" fill="#915EFF" opacity="0.5" />
        <circle cx="90" cy="75" r="3" fill="#00D4FF" opacity="0.5" />
        <line x1="15" y1="20" x2="30" y2="35" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
        <line x1="85" y1="25" x2="70" y2="35" stroke="#915EFF" strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="70" x2="30" y2="60" stroke="#915EFF" strokeWidth="1" opacity="0.3" />
        <line x1="90" y1="75" x2="70" y2="60" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
        {/* Brain */}
        <ellipse cx="50" cy="50" rx="28" ry="25" fill="url(#brainGrad)" />
        {/* Brain folds */}
        <path d="M35 40 Q45 35, 50 45 Q55 35, 65 40" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.5" />
        <path d="M32 50 Q42 55, 50 50 Q58 55, 68 50" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.5" />
        <path d="M35 60 Q45 65, 50 58 Q55 65, 65 60" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.5" />
        {/* Neural glow points */}
        <circle cx="40" cy="42" r="3" fill="#ffffff" opacity="0.8" />
        <circle cx="60" cy="42" r="3" fill="#ffffff" opacity="0.8" />
        <circle cx="50" cy="55" r="3" fill="#ffffff" opacity="0.8" />
        <circle cx="38" cy="58" r="2" fill="#00D4FF" opacity="0.9" />
        <circle cx="62" cy="58" r="2" fill="#00D4FF" opacity="0.9" />
    </svg>
);

const NLPSkillIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        {/* Chat bubbles */}
        {/* First bubble (left) */}
        <rect x="10" y="25" width="35" height="25" rx="8" fill="#915EFF" />
        <polygon points="20,50 15,60 30,50" fill="#915EFF" />
        <rect x="15" y="32" width="20" height="3" rx="1" fill="#ffffff" opacity="0.7" />
        <rect x="15" y="38" width="25" height="3" rx="1" fill="#ffffff" opacity="0.5" />
        {/* Second bubble (right) */}
        <rect x="55" y="35" width="35" height="25" rx="8" fill="#00D4FF" />
        <polygon points="80,60 85,70 70,60" fill="#00D4FF" />
        <rect x="60" y="42" width="20" height="3" rx="1" fill="#1a1a2e" opacity="0.7" />
        <rect x="60" y="48" width="25" height="3" rx="1" fill="#1a1a2e" opacity="0.5" />
        {/* Translation/AI icon */}
        <circle cx="50" cy="80" r="12" fill="#1a1a2e" stroke="#ff0080" strokeWidth="2" />
        <text x="42" y="85" fontSize="14" fill="#ff0080" fontFamily="sans-serif">文A</text>
        {/* Connection dots */}
        <circle cx="45" cy="65" r="2" fill="#915EFF" />
        <circle cx="55" cy="65" r="2" fill="#00D4FF" />
        <line x1="45" y1="65" x2="50" y2="70" stroke="#915EFF" strokeWidth="1" />
        <line x1="55" y1="65" x2="50" y2="70" stroke="#00D4FF" strokeWidth="1" />
    </svg>
);

// Technical Skills data
const technicalSkills = [
    { name: "Python", percentage: 95, IconComponent: PythonSkillIcon },
    { name: "Pandas", percentage: 90, IconComponent: PandasSkillIcon },
    { name: "Docker", percentage: 80, IconComponent: DockerSkillIcon },
    { name: "Git", percentage: 85, IconComponent: GitSkillIcon },
    { name: "Linux CLI", percentage: 90, IconComponent: LinuxSkillIcon },
    { name: "SQL/SQLite", percentage: 75, IconComponent: SQLSkillIcon },
    { name: "Deep Learning", percentage: 88, IconComponent: DeepLearningSkillIcon },
    { name: "NLP/LLMs", percentage: 85, IconComponent: NLPSkillIcon },
];

// Timeline Icons
const GraduationCapIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
);

const CertificateIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M4 3c-1.11 0-2 .89-2 2v10c0 1.11.89 2 2 2h8v5l3-3 3 3v-5h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H4zm8 10H6v-1h6v1zm6-3H6V9h12v1zm0-3H6V6h12v1z" />
    </svg>
);

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
);

const ProjectIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
    </svg>
);

// Journey Timeline data
const journeyData = [
    {
        type: "work",
        icon: BriefcaseIcon,
        date: "Jan 2023 - Present",
        title: "Exam Controller & Database Administrator",
        place: "Science Coaching",
        points: [
            "Spearheaded examination protocols, ensuring strict compliance and smooth operations for large student batches.",
            "Managed and optimized the Student Database Management System (DBMS), ensuring data accuracy and integrity.",
            "Served as the primary IT Specialist, maintaining digital infrastructure and troubleshooting technical issues.",
        ],
        description: "",
        tags: [],
        color: "#383E56",
    },

    {
        type: "education",
        icon: GraduationCapIcon,
        date: "2023 - Present",
        title: "B.Sc. in Computer Science & Engineering",
        place: "Bangladesh University of Business & Technology (BUBT)",
        description: "",
        tags: ["#AI", "#Machine Learning", "#Deep Learning", "#Python"],
        color: "#915EFF",
    },
    {
        type: "experience",
        icon: BriefcaseIcon,
        date: "June 2024 - Present",
        title: "Data Analyst",
        place: "Intelligent Image Management Inc. (IIMI)",
        description: "Analyzed large datasets to extract insights using Python, NumPy, and Pandas.",
        tags: [],
        color: "#00D4FF",
    },
    {
        type: "project",
        icon: ProjectIcon,
        date: "2023 - Present",
        title: "Machine Learning Projects",
        place: "",
        description: "Developed predictive models, computer vision apps, and NLP systems using TensorFlow and PyTorch.",
        tags: [],
        color: "#FF6B6B",
    },
    {
        type: "webdev",
        icon: CodeIcon,
        date: "2022 - Present",
        title: "Full-Stack Development",
        place: "",
        description: "Built modern web apps using React, TypeScript, and Node.js.",
        tags: [],
        color: "#4ECDC4",
    },
    {
        type: "certification",
        icon: CertificateIcon,
        date: "2023",
        title: "DeepLearning.ai Specialization",
        place: "Coursera",
        description: "Comprehensive certification covering neural networks, optimization, and structural machine learning projects.",
        tags: [],
        color: "#FFD93D",
    },
    {
        type: "work",
        icon: BriefcaseIcon,
        date: "2023 - Present",
        title: "Open Source Contributor",
        place: "GitHub / Hugging Face",
        points: [
            "Actively contributed to major libraries like Hugging Face Transformers and LangChain.",
            "Fixed critical bugs and improved documentation for community-driven AI tools.",
            "Collaborated with global developers to optimize code performance and reliability.",
        ],
        description: "",
        tags: [],
        color: "#383E56",
    },
    {
        type: "work",
        icon: BriefcaseIcon,
        date: "Feb 2025",
        title: "AI Hackathon Champion",
        place: "BUBT (Bangladesh University of Business and Technology)",
        points: [
            "Secured the top position in the BUBT AI Hackathon 2025 against 50+ teams.",
            "Architected a real-time predictive model using Python and TensorFlow.",
            "Led the team in pitching the solution to industry judges, demonstrating strong technical communication.",
        ],
        description: "",
        tags: [],
        color: "#E6DEDD",
    },
];

// AI Engineering Experience SVG Icons
const MNISTIcon = () => (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
        {/* Brain icon */}
        <g transform="translate(10, 20)">
            <ellipse cx="20" cy="25" rx="18" ry="16" fill="#ff6b9d" opacity="0.9" />
            <path d="M10 20 Q15 15, 20 22 Q25 15, 30 20" fill="none" stroke="#1a1a2e" strokeWidth="1.5" opacity="0.5" />
            <path d="M8 28 Q15 32, 20 26 Q25 32, 32 28" fill="none" stroke="#1a1a2e" strokeWidth="1.5" opacity="0.5" />
        </g>
        {/* Neural network visualization */}
        <g transform="translate(60, 15)">
            {/* Input layer */}
            {[0, 1, 2, 3, 4].map((i) => (
                <circle key={`in-${i}`} cx="0" cy={i * 18 + 10} r="5" fill="#00D4FF" opacity="0.8" />
            ))}
            {/* Hidden layer 1 */}
            {[0, 1, 2, 3].map((i) => (
                <circle key={`h1-${i}`} cx="35" cy={i * 22 + 15} r="5" fill="#915EFF" opacity="0.8" />
            ))}
            {/* Hidden layer 2 */}
            {[0, 1, 2, 3].map((i) => (
                <circle key={`h2-${i}`} cx="70" cy={i * 22 + 15} r="5" fill="#915EFF" opacity="0.8" />
            ))}
            {/* Output layer */}
            {[0, 1, 2].map((i) => (
                <circle key={`out-${i}`} cx="105" cy={i * 25 + 25} r="5" fill="#ff0080" opacity="0.8" />
            ))}
            {/* Connection lines */}
            {[0, 1, 2, 3, 4].map((i) =>
                [0, 1, 2, 3].map((j) => (
                    <line key={`l1-${i}-${j}`} x1="5" y1={i * 18 + 10} x2="30" y2={j * 22 + 15} stroke="#00D4FF" strokeWidth="0.5" opacity="0.3" />
                ))
            )}
            {[0, 1, 2, 3].map((i) =>
                [0, 1, 2, 3].map((j) => (
                    <line key={`l2-${i}-${j}`} x1="40" y1={i * 22 + 15} x2="65" y2={j * 22 + 15} stroke="#915EFF" strokeWidth="0.5" opacity="0.3" />
                ))
            )}
            {[0, 1, 2, 3].map((i) =>
                [0, 1, 2].map((j) => (
                    <line key={`l3-${i}-${j}`} x1="75" y1={i * 22 + 15} x2="100" y2={j * 25 + 25} stroke="#ff0080" strokeWidth="0.5" opacity="0.3" />
                ))
            )}
        </g>
        {/* Arrow */}
        <path d="M175 50 L185 60 L175 70 M175 60 L195 60" fill="none" stroke="#aaa6c3" strokeWidth="2" strokeLinecap="round" />
        {/* Binary decoration */}
        <text x="10" y="110" fontSize="6" fill="#00D4FF" opacity="0.4" fontFamily="monospace">01101001101011101011001110100111100011101100111</text>
    </svg>
);

const NLPPipelineIcon = () => (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
        {/* Robot icon */}
        <g transform="translate(5, 15)">
            <rect x="5" y="10" width="35" height="30" rx="5" fill="#FFD93D" stroke="#ff8c00" strokeWidth="1" />
            <rect x="12" y="5" width="8" height="8" rx="2" fill="#ff8c00" />
            <rect x="25" y="5" width="8" height="8" rx="2" fill="#ff8c00" />
            <circle cx="16" cy="22" r="5" fill="#1a1a2e" />
            <circle cx="29" cy="22" r="5" fill="#1a1a2e" />
            <circle cx="16" cy="22" r="2" fill="#00D4FF" />
            <circle cx="29" cy="22" r="2" fill="#00D4FF" />
            <rect x="15" y="32" width="15" height="3" rx="1" fill="#1a1a2e" />
        </g>
        {/* Flow boxes */}
        <g transform="translate(55, 20)">
            {/* Natural Language box */}
            <rect x="0" y="0" width="30" height="20" rx="3" fill="rgba(145, 94, 255, 0.3)" stroke="#915EFF" strokeWidth="1" />
            <text x="4" y="8" fontSize="4" fill="#ffffff">Natural</text>
            <text x="2" y="14" fontSize="4" fill="#ffffff">Language</text>
            {/* Arrow */}
            <path d="M32 10 L40 10" stroke="#aaa6c3" strokeWidth="1" />
            <polygon points="40,10 37,8 37,12" fill="#aaa6c3" />
            {/* Tokenization box */}
            <rect x="45" y="0" width="30" height="20" rx="3" fill="rgba(0, 212, 255, 0.3)" stroke="#00D4FF" strokeWidth="1" />
            <text x="47" y="12" fontSize="5" fill="#ffffff">Token</text>
            {/* Arrow */}
            <path d="M77 10 L85 10" stroke="#aaa6c3" strokeWidth="1" />
            <polygon points="85,10 82,8 82,12" fill="#aaa6c3" />
            {/* NLP box */}
            <rect x="90" y="0" width="22" height="20" rx="3" fill="rgba(255, 0, 128, 0.3)" stroke="#ff0080" strokeWidth="1" />
            <text x="95" y="12" fontSize="5" fill="#ffffff">NLP</text>
            {/* Arrow down*/}
            <path d="M101 22 L101 35" stroke="#aaa6c3" strokeWidth="1" />
            <polygon points="101,35 99,32 103,32" fill="#aaa6c3" />
            {/* Evaluation box */}
            <rect x="85" y="40" width="35" height="18" rx="3" fill="rgba(78, 205, 196, 0.3)" stroke="#4ECDC4" strokeWidth="1" />
            <text x="88" y="52" fontSize="5" fill="#ffffff">Evaluation</text>
        </g>
        {/* Natural Language box bottom */}
        <rect x="55" y="80" width="60" height="18" rx="3" fill="rgba(145, 94, 255, 0.2)" stroke="#915EFF" strokeWidth="1" />
        <text x="60" y="92" fontSize="6" fill="#c4b5fd">Natural Language</text>
        {/* Arrow up */}
        <path d="M85 78 L85 62" stroke="#aaa6c3" strokeWidth="1" />
        <polygon points="85,62 83,65 87,65" fill="#aaa6c3" />
    </svg>
);

const CPUSchedulerIcon = () => (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
        {/* Penguin/Linux icon */}
        <g transform="translate(10, 25)">
            <ellipse cx="20" cy="30" rx="18" ry="22" fill="#1a1a2e" stroke="#ffffff" strokeWidth="1" />
            <ellipse cx="20" cy="15" rx="12" ry="10" fill="#ffffff" />
            <circle cx="15" cy="13" r="3" fill="#1a1a2e" />
            <circle cx="25" cy="13" r="3" fill="#1a1a2e" />
            <path d="M20 18 L17 22 L23 22 Z" fill="#FFD93D" />
            <ellipse cx="8" cy="35" rx="6" ry="4" fill="#1a1a2e" stroke="#ffffff" strokeWidth="0.5" />
            <ellipse cx="32" cy="35" rx="6" ry="4" fill="#1a1a2e" stroke="#ffffff" strokeWidth="0.5" />
            <ellipse cx="15" cy="52" rx="5" ry="3" fill="#FFD93D" />
            <ellipse cx="25" cy="52" rx="5" ry="3" fill="#FFD93D" />
        </g>
        {/* CPU/Chip visualization */}
        <g transform="translate(80, 15)">
            {/* Main chip */}
            <rect x="20" y="20" width="60" height="60" rx="5" fill="linear-gradient(145deg, #1a1a2e, #2a2a4e)" stroke="#915EFF" strokeWidth="2" />
            <rect x="35" y="35" width="30" height="30" rx="3" fill="#0d0d0d" stroke="#00D4FF" strokeWidth="1" />
            <text x="42" y="55" fontSize="10" fill="#00D4FF" fontWeight="bold">CPU</text>
            {/* Pins top */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect key={`pt-${i}`} x={28 + i * 8} y="10" width="4" height="12" fill="#4ECDC4" />
            ))}
            {/* Pins bottom */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect key={`pb-${i}`} x={28 + i * 8} y="78" width="4" height="12" fill="#4ECDC4" />
            ))}
            {/* Pins left */}
            {[0, 1, 2, 3].map((i) => (
                <rect key={`pl-${i}`} x="8" y={30 + i * 12} width="12" height="4" fill="#ff0080" />
            ))}
            {/* Pins right */}
            {[0, 1, 2, 3].map((i) => (
                <rect key={`pr-${i}`} x="80" y={30 + i * 12} width="12" height="4" fill="#ff0080" />
            ))}
            {/* Glow effect */}
            <ellipse cx="50" cy="100" rx="40" ry="8" fill="rgba(145, 94, 255, 0.2)" />
        </g>
        {/* Bar chart */}
        <g transform="translate(175, 40)">
            <rect x="0" y="30" width="8" height="30" fill="#915EFF" />
            <rect x="10" y="20" width="8" height="40" fill="#00D4FF" />
            <rect x="20" y="35" width="8" height="25" fill="#ff0080" />
        </g>
    </svg>
);

const ImageCaptionIcon = () => (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
        {/* Image frame */}
        <g transform="translate(10, 15)">
            <rect x="0" y="0" width="55" height="45" rx="5" fill="#2a2a4e" stroke="#915EFF" strokeWidth="1" />
            {/* Mountain landscape */}
            <polygon points="5,40 20,20 35,40" fill="#4ECDC4" />
            <polygon points="25,40 40,15 50,40" fill="#00D4FF" />
            {/* Sun */}
            <circle cx="45" cy="12" r="6" fill="#FFD93D" />
        </g>
        {/* Camera icon */}
        <g transform="translate(75, 30)">
            <rect x="0" y="10" width="40" height="30" rx="5" fill="#1a1a2e" stroke="#00D4FF" strokeWidth="2" />
            <rect x="12" y="5" width="16" height="8" rx="2" fill="#1a1a2e" stroke="#00D4FF" strokeWidth="1" />
            <circle cx="20" cy="25" r="10" fill="none" stroke="#00D4FF" strokeWidth="2" />
            <circle cx="20" cy="25" r="5" fill="#00D4FF" opacity="0.5" />
        </g>
        {/* Arrow */}
        <path d="M120 45 L135 45" stroke="#aaa6c3" strokeWidth="2" />
        <polygon points="135,45 132,42 132,48" fill="#aaa6c3" />
        {/* Text bubble */}
        <g transform="translate(140, 20)">
            <rect x="0" y="0" width="55" height="50" rx="8" fill="rgba(145, 94, 255, 0.2)" stroke="#915EFF" strokeWidth="1" />
            <polygon points="0,25 -8,20 0,30" fill="rgba(145, 94, 255, 0.2)" stroke="#915EFF" strokeWidth="1" />
            <text x="8" y="18" fontSize="6" fill="#ffffff">"Generate a caption</text>
            <text x="12" y="28" fontSize="6" fill="#ffffff">of caption."</text>
            {/* Sparkle */}
            <text x="42" y="45" fontSize="12" fill="#FFD93D">✦</text>
        </g>
        {/* Neural network dots */}
        <g transform="translate(75, 75)">
            <circle cx="5" cy="5" r="3" fill="#ff0080" />
            <circle cx="20" cy="0" r="3" fill="#915EFF" />
            <circle cx="35" cy="8" r="3" fill="#00D4FF" />
            <circle cx="50" cy="2" r="3" fill="#4ECDC4" />
            <line x1="8" y1="5" x2="17" y2="1" stroke="#915EFF" strokeWidth="0.5" opacity="0.5" />
            <line x1="23" y1="1" x2="32" y2="7" stroke="#00D4FF" strokeWidth="0.5" opacity="0.5" />
            <line x1="38" y1="7" x2="47" y2="3" stroke="#4ECDC4" strokeWidth="0.5" opacity="0.5" />
        </g>
    </svg>
);

const TransformerChatbotIcon = () => (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
        {/* Docker whale */}
        <g transform="translate(10, 25)">
            <ellipse cx="30" cy="35" rx="28" ry="18" fill="#2496ED" />
            <ellipse cx="30" cy="30" rx="22" ry="8" fill="#1a8bcf" />
            {/* Containers */}
            <rect x="12" y="22" width="10" height="7" rx="1" fill="#ffffff" opacity="0.9" />
            <rect x="24" y="22" width="10" height="7" rx="1" fill="#ffffff" opacity="0.9" />
            <rect x="36" y="22" width="10" height="7" rx="1" fill="#ffffff" opacity="0.9" />
            <rect x="18" y="14" width="10" height="7" rx="1" fill="#ffffff" opacity="0.9" />
            <rect x="30" y="14" width="10" height="7" rx="1" fill="#ffffff" opacity="0.9" />
            {/* Tail */}
            <path d="M5 35 Q0 25, 10 30" fill="#2496ED" />
            {/* Water */}
            <path d="M5 55 Q15 50, 25 55 Q35 50, 45 55 Q55 50, 60 55" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
        </g>
        {/* Chat interface */}
        <g transform="translate(80, 10)">
            <rect x="0" y="0" width="110" height="95" rx="10" fill="#1a1a2e" stroke="#915EFF" strokeWidth="1" />
            {/* Header */}
            <rect x="0" y="0" width="110" height="20" rx="10" fill="#2a2a4e" />
            <circle cx="15" cy="10" r="4" fill="#ff5f56" />
            <circle cx="28" cy="10" r="4" fill="#ffbd2e" />
            <circle cx="41" cy="10" r="4" fill="#27ca40" />
            {/* User message */}
            <rect x="40" y="28" width="60" height="18" rx="8" fill="#915EFF" />
            <text x="48" y="40" fontSize="6" fill="#ffffff">Hello, AI!</text>
            {/* Bot message */}
            <rect x="10" y="52" width="70" height="18" rx="8" fill="rgba(0, 212, 255, 0.3)" stroke="#00D4FF" strokeWidth="0.5" />
            <text x="18" y="64" fontSize="6" fill="#00D4FF">Hi! How can I help?</text>
            {/* Input */}
            <rect x="10" y="76" width="90" height="12" rx="6" fill="#0d0d0d" stroke="#aaa6c3" strokeWidth="0.5" />
            <text x="15" y="84" fontSize="5" fill="#aaa6c3">Type a message...</text>
        </g>
    </svg>
);

const AIStudyAssistantIcon = () => (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
        {/* Book/Study icon */}
        <g transform="translate(10, 20)">
            <path d="M5 10 L30 5 L30 70 L5 75 Z" fill="#4ECDC4" stroke="#2a9d8f" strokeWidth="1" />
            <path d="M30 5 L55 10 L55 75 L30 70 Z" fill="#3db8a9" stroke="#2a9d8f" strokeWidth="1" />
            <line x1="12" y1="20" x2="25" y2="17" stroke="#1a1a2e" strokeWidth="1" opacity="0.5" />
            <line x1="12" y1="30" x2="25" y2="27" stroke="#1a1a2e" strokeWidth="1" opacity="0.5" />
            <line x1="12" y1="40" x2="25" y2="37" stroke="#1a1a2e" strokeWidth="1" opacity="0.5" />
            <line x1="35" y1="17" x2="48" y2="20" stroke="#1a1a2e" strokeWidth="1" opacity="0.5" />
            <line x1="35" y1="27" x2="48" y2="30" stroke="#1a1a2e" strokeWidth="1" opacity="0.5" />
        </g>
        {/* Sparkle/Magic */}
        <g transform="translate(55, 10)">
            <text x="0" y="20" fontSize="24" fill="#FFD93D">✦</text>
            <text x="20" y="10" fontSize="12" fill="#ff0080">✧</text>
            <text x="30" y="25" fontSize="8" fill="#00D4FF">✦</text>
        </g>
        {/* AI Brain with glow */}
        <g transform="translate(95, 15)">
            <defs>
                <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#915EFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#915EFF" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="45" cy="45" r="42" fill="url(#aiGlow)" />
            <ellipse cx="45" cy="42" rx="32" ry="28" fill="#ff6b9d" />
            <path d="M25 35 Q35 28, 45 38 Q55 28, 65 35" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.4" />
            <path d="M22 48 Q35 55, 45 45 Q55 55, 68 48" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.4" />
            {/* Neural dots */}
            <circle cx="35" cy="36" r="4" fill="#ffffff" opacity="0.8" />
            <circle cx="55" cy="36" r="4" fill="#ffffff" opacity="0.8" />
            <circle cx="45" cy="52" r="4" fill="#ffffff" opacity="0.8" />
            {/* Connection lines */}
            <line x1="5" y1="20" x2="18" y2="32" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
            <line x1="85" y1="25" x2="72" y2="35" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
            <line x1="0" y1="60" x2="15" y2="52" stroke="#915EFF" strokeWidth="1" opacity="0.5" />
            <line x1="90" y1="65" x2="75" y2="55" stroke="#915EFF" strokeWidth="1" opacity="0.5" />
            {/* Outer dots */}
            <circle cx="5" cy="20" r="3" fill="#00D4FF" opacity="0.6" />
            <circle cx="85" cy="25" r="3" fill="#00D4FF" opacity="0.6" />
            <circle cx="0" cy="60" r="3" fill="#915EFF" opacity="0.6" />
            <circle cx="90" cy="65" r="3" fill="#915EFF" opacity="0.6" />
        </g>
    </svg>
);

// Project Experience Data
const projectExperience = [
    {
        title: "MNIST Digit Classifier",
        IconComponent: MNISTIcon,
        desc: "Built a CNN in PyTorch with ~99% accuracy on handwritten digit classification.",
    },
    {
        title: "NLP Text Classification Pipeline",
        IconComponent: NLPPipelineIcon,
        desc: "Developed full pipeline (tokenization to evaluation) using Hugging Face Transformers.",
    },
    {
        title: "CPU Scheduler Simulator",
        IconComponent: CPUSchedulerIcon,
        desc: "CLI-based scheduling simulation tool comparing FCFS, SJF, and Priority algorithms.",
    },
    {
        title: "Image Caption Generator",
        IconComponent: ImageCaptionIcon,
        desc: "Created an LSTM + CNN model combining ResNet50 encoder and LSTM decoder.",
    },
    {
        title: "Transformer Chatbot API",
        IconComponent: TransformerChatbotIcon,
        desc: "Fine-tuned a Transformer-based chatbot and deployed via Flask & Docker.",
    },
    {
        title: "AI-Powered Study Assistant App",
        IconComponent: AIStudyAssistantIcon,
        desc: "Developed a desktop productivity tool combining task tracking with GPT-powered assistance.",
    },
];

// Certifications Data
const certifications = [
    {
        title: "AI Engineering Bootcamp",
        issuer: "Ostad",
        image: null, // Placeholder
    },
    {
        title: "Machine Learning Professional",
        issuer: "IBM via Coursera",
        image: null, // Placeholder
    },
    {
        title: "Neural Networks & Deep Learning",
        issuer: "DeepLearning.AI via Coursera",
        image: null, // Placeholder
    },
    {
        title: "SQL and Relational Databases",
        issuer: "IBM",
        image: null, // Placeholder
    },
    {
        title: "Data Analytics (Python)",
        issuer: "BUBT",
        image: null, // Placeholder
    },
];

// Services SVG Icons
const AIServiceIcon = () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
        {/* Brain with neural network */}
        <defs>
            <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#915EFF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#915EFF" stopOpacity="0" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#brainGlow)" />
        <ellipse cx="50" cy="48" rx="28" ry="24" fill="#ff6b9d" />
        <path d="M30 42 Q40 35, 50 45 Q60 35, 70 42" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.4" />
        <path d="M28 55 Q40 62, 50 52 Q60 62, 72 55" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.4" />
        {/* Neural connections */}
        <circle cx="35" cy="45" r="4" fill="#ffffff" opacity="0.8" />
        <circle cx="65" cy="45" r="4" fill="#ffffff" opacity="0.8" />
        <circle cx="50" cy="58" r="4" fill="#ffffff" opacity="0.8" />
        <line x1="38" y1="46" x2="47" y2="56" stroke="#00D4FF" strokeWidth="1" opacity="0.6" />
        <line x1="62" y1="46" x2="53" y2="56" stroke="#00D4FF" strokeWidth="1" opacity="0.6" />
        {/* Outer connection points */}
        <circle cx="15" cy="30" r="3" fill="#00D4FF" opacity="0.6" />
        <circle cx="85" cy="35" r="3" fill="#00D4FF" opacity="0.6" />
        <circle cx="20" cy="70" r="3" fill="#915EFF" opacity="0.6" />
        <circle cx="80" cy="65" r="3" fill="#915EFF" opacity="0.6" />
        <line x1="18" y1="32" x2="28" y2="40" stroke="#00D4FF" strokeWidth="0.8" opacity="0.4" />
        <line x1="82" y1="37" x2="72" y2="43" stroke="#00D4FF" strokeWidth="0.8" opacity="0.4" />
    </svg>
);

const DataAnalysisIcon = () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
        {/* Bar chart frame */}
        <rect x="15" y="15" width="70" height="55" rx="5" fill="#1a1a2e" stroke="#00D4FF" strokeWidth="1.5" />
        {/* Chart bars */}
        <rect x="22" y="45" width="10" height="20" fill="#ff0080" rx="2" />
        <rect x="36" y="35" width="10" height="30" fill="#915EFF" rx="2" />
        <rect x="50" y="25" width="10" height="40" fill="#00D4FF" rx="2" />
        <rect x="64" y="40" width="10" height="25" fill="#4ECDC4" rx="2" />
        {/* Trend line */}
        <path d="M25 48 L40 38 L55 28 L70 42" fill="none" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round" />
        {/* Arrow indicator */}
        <circle cx="55" cy="28" r="4" fill="#FFD93D" opacity="0.8" />
        <path d="M62 20 L70 15 L68 25" fill="none" stroke="#FFD93D" strokeWidth="1.5" strokeLinecap="round" />
        {/* Decorative elements */}
        <circle cx="80" cy="78" r="8" fill="none" stroke="#915EFF" strokeWidth="1" opacity="0.5" />
        <circle cx="80" cy="78" r="4" fill="#915EFF" opacity="0.3" />
    </svg>
);

const DatabaseIcon = () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
        {/* Server rack */}
        <rect x="20" y="15" width="60" height="70" rx="5" fill="#1a1a2e" stroke="#00D4FF" strokeWidth="1.5" />
        {/* Server units */}
        <rect x="25" y="20" width="50" height="14" rx="2" fill="#0d0d0d" stroke="#915EFF" strokeWidth="0.5" />
        <rect x="25" y="38" width="50" height="14" rx="2" fill="#0d0d0d" stroke="#915EFF" strokeWidth="0.5" />
        <rect x="25" y="56" width="50" height="14" rx="2" fill="#0d0d0d" stroke="#915EFF" strokeWidth="0.5" />
        {/* LED indicators */}
        <circle cx="32" cy="27" r="2" fill="#4ECDC4" />
        <circle cx="38" cy="27" r="2" fill="#4ECDC4" />
        <circle cx="32" cy="45" r="2" fill="#FFD93D" />
        <circle cx="38" cy="45" r="2" fill="#4ECDC4" />
        <circle cx="32" cy="63" r="2" fill="#4ECDC4" />
        <circle cx="38" cy="63" r="2" fill="#ff0080" />
        {/* Ventilation lines */}
        <line x1="50" y1="24" x2="70" y2="24" stroke="#aaa6c3" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="27" x2="70" y2="27" stroke="#aaa6c3" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="30" x2="70" y2="30" stroke="#aaa6c3" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="42" x2="70" y2="42" stroke="#aaa6c3" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="45" x2="70" y2="45" stroke="#aaa6c3" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="48" x2="70" y2="48" stroke="#aaa6c3" strokeWidth="1" opacity="0.3" />
        {/* Base glow */}
        <ellipse cx="50" cy="90" rx="30" ry="5" fill="rgba(0, 212, 255, 0.2)" />
    </svg>
);

const FullStackIcon = () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
        {/* Laptop base */}
        <rect x="10" y="60" width="80" height="8" rx="2" fill="#2a2a4e" />
        <ellipse cx="50" cy="64" rx="10" ry="2" fill="#1a1a2e" />
        {/* Screen */}
        <rect x="15" y="20" width="70" height="42" rx="3" fill="#1a1a2e" stroke="#00D4FF" strokeWidth="1" />
        <rect x="18" y="23" width="64" height="36" rx="2" fill="#0a0a14" />
        {/* Code lines */}
        <rect x="22" y="28" width="20" height="3" rx="1" fill="#ff0080" />
        <rect x="45" y="28" width="12" height="3" rx="1" fill="#915EFF" />
        <rect x="22" y="34" width="8" height="3" rx="1" fill="#4ECDC4" />
        <rect x="33" y="34" width="25" height="3" rx="1" fill="#00D4FF" />
        <rect x="22" y="40" width="15" height="3" rx="1" fill="#FFD93D" />
        <rect x="40" y="40" width="18" height="3" rx="1" fill="#915EFF" />
        <rect x="22" y="46" width="30" height="3" rx="1" fill="#ff0080" />
        <rect x="55" y="46" width="10" height="3" rx="1" fill="#4ECDC4" />
        {/* Cursor animation placeholder */}
        <rect x="68" y="52" width="8" height="3" rx="1" fill="#ffffff" opacity="0.8" />
        {/* Glowing base */}
        <ellipse cx="50" cy="75" rx="25" ry="4" fill="rgba(145, 94, 255, 0.15)" />
    </svg>
);

// Services Data
const services = [
    {
        title: "AI & ML Solutions",
        IconComponent: AIServiceIcon,
        desc: "Building predictive models, NLP pipelines, and intelligent automation systems using Python & PyTorch.",
    },
    {
        title: "Data Analysis & Insights",
        IconComponent: DataAnalysisIcon,
        desc: "Transforming raw data into actionable insights with Pandas, NumPy, and advanced visualization.",
    },
    {
        title: "Database Management",
        IconComponent: DatabaseIcon,
        desc: "Designing robust schemas and managing integrity for large-scale databases.",
    },
    {
        title: "Full-Stack Development",
        IconComponent: FullStackIcon,
        desc: "Developing modern, responsive web applications using React and Node.js.",
    },
];

// Testimonials Data
const testimonials = [
    {
        name: "Md. Saddam Hossain",
        role: "Assistant Professor, Dept. of CSE (BUBT)",
        image: "/saddam-hossain.jpg",
        quote: "Zunayed is a brilliant student who consistently demonstrates deep analytical skills. His performance in the AI Hackathon and academic projects proved his ability to solve complex engineering problems.",
    },
    {
        name: "Jhankar Mahbub",
        role: "CEO, Programming Hero & Best-Selling Author",
        image: "/jhankar-mahbub.jpg",
        quote: "One of the most dedicated developers I've seen. His grasp of the MERN stack and problem-solving mindset makes him a standout talent in the tech community. He has a bright future ahead!",
    },
    {
        name: "H.m. Belal Nil",
        role: "Deputy Director (ICT), Bangladesh Bank & Academic Advisor, Science Coaching",
        image: "/belal-nil.jpg",
        quote: "Zunayed demonstrates exceptional technical maturity. His ability to modernize our academic infrastructure with robust software solutions was impressive. He brings the precision of a top-tier engineer to every project he handles.",
    },
];



const About = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#050816",
                paddingTop: "100px",
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingBottom: "60px",
            }}
        >
            {/* Styles */}
            <style>
                {`
          .gradient-text {
            background: linear-gradient(135deg, #ffffff 0%, #915EFF 50%, #00D4FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: rgba(145, 94, 255, 0.1);
            border: 1px solid rgba(145, 94, 255, 0.3);
            color: #aaa6c3;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .social-icon:hover {
            background: rgba(145, 94, 255, 0.25);
            border-color: #915EFF;
            color: #ffffff;
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(145, 94, 255, 0.3);
          }
          .tech-badge {
            display: inline-flex;
            align-items: center;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            color: white;
            transition: all 0.3s ease;
          }
          .tech-badge:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          }
          .summary-card {
            background: linear-gradient(145deg, #151030 0%, #1a1040 100%);
            border: 1px solid rgba(145, 94, 255, 0.2);
            border-radius: 24px;
            padding: 40px;
            transition: all 0.3s ease;
          }
          .summary-card:hover {
            border-color: rgba(145, 94, 255, 0.4);
            box-shadow: 0 20px 60px rgba(145, 94, 255, 0.15);
          }
          .headline-pill {
            display: inline-flex;
            align-items: center;
            padding: 10px 20px;
            background: rgba(145, 94, 255, 0.15);
            border: 1px solid rgba(145, 94, 255, 0.3);
            border-radius: 50px;
            color: #c4b5fd;
            font-size: 15px;
            font-weight: 500;
          }
          .profile-image-container {
            position: relative;
            width: 280px;
            height: 280px;
            border-radius: 50%;
            background: linear-gradient(135deg, #915EFF 0%, #00D4FF 100%);
            padding: 4px;
            animation: pulse-glow 3s ease-in-out infinite;
          }
          .profile-image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            background: #151030;
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(145, 94, 255, 0.4); }
            50% { box-shadow: 0 0 50px rgba(145, 94, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3); }
          }
          /* ========== ANIMATED GRADIENT TEXT ========== */
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient-text {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(90deg, #00D4FF, #915EFF, #ff0080, #FFD93D, #4ECDC4, #00D4FF);
            background-size: 300% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 4s ease-in-out infinite;
            margin: 0;
          }
          .animated-gradient-text-large {
            font-size: 36px;
            font-weight: 700;
            background: linear-gradient(90deg, #00D4FF, #915EFF, #ff0080, #FFD93D, #4ECDC4, #00D4FF);
            background-size: 300% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 4s ease-in-out infinite;
            margin: 0 0 12px 0;
          }
          .centered-section-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 24px;
            text-align: center;
          }
          .centered-header-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
          }
          @media (max-width: 1024px) {
            .hero-container {
              flex-direction: column-reverse !important;
              text-align: center;
            }
            .hero-text {
              align-items: center !important;
            }
            .social-icons-container {
              justify-content: center !important;
            }
            .profile-image-container {
              width: 220px;
              height: 220px;
              margin-bottom: 40px;
            }
          }
          /* ========== TECHNICAL SKILLS SECTION STYLES ========== */
          .technical-skills-section {
            position: relative;
            padding: 40px 0;
          }
          .technical-skills-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 20%, rgba(145, 94, 255, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.05) 0%, transparent 50%);
            pointer-events: none;
          }
          /* Circuit pattern overlay */
          .circuit-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(rgba(145, 94, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(145, 94, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            pointer-events: none;
          }
          .skills-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-bottom: 40px;
            position: relative;
            z-index: 2;
          }
          .skills-header-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: linear-gradient(135deg, #ff0080 0%, #915EFF 50%, #00D4FF 100%);
            font-size: 28px;
            box-shadow: 0 0 30px rgba(255, 0, 128, 0.4), 0 0 60px rgba(145, 94, 255, 0.2);
            animation: icon-pulse 3s ease-in-out infinite;
          }
          @keyframes icon-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 128, 0.4), 0 0 40px rgba(145, 94, 255, 0.2); }
            50% { box-shadow: 0 0 40px rgba(255, 0, 128, 0.6), 0 0 80px rgba(145, 94, 255, 0.4); }
          }
          .skills-header-text {
            font-size: 32px;
            font-weight: 800;
            background: linear-gradient(90deg, #00D4FF, #915EFF, #ff0080, #FFD93D, #4ECDC4, #00D4FF);
            background-size: 300% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 4s ease-in-out infinite;
            margin: 0;
          }
          .skill-card {
            position: relative;
            background: linear-gradient(145deg, rgba(16, 13, 37, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%);
            border: 1px solid rgba(145, 94, 255, 0.25);
            border-radius: 20px;
            padding: 28px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }
          .skill-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 0, 128, 0.03) 0%, rgba(145, 94, 255, 0.05) 50%, rgba(0, 212, 255, 0.03) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
          }
          .skill-card::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.02) 50%, transparent 70%);
            animation: card-shine 6s linear infinite;
            pointer-events: none;
          }
          @keyframes card-shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
          }
          .skill-card:hover {
            border-color: rgba(255, 0, 128, 0.5);
            box-shadow: 
              0 0 30px rgba(255, 0, 128, 0.2),
              0 0 60px rgba(145, 94, 255, 0.15),
              0 20px 60px rgba(0, 0, 0, 0.4);
            transform: translateY(-8px) scale(1.02);
          }
          .skill-card:hover::before {
            opacity: 1;
          }
          .skill-icon-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 90px;
          }
          .skill-name {
            color: #ffffff;
            font-size: 17px;
            font-weight: 700;
            text-align: center;
            letter-spacing: 0.5px;
          }
          .progress-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .progress-track {
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 3px;
            overflow: hidden;
            position: relative;
          }
          .progress-track::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            animation: shimmer 2s infinite;
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .progress-fill {
            height: 100%;
            border-radius: 3px;
            background: linear-gradient(90deg, #ff0080 0%, #915EFF 50%, #00D4FF 100%);
            transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            box-shadow: 0 0 10px rgba(255, 0, 128, 0.5), 0 0 20px rgba(145, 94, 255, 0.3);
          }
          .progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 6px;
            height: 100%;
            background: #ffffff;
            border-radius: 50%;
            box-shadow: 0 0 8px #ffffff, 0 0 15px #00D4FF;
          }
          .skill-percentage {
            color: #ffffff;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            background: linear-gradient(135deg, #ff0080, #00D4FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          @media (min-width: 768px) {
            .skills-grid {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
          @media (max-width: 767px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .skill-card {
              padding: 20px 16px;
            }
            .skill-icon-container svg {
              width: 60px !important;
              height: 60px !important;
            }
          }
          /* ========== AI ENGINEERING EXPERIENCE SECTION STYLES ========== */
          .ai-experience-section {
            position: relative;
            padding: 48px 32px;
            border-radius: 32px;
            background: linear-gradient(145deg, rgba(10, 8, 24, 0.95) 0%, rgba(16, 13, 37, 0.98) 100%);
            border: 1px solid rgba(145, 94, 255, 0.15);
            overflow: hidden;
          }
          .ai-experience-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 10% 10%, rgba(255, 107, 107, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 90% 90%, rgba(255, 217, 61, 0.08) 0%, transparent 40%);
            pointer-events: none;
          }
          .ai-experience-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-bottom: 48px;
            position: relative;
            z-index: 2;
            text-align: center;
          }
          .ai-experience-header-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
          }
          .ai-experience-header-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%);
            font-size: 28px;
            box-shadow: 0 0 30px rgba(255, 107, 107, 0.4), 0 0 60px rgba(255, 217, 61, 0.2);
            animation: rocket-pulse 3s ease-in-out infinite;
          }
          @keyframes rocket-pulse {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(255, 107, 107, 0.4), 0 0 40px rgba(255, 217, 61, 0.2);
              transform: translateY(0);
            }
            50% { 
              box-shadow: 0 0 40px rgba(255, 107, 107, 0.6), 0 0 80px rgba(255, 217, 61, 0.4);
              transform: translateY(-3px);
            }
          }
          .ai-experience-header-text {
            font-size: 32px;
            font-weight: 800;
            background: linear-gradient(135deg, #FF6B6B 0%, #FFD93D 50%, #00D4FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
          }
          .ai-experience-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 24px;
            position: relative;
            z-index: 2;
          }
          @media (min-width: 768px) {
            .ai-experience-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          .ai-project-card {
            position: relative;
            background: linear-gradient(145deg, rgba(16, 13, 37, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%);
            border: 1px solid rgba(145, 94, 255, 0.25);
            border-radius: 20px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }
          .ai-project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #ff0080, #915EFF, #00D4FF);
            opacity: 0.6;
          }
          .ai-project-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #00D4FF, #915EFF, #ff0080);
            opacity: 0.6;
          }
          .ai-project-card:hover {
            border-color: rgba(255, 0, 128, 0.5);
            box-shadow: 
              0 0 30px rgba(255, 0, 128, 0.15),
              0 0 60px rgba(145, 94, 255, 0.1),
              0 20px 60px rgba(0, 0, 0, 0.4);
            transform: translateY(-8px);
          }
          .ai-project-card:hover::before,
          .ai-project-card:hover::after {
            opacity: 1;
          }
          .ai-project-illustration {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(145deg, rgba(0, 0, 0, 0.3) 0%, rgba(10, 8, 24, 0.5) 100%);
            border-radius: 12px;
            overflow: hidden;
            position: relative;
          }
          .ai-project-illustration::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              linear-gradient(rgba(145, 94, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(145, 94, 255, 0.02) 1px, transparent 1px);
            background-size: 20px 20px;
            pointer-events: none;
          }
          .ai-project-content {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .ai-project-title {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            background: linear-gradient(135deg, #ffffff 0%, #00D4FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .ai-project-desc {
            font-size: 14px;
            line-height: 1.6;
            color: #aaa6c3;
            margin: 0;
          }
          /* ========== WHAT I OFFER SECTION STYLES ========== */
          .services-section {
            position: relative;
            padding: 48px 32px;
            border-radius: 32px;
            background: linear-gradient(145deg, rgba(10, 8, 24, 0.95) 0%, rgba(16, 13, 37, 0.98) 100%);
            border: 1px solid rgba(145, 94, 255, 0.15);
            overflow: hidden;
          }
          .services-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
          }
          .services-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 48px;
            position: relative;
            z-index: 2;
            text-align: center;
          }
          .services-header-text {
            font-size: 36px;
            font-weight: 700;
            background: linear-gradient(135deg, #ffffff 0%, #00D4FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
          }
          .services-header-subtitle {
            font-size: 16px;
            color: #aaa6c3;
            font-style: italic;
            margin: 0;
          }
          .services-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 24px;
            position: relative;
            z-index: 2;
          }
          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          .service-card {
            position: relative;
            background: linear-gradient(145deg, rgba(16, 13, 37, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%);
            border: 1px solid rgba(0, 212, 255, 0.25);
            border-radius: 20px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 16px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #00D4FF, #915EFF, #ff0080);
            opacity: 0.7;
          }
          .service-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #ff0080, #915EFF, #00D4FF);
            opacity: 0.7;
          }
          .service-card:hover {
            border-color: rgba(0, 212, 255, 0.6);
            box-shadow: 
              0 0 30px rgba(0, 212, 255, 0.2),
              0 0 60px rgba(145, 94, 255, 0.1),
              0 20px 60px rgba(0, 0, 0, 0.4);
            transform: translateY(-10px);
          }
          .service-card:hover::before,
          .service-card:hover::after {
            opacity: 1;
          }
          /* Circuit corner decorations */
          .service-card .circuit-corner {
            position: absolute;
            width: 40px;
            height: 40px;
            pointer-events: none;
          }
          .service-card .circuit-corner-tl {
            top: 8px;
            left: 8px;
            border-top: 2px solid rgba(0, 212, 255, 0.4);
            border-left: 2px solid rgba(0, 212, 255, 0.4);
          }
          .service-card .circuit-corner-tr {
            top: 8px;
            right: 8px;
            border-top: 2px solid rgba(0, 212, 255, 0.4);
            border-right: 2px solid rgba(0, 212, 255, 0.4);
          }
          .service-card .circuit-corner-bl {
            bottom: 8px;
            left: 8px;
            border-bottom: 2px solid rgba(0, 212, 255, 0.4);
            border-left: 2px solid rgba(0, 212, 255, 0.4);
          }
          .service-card .circuit-corner-br {
            bottom: 8px;
            right: 8px;
            border-bottom: 2px solid rgba(0, 212, 255, 0.4);
            border-right: 2px solid rgba(0, 212, 255, 0.4);
          }
          .service-card:hover .circuit-corner-tl,
          .service-card:hover .circuit-corner-tr,
          .service-card:hover .circuit-corner-bl,
          .service-card:hover .circuit-corner-br {
            border-color: rgba(0, 212, 255, 0.8);
          }
          .service-icon-container {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 2;
          }
          .service-title {
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            position: relative;
            z-index: 2;
          }
          .service-desc {
            font-size: 14px;
            line-height: 1.6;
            color: #aaa6c3;
            margin: 0;
            position: relative;
            z-index: 2;
          }
          /* ========== TESTIMONIALS SECTION STYLES ========== */
          .testimonials-section {
            position: relative;
            padding: 48px 32px;
            border-radius: 32px;
            background: linear-gradient(145deg, rgba(10, 8, 24, 0.95) 0%, rgba(16, 13, 37, 0.98) 100%);
            border: 1px solid rgba(145, 94, 255, 0.15);
            overflow: hidden;
          }
          .testimonials-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              linear-gradient(rgba(145, 94, 255, 0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(145, 94, 255, 0.015) 1px, transparent 1px);
            background-size: 50px 50px;
            pointer-events: none;
          }
          .testimonials-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 48px;
            position: relative;
            z-index: 2;
            text-align: center;
          }
          .testimonials-header-text {
            font-size: 48px;
            font-weight: 400;
            font-style: italic;
            font-family: 'Times New Roman', Times, serif;
            background: linear-gradient(135deg, #00D4FF 0%, #915EFF 50%, #ff0080 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
            letter-spacing: 2px;
          }
          .testimonials-header-subtitle {
            font-size: 16px;
            color: #aaa6c3;
            font-style: italic;
            margin: 0;
          }
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 24px;
            position: relative;
            z-index: 2;
          }
          @media (min-width: 768px) {
            .testimonials-grid-new {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .testimonial-card-new {
            position: relative;
            background: linear-gradient(145deg, rgba(16, 13, 37, 0.9) 0%, rgba(21, 16, 48, 0.95) 100%);
            border: 1px solid rgba(145, 94, 255, 0.25);
            border-radius: 20px;
            padding: 32px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 16px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }
          .testimonial-card-new::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00D4FF, #915EFF, #00D4FF, transparent);
            opacity: 0.6;
          }
          .testimonial-card-new::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #915EFF, #ff0080, #915EFF, transparent);
            opacity: 0.6;
          }
          .testimonial-card-new:hover {
            border-color: rgba(0, 212, 255, 0.5);
            box-shadow: 
              0 0 30px rgba(0, 212, 255, 0.15),
              0 0 60px rgba(145, 94, 255, 0.1),
              0 20px 60px rgba(0, 0, 0, 0.4);
            transform: translateY(-8px);
          }
          .testimonial-avatar-container {
            position: relative;
            width: 80px;
            height: 80px;
          }
          .testimonial-avatar-ring {
            position: absolute;
            top: -4px;
            left: -4px;
            width: 88px;
            height: 88px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00D4FF 0%, #915EFF 50%, #ff0080 100%);
            animation: avatar-glow 3s ease-in-out infinite;
          }
          @keyframes avatar-glow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          .testimonial-avatar {
            position: relative;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid #0a0a14;
            z-index: 1;
          }
          .testimonial-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .testimonial-name {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
          }
          .testimonial-role {
            font-size: 14px;
            color: #00D4FF;
            margin: 0;
            margin-top: -8px;
          }
          .testimonial-quote {
            font-size: 14px;
            line-height: 1.7;
            color: #d1d5db;
            margin: 0;
            font-style: italic;
          }
          /* Timeline Styles */
          .timeline-container {
            position: relative;
            padding: 20px 0;
          }
          .timeline-line {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, #915EFF 0%, #00D4FF 50%, #ff0080 100%);
            border-radius: 3px;
          }
          .timeline-item {
            display: flex;
            justify-content: flex-end;
            padding-right: calc(50% + 30px);
            position: relative;
            margin-bottom: 40px;
          }
          .timeline-item:nth-child(even) {
            justify-content: flex-start;
            padding-right: 0;
            padding-left: calc(50% + 30px);
          }
          .timeline-dot {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #151030;
            border: 3px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            z-index: 2;
          }
          .timeline-card {
            background: linear-gradient(145deg, #100d25 0%, #151030 100%);
            border: 1px solid rgba(145, 94, 255, 0.2);
            border-radius: 16px;
            padding: 24px;
            max-width: 450px;
            width: 100%;
            transition: all 0.3s ease;
          }
          .timeline-card:hover {
            border-color: rgba(145, 94, 255, 0.5);
            box-shadow: 0 10px 40px rgba(145, 94, 255, 0.2);
            transform: translateY(-4px);
          }
          .timeline-date {
            display: inline-block;
            padding: 6px 14px;
            background: rgba(145, 94, 255, 0.15);
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
            color: #c4b5fd;
            margin-bottom: 12px;
          }
          .timeline-title {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 8px 0;
          }
          .timeline-place {
            font-size: 15px;
            color: #915EFF;
            font-weight: 500;
            margin: 0 0 10px 0;
          }
          .timeline-desc {
            font-size: 14px;
            color: #aaa6c3;
            line-height: 1.6;
            margin: 0;
          }
          .timeline-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 12px;
          }
          .timeline-tag {
            padding: 4px 10px;
            background: rgba(145, 94, 255, 0.1);
            border: 1px solid rgba(145, 94, 255, 0.3);
            border-radius: 12px;
            font-size: 12px;
            color: #c4b5fd;
          }
          @media (max-width: 768px) {
            .timeline-line {
              left: 24px;
            }
            .timeline-item,
            .timeline-item:nth-child(even) {
              justify-content: flex-start;
              padding-left: 70px;
              padding-right: 0;
            }
            .timeline-dot {
              left: 24px;
              width: 40px;
              height: 40px;
            }
            .timeline-card {
              max-width: 100%;
            }
          }
          @media (min-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .certifications-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
            .services-grid {
              grid-template-columns: repeat(4, 1fr) !important;
            }
            .testimonials-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          
          /* Testimonial Card Hover Animation */
          .testimonial-card-animated {
            position: relative;
          }
          
          .testimonial-card-animated::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(139, 92, 246, 0.08),
              transparent
            );
            transition: left 0.5s ease;
            pointer-events: none;
            border-radius: 16px;
          }
          
          .testimonial-card-animated:hover::before {
            left: 100%;
          }
          
          .testimonial-card-animated:hover {
            border-color: rgba(139, 92, 246, 0.4) !important;
          }
        `}
            </style>

            {/* Container */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* ========== SECTION 1: HERO ========== */}
                <motion.section
                    variants={fadeIn("up", "tween", 0.1, 0.8)}
                    initial="hidden"
                    animate="show"
                    className="hero-container"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "60px",
                        marginBottom: "80px",
                    }}
                >
                    {/* Left: Text Content */}
                    <div
                        className="hero-text"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "20px",
                            flex: 1,
                        }}
                    >
                        {/* Name */}
                        <motion.h1
                            variants={textVariant(0.2)}
                            initial="hidden"
                            animate="show"
                            className="gradient-text"
                            style={{
                                fontSize: "clamp(32px, 5vw, 52px)",
                                fontWeight: 800,
                                lineHeight: 1.2,
                                margin: 0,
                            }}
                        >
                            Mohamad Zunayed
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            variants={fadeIn("up", "tween", 0.3, 0.6)}
                            initial="hidden"
                            animate="show"
                            style={{
                                fontSize: "clamp(16px, 2.5vw, 20px)",
                                color: "#aaa6c3",
                                margin: 0,
                                maxWidth: "500px",
                                lineHeight: 1.6,
                            }}
                        >
                            AI Engineer & Computer Science Student
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            variants={fadeIn("up", "tween", 0.4, 0.6)}
                            initial="hidden"
                            animate="show"
                            className="social-icons-container"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "12px",
                                marginTop: "16px",
                            }}
                        >
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Profile Image */}
                    <motion.div
                        variants={fadeIn("left", "tween", 0.3, 0.8)}
                        initial="hidden"
                        animate="show"
                        className="profile-image-container"
                    >
                        <img
                            src={profile}
                            alt="Mohamad Zunayed"
                            className="profile-image"
                        />
                    </motion.div>
                </motion.section>

                {/* ========== SECTION 2: SUMMARY CARD ========== */}
                <motion.section
                    variants={fadeIn("up", "tween", 0.5, 0.8)}
                    initial="hidden"
                    animate="show"
                >
                    <div className="summary-card">
                        {/* Header with Brain Icon - Centered */}
                        <div className="centered-section-header">
                            <div className="centered-header-row">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "12px",
                                        background: "linear-gradient(135deg, #915EFF 0%, #6B3FA0 100%)",
                                        boxShadow: "0 0 20px rgba(145, 94, 255, 0.4)",
                                    }}
                                >
                                    <BrainIcon />
                                </div>
                                <h2 className="animated-gradient-text">
                                    Summary
                                </h2>
                            </div>
                        </div>

                        {/* Sub-headline Pill */}
                        <div
                            style={{
                                marginBottom: "24px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <span className="headline-pill">
                                ✨ Empowering the future with AI & Intelligent Systems
                            </span>
                        </div>

                        {/* Bio Text */}
                        <p
                            style={{
                                fontSize: "17px",
                                color: "#d1d5db",
                                lineHeight: 1.8,
                                margin: "0 auto",
                                marginBottom: "32px",
                                maxWidth: "900px",
                                textAlign: "center",
                            }}
                        >
                            I am a passionate and driven Computer Science and Engineering undergraduate at
                            <span style={{ color: "#915EFF", fontWeight: 600 }}> Bangladesh University of Business & Technology (BUBT)</span>,
                            focused on AI, Python, and intelligent systems. My goal is to leverage cutting-edge
                            machine learning techniques to solve real-world problems and create innovative solutions
                            that make a positive impact on society.
                        </p>

                        {/* Tech Badges */}
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                justifyContent: "center",
                            }}
                        >
                            {techBadges.map((badge, index) => (
                                <motion.span
                                    key={index}
                                    className="tech-badge"
                                    style={{
                                        backgroundColor: badge.color,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {badge.name}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ========== SECTION 3: TECHNICAL SKILLS ========== */}
                <motion.section
                    variants={fadeIn("up", "tween", 0.6, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="technical-skills-section"
                    style={{
                        marginTop: "80px",
                        borderRadius: "32px",
                        padding: "48px 32px",
                        background: "linear-gradient(145deg, rgba(10, 8, 24, 0.95) 0%, rgba(16, 13, 37, 0.98) 100%)",
                        border: "1px solid rgba(145, 94, 255, 0.15)",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Circuit Pattern Overlay */}
                    <div className="circuit-pattern" />

                    {/* Decorative corner glows */}
                    <div style={{
                        position: "absolute",
                        top: "-50px",
                        left: "-50px",
                        width: "200px",
                        height: "200px",
                        background: "radial-gradient(circle, rgba(255, 0, 128, 0.15) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />
                    <div style={{
                        position: "absolute",
                        bottom: "-50px",
                        right: "-50px",
                        width: "200px",
                        height: "200px",
                        background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* Section Header */}
                    <motion.div
                        className="skills-header"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="skills-header-icon">
                            ⚡
                        </div>
                        <h2 className="skills-header-text">
                            Technical Skills
                        </h2>
                    </motion.div>

                    {/* Skills Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "24px",
                            position: "relative",
                            zIndex: 2,
                        }}
                        className="skills-grid"
                    >
                        {technicalSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skill-card"
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* SVG Icon */}
                                <div className="skill-icon-container">
                                    <skill.IconComponent />
                                </div>

                                {/* Skill Name */}
                                <span className="skill-name">{skill.name}</span>

                                {/* Progress Container */}
                                <div className="progress-container">
                                    {/* Progress Bar */}
                                    <div className="progress-track">
                                        <motion.div
                                            className="progress-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.5,
                                                delay: 0.5 + index * 0.1,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                        />
                                    </div>

                                    {/* Percentage */}
                                    <motion.span
                                        className="skill-percentage"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    >
                                        {skill.percentage}%
                                    </motion.span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ========== SECTION 4: MY JOURNEY TIMELINE ========== */}
                <motion.section
                    variants={fadeIn("up", "tween", 0.7, 0.8)}
                    initial="hidden"
                    animate="show"
                    style={{
                        marginTop: "80px",
                    }}
                >
                    {/* Section Header */}
                    <motion.div
                        variants={textVariant()}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        style={{
                            textAlign: "center",
                            marginBottom: "48px",
                        }}
                    >
                        <h2 className="animated-gradient-text-large">
                            My Journey
                        </h2>
                        <p
                            style={{
                                fontSize: "16px",
                                color: "#aaa6c3",
                                margin: 0,
                            }}
                        >
                            A timeline of my education, experience, and achievements
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        variants={fadeIn('up', 'spring', 0.1, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="timeline-container"
                    >
                        {/* Center Line */}
                        <div className="timeline-line" />

                        {/* Timeline Items */}
                        {journeyData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Timeline Dot with Icon */}
                                <div
                                    className="timeline-dot"
                                    style={{ borderColor: item.color }}
                                >
                                    <item.icon />
                                </div>

                                {/* Card */}
                                <div className="timeline-card">
                                    {/* Date */}
                                    <span className="timeline-date">{item.date}</span>

                                    {/* Title */}
                                    <h3 className="timeline-title">{item.title}</h3>

                                    {/* Place/Company */}
                                    {item.place && (
                                        <p className="timeline-place">{item.place}</p>
                                    )}

                                    {/* Description */}
                                    {item.description && (
                                        <p className="timeline-desc">{item.description}</p>
                                    )}

                                    {/* Points for Detailed Experience */}
                                    {item.points && (
                                        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                                            {item.points.map((point, i) => (
                                                <li key={i} className="timeline-desc" style={{ marginBottom: "5px" }}>{point}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Tags */}
                                    {item.tags.length > 0 && (
                                        <div className="timeline-tags">
                                            {item.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="timeline-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* ========== SECTION 5: AI ENGINEERING EXPERIENCE ========== */}
                <motion.section
                    variants={fadeIn("up", "tween", 0.8, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="ai-experience-section"
                    style={{
                        marginTop: "80px",
                    }}
                >
                    {/* Decorative corner glows */}
                    <div style={{
                        position: "absolute",
                        top: "-50px",
                        left: "-50px",
                        width: "200px",
                        height: "200px",
                        background: "radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />
                    <div style={{
                        position: "absolute",
                        bottom: "-50px",
                        right: "-50px",
                        width: "200px",
                        height: "200px",
                        background: "radial-gradient(circle, rgba(255, 217, 61, 0.15) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* Section Header - Centered */}
                    <motion.div
                        className="ai-experience-header"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="ai-experience-header-row">
                            <div className="ai-experience-header-icon">
                                🚀
                            </div>
                            <h2 className="ai-experience-header-text">
                                AI Engineering Experience
                            </h2>
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="ai-experience-grid">
                        {projectExperience.map((project, index) => (
                            <motion.div
                                key={index}
                                className="ai-project-card"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* SVG Illustration */}
                                <div className="ai-project-illustration">
                                    <project.IconComponent />
                                </div>

                                {/* Content */}
                                <div className="ai-project-content">
                                    <h3 className="ai-project-title">{project.title}</h3>
                                    <p className="ai-project-desc">{project.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ========== SECTION 6: CERTIFICATIONS ========== */}
                <motion.section
                    variants={fadeIn("up", "tween", 0.9, 0.8)}
                    initial="hidden"
                    animate="show"
                    style={{
                        marginTop: "80px",
                    }}
                >
                    {/* Section Header */}
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "48px",
                        }}
                    >
                        <h2 className="animated-gradient-text-large">
                            Certifications
                        </h2>
                        <p
                            style={{
                                fontSize: "16px",
                                color: "#aaa6c3",
                                margin: 0,
                            }}
                        >
                            Professional achievements and verified skills
                        </p>
                    </div>

                    {/* Certifications Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(1, 1fr)",
                            gap: "24px",
                        }}
                        className="certifications-grid md:grid-cols-3"
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
                                initial="hidden"
                                animate="show"
                                whileHover={{ scale: 1.03, rotate: 1 }}
                                style={{
                                    background: "#151030", // bg-tertiary
                                    borderRadius: "16px",
                                    padding: "20px",
                                    border: "1px solid rgba(145, 94, 255, 0.15)",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px",
                                }}
                            >
                                {/* Image Placeholder */}
                                <div
                                    style={{
                                        width: "100%",
                                        height: "160px",
                                        backgroundColor: "#2a2d3e", // Dark gray placeholder
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#aaa6c3",
                                        fontSize: "14px",
                                    }}
                                >
                                    Placeholder Image
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3
                                        style={{
                                            color: "white",
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            marginBottom: "4px",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        {cert.title}
                                    </h3>
                                    <p
                                        style={{
                                            color: "#aaa6c3",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {cert.issuer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ========== SECTION 7: WHAT I OFFER ========== */}
                <motion.section
                    variants={fadeIn("up", "tween", 1.0, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="services-section"
                    style={{
                        marginTop: "80px",
                    }}
                >
                    {/* Decorative corner glows */}
                    <div style={{
                        position: "absolute",
                        top: "-50px",
                        left: "-50px",
                        width: "200px",
                        height: "200px",
                        background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />
                    <div style={{
                        position: "absolute",
                        bottom: "-50px",
                        right: "-50px",
                        width: "200px",
                        height: "200px",
                        background: "radial-gradient(circle, rgba(145, 94, 255, 0.15) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* Sparkle decoration */}
                    <div style={{
                        position: "absolute",
                        bottom: "30px",
                        right: "30px",
                        fontSize: "32px",
                        color: "#FFD93D",
                        opacity: 0.6,
                        pointerEvents: "none",
                    }}>✦</div>

                    {/* Section Header - Centered */}
                    <motion.div
                        className="services-header"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="services-header-text">What I Offer</h2>
                        <p className="services-header-subtitle">Specialized technical services for complex problems</p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Circuit Corner Decorations */}
                                <div className="circuit-corner circuit-corner-tl" />
                                <div className="circuit-corner circuit-corner-tr" />
                                <div className="circuit-corner circuit-corner-bl" />
                                <div className="circuit-corner circuit-corner-br" />

                                {/* SVG Icon */}
                                <div className="service-icon-container">
                                    <service.IconComponent />
                                </div>

                                {/* Title */}
                                <h3 className="service-title">{service.title}</h3>

                                {/* Description */}
                                <p className="service-desc">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ========== SECTION 8: TESTIMONIALS ========== */}
                <motion.section
                    variants={fadeIn("up", "tween", 1.1, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="testimonials-section"
                    style={{
                        marginTop: "80px",
                    }}
                >
                    {/* Decorative corner glows */}
                    <div style={{
                        position: "absolute",
                        top: "-50px",
                        left: "-50px",
                        width: "250px",
                        height: "250px",
                        background: "radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />
                    <div style={{
                        position: "absolute",
                        bottom: "-50px",
                        right: "-50px",
                        width: "250px",
                        height: "250px",
                        background: "radial-gradient(circle, rgba(255, 0, 128, 0.12) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "400px",
                        height: "400px",
                        background: "radial-gradient(circle, rgba(145, 94, 255, 0.08) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* Section Header - Centered */}
                    <motion.div
                        className="testimonials-header"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="testimonials-header-text">Testimonials</h2>
                        <p className="testimonials-header-subtitle">Endorsements from mentors and industry leaders</p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <div className="testimonials-grid testimonials-grid-new">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card-new"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Avatar with Glowing Ring */}
                                <div className="testimonial-avatar-container">
                                    <div className="testimonial-avatar-ring" />
                                    <div className="testimonial-avatar">
                                        <img
                                            src={testimonial.image}
                                            alt={`feedback-by-${testimonial.name}`}
                                        />
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="testimonial-name">{testimonial.name}</h3>

                                {/* Role */}
                                <p className="testimonial-role">{testimonial.role}</p>

                                {/* Quote */}
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ========== RESUME BUTTON ========== */}
                <motion.div
                    variants={fadeIn("up", "tween", 1.2, 0.5)}
                    initial="hidden"
                    animate="show"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                        marginBottom: "40px",
                    }}
                >
                    <a
                        href="/Resume%20of%20Zunayed.pdf"
                        download="Resume_of_Zunayed.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "#915EFF",
                            color: "white",
                            padding: "16px 32px",
                            borderRadius: "12px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            textDecoration: "none",
                            boxShadow: "0px 10px 30px -10px #915EFF",
                            transition: "all 0.3s ease",
                        }}
                    >
                        {/* Simple SVG Download Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11584 20.9999 4.561 21H19.439C19.8842 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

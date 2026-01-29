import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import "./contactCyber.css";

// ==================== SVG ICONS ====================
const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
);

const LoaderIcon = () => (
    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ErrorIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// ==================== CONTACT INFO DATA ====================
const contactCards = [
    {
        icon: EmailIcon,
        label: "Email",
        value: "mdzunayed2002@gmail.com",
        href: "mailto:mdzunayed2002@gmail.com",
    },
    {
        icon: LocationIcon,
        label: "Location",
        value: "Dhaka, Bangladesh",
        href: null,
    },
    {
        icon: PhoneIcon,
        label: "Phone",
        value: "+880 1610405303",
        href: "tel:+8801610405303",
    },
    {
        icon: LinkedInIcon,
        label: "LinkedIn",
        value: "mohammad-zunayed",
        href: "https://www.linkedin.com/in/mohammad-zunayed-7793122a3",
    },
    {
        icon: FacebookIcon,
        label: "Facebook",
        value: "md.zunayed.7921",
        href: "https://www.facebook.com/md.zunayed.7921",
    },
    {
        icon: TelegramIcon,
        label: "Telegram",
        value: "@zunayed328",
        href: "https://t.me/zunayed328",
    },
    {
        icon: GitHubIcon,
        label: "GitHub",
        value: "zunayed328",
        href: "https://github.com/zunayed328",
    },
];

// ==================== INFO CARD COMPONENT ====================
const InfoCard = ({ icon: Icon, label, value, href }) => {
    const cardContent = (
        <div className="info-card-compact">
            <div className="info-card-icon">
                <Icon />
            </div>
            <div className="info-card-text">
                <span className="info-card-label">{label}</span>
                <span className="info-card-value">{value}</span>
            </div>
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target={href.startsWith("mailto") || href.startsWith("tel") ? "_self" : "_blank"}
                rel="noopener noreferrer"
            >
                {cardContent}
            </a>
        );
    }

    return cardContent;
};

// ==================== MAIN COMPONENT ====================
const ContactSection = ({ variant = "home" }) => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState({ type: null, message: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: "" });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    to_name: "Mohammad Zunayed",
                    to_email: "mdzunayed202@gmail.com",
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({ type: "success", message: "Message sent successfully!" });
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({ type: "error", message: "Failed to send. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    const isPage = variant === "page";

    return (
        <section
            id="contact"
            className={`cyber-contact-compact ${isPage ? "pt-28" : ""}`}
        >
            {/* Background Effects */}
            <div className="cyber-bg-overlay" />
            <div className="cyber-glow-left" />
            <div className="cyber-glow-right" />

            {/* Circuit Decorations */}
            <div className="circuit-decor">
                <div className="circuit-h-line" />
                <div className="circuit-v-line" />
                <div className="circuit-node" style={{ top: '15%', left: '120px' }} />
                <div className="circuit-node" style={{ top: '22%', left: '121px' }} />
            </div>

            {/* MAIN 3-COLUMN LAYOUT */}
            <div className="contact-wrapper">

                {/* LEFT: 3D Earth */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="earth-column"
                >
                    <div className="earth-box">
                        <div className="earth-inner-glow" />
                        <EarthCanvas />
                    </div>
                </motion.div>

                {/* CENTER: Header + Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="info-column"
                >
                    {/* Header */}
                    <div className="contact-header">
                        <h1 className="contact-title">Get in Touch</h1>
                        <h2 className="contact-subtitle">Contact</h2>
                        <p className="contact-desc">
                            Have an idea or project? Let's build something intelligent and impactful together.
                        </p>
                    </div>

                    {/* Info Cards Grid - 2 columns */}
                    <div className="info-cards-grid">
                        {contactCards.map((card, index) => (
                            <InfoCard key={index} {...card} />
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT: Message Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="form-column"
                >
                    <div className="form-panel">
                        <h3 className="form-title">Message</h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="form-fields">
                            {/* Name */}
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="cyber-input"
                            />

                            {/* Email + Phone Row */}
                            <div className="input-row">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="cyber-input"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="cyber-input"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                required
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="cyber-input cyber-textarea"
                                rows={3}
                            />

                            {/* Status */}
                            {status.type && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`status-alert ${status.type}`}
                                >
                                    {status.type === "success" ? <CheckIcon /> : <ErrorIcon />}
                                    <span>{status.message}</span>
                                </motion.div>
                            )}

                            {/* Send Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="cyber-send-btn"
                            >
                                {isLoading ? (
                                    <span className="btn-loading">
                                        <LoaderIcon />
                                        Sending...
                                    </span>
                                ) : (
                                    "Send"
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Corner Diamond */}
            <div className="corner-diamond-decor" />
        </section>
    );
};

export default ContactSection;

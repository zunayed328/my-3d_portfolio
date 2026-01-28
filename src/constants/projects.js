import {
    mobile,
    backend,
    creator,
    web,
} from "../assets";

// Fallback image if you don't have screenshots yet
const projectPlaceholder = web;

export const projects = [
    // 🌱 Beginner Projects
    {
        id: 1,
        title: "Fake News Detector",
        description: "An NLP model using TF-IDF and Passive Aggressive Classifier to analyze news articles and flag misleading stories.",
        tags: [
            { name: "NLP", color: "blue-text-gradient" },
            { name: "Python", color: "green-text-gradient" },
            { name: "Sklearn", color: "pink-text-gradient" },
        ],
        category: "Beginner",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 2,
        title: "AI-Powered Study Planner",
        description: "Generates a dynamic daily study schedule based on exam dates and syllabus size using basic ML algorithms.",
        tags: [
            { name: "ML", color: "blue-text-gradient" },
            { name: "Python", color: "green-text-gradient" },
            { name: "Education", color: "pink-text-gradient" },
        ],
        category: "Beginner",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 3,
        title: "Smart Budget Tracker",
        description: "Categorizes banking transactions and predicts future expenses using time-series analysis.",
        tags: [
            { name: "Data Science", color: "blue-text-gradient" },
            { name: "Pandas", color: "green-text-gradient" },
            { name: "Finance", color: "pink-text-gradient" },
        ],
        category: "Beginner",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 4,
        title: "Spam & Phishing Classifier",
        description: "Detects spam emails by analyzing headers and metadata using Naive Bayes or Transformer models.",
        tags: [
            { name: "NLP", color: "blue-text-gradient" },
            { name: "Security", color: "green-text-gradient" },
            { name: "Transformers", color: "pink-text-gradient" },
        ],
        category: "Beginner",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 5,
        title: "Basic Emotion Detector",
        description: "Real-time webcam analysis to detect emotions (happy, sad, angry) using OpenCV and DeepFace.",
        tags: [
            { name: "OpenCV", color: "blue-text-gradient" },
            { name: "DeepFace", color: "green-text-gradient" },
            { name: "Vision", color: "pink-text-gradient" },
        ],
        category: "Beginner",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },

    // 🚀 Intermediate Projects
    {
        id: 6,
        title: "Sign Language Translator",
        description: "Converts American Sign Language (ASL) gestures into text/speech in real-time using CNNs.",
        tags: [
            { name: "Deep Learning", color: "blue-text-gradient" },
            { name: "CNN", color: "green-text-gradient" },
            { name: "TensorFlow", color: "pink-text-gradient" },
        ],
        category: "Intermediate",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 7,
        title: "Plant Disease Identification",
        description: "Classifies plant diseases from leaf photos using Transfer Learning (ResNet). Deployed as a mobile app.",
        tags: [
            { name: "Transfer Learning", color: "blue-text-gradient" },
            { name: "ResNet", color: "green-text-gradient" },
            { name: "Mobile", color: "pink-text-gradient" },
        ],
        category: "Intermediate",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 8,
        title: "Automated Resume Screener",
        description: "Parses PDF resumes and extracts key skills using SpaCy (NER) to score candidates against job descriptions.",
        tags: [
            { name: "NLP", color: "blue-text-gradient" },
            { name: "SpaCy", color: "green-text-gradient" },
            { name: "Automation", color: "pink-text-gradient" },
        ],
        category: "Intermediate",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 9,
        title: "Smart Attendance System",
        description: "Automates class attendance by identifying multiple faces in a classroom snapshot.",
        tags: [
            { name: "Face Rec", color: "blue-text-gradient" },
            { name: "Computer Vision", color: "green-text-gradient" },
            { name: "Python", color: "pink-text-gradient" },
        ],
        category: "Intermediate",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 10,
        title: "Garbage Segregation AI",
        description: "Identifies waste as biodegradable, recyclable, or hazardous. Integrated with Raspberry Pi.",
        tags: [
            { name: "IoT", color: "blue-text-gradient" },
            { name: "Raspberry Pi", color: "green-text-gradient" },
            { name: "Image Classif.", color: "pink-text-gradient" },
        ],
        category: "Intermediate",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },

    // 🔥 Advanced Projects
    {
        id: 11,
        title: "RAG-Based PDF Tutor",
        description: "A tutor app using Llama 3 and RAG to answer questions based strictly on uploaded textbooks.",
        tags: [
            { name: "GenAI", color: "blue-text-gradient" },
            { name: "RAG", color: "green-text-gradient" },
            { name: "LLMs", color: "pink-text-gradient" },
        ],
        category: "Advanced",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 12,
        title: "Deepfake Video Detector",
        description: "Analyzes facial micro-expressions and video artifacts to determine if a video has been manipulated.",
        tags: [
            { name: "Deep Learning", color: "blue-text-gradient" },
            { name: "Forensics", color: "green-text-gradient" },
            { name: "Video AI", color: "pink-text-gradient" },
        ],
        category: "Advanced",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 13,
        title: "AI Career Counselor Agent",
        description: "An autonomous agent that scrapes job market data to generate personalized career roadmaps.",
        tags: [
            { name: "AI Agents", color: "blue-text-gradient" },
            { name: "Web Scraping", color: "green-text-gradient" },
            { name: "AutoGPT", color: "pink-text-gradient" },
        ],
        category: "Advanced",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 14,
        title: "Autonomous Drone Nav",
        description: "Uses Reinforcement Learning to train a simulated drone to navigate obstacles without human input.",
        tags: [
            { name: "Reinforcement Learning", color: "blue-text-gradient" },
            { name: "ROS", color: "green-text-gradient" },
            { name: "Robotics", color: "pink-text-gradient" },
        ],
        category: "Advanced",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
    {
        id: 15,
        title: "Virtual Try-On (GANs)",
        description: "Uses Generative Adversarial Networks to allow users to virtually 'try on' outfits dynamically.",
        tags: [
            { name: "GANs", color: "blue-text-gradient" },
            { name: "GenAI", color: "green-text-gradient" },
            { name: "Fashion Tech", color: "pink-text-gradient" },
        ],
        category: "Advanced",
        image: projectPlaceholder,
        source_code_link: "https://github.com/",
    },
];
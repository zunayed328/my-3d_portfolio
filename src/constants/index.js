import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

import {
  RobotIcon,
  CodeIcon,
  BarChartIcon,
  InfinityIcon,
} from "../components/Icons";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/about",
    title: "About",
  },
  {
    id: "/projects",
    title: "Projects",
  },
  {
    id: "/research",
    title: "Research",
    dropdown: [
      { id: "/research/current", title: "Current Research" },
      { id: "/research/future", title: "Future Research" },
    ],
  },
  {
    id: "/blog",
    title: "Blog",
  },
  {
    id: "/contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI/ML",
    company_name: "Machine Learning",
    icon: RobotIcon,
    iconBg: "#ffffff",
    date: "",
    points: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "LLMs",
      "Computer Vision",
    ],
  },
  {
    title: "Programming",
    company_name: "Development",
    icon: CodeIcon,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Python",
      "TypeScript",
      "C++",
      "Java",
    ],
  },
  {
    title: "Data Science",
    company_name: "Analytics",
    icon: BarChartIcon,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Platforms",
    company_name: "DevOps",
    icon: InfinityIcon,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Docker",
      "Git",
      "AWS",
      "Linux",
      "MLOps",
    ],
  },
];

// My Projects - 15 Completed/Active Projects
const myProjects = [
  // 🌱 Beginner: Core Machine Learning & NLP
  {
    title: "Fake News Detector",
    description: "Build an NLP model using TF-IDF and a Passive Aggressive Classifier to analyze the text of news articles and flag misleading or fabricated stories.",
    tags: ["#NLP", "#TF-IDF", "#Python", "#Sklearn"],
    category: "Beginner",
  },
  {
    title: "AI-Powered Study Planner",
    description: "Create a tool that takes a student's exam dates and syllabus size, and uses basic ML to generate a dynamic daily study schedule that adjusts if the user falls behind.",
    tags: ["#ML", "#Python", "#Scheduling"],
    category: "Beginner",
  },
  {
    title: "Smart Budget Tracker",
    description: "Use time-series analysis to categorize banking transactions and predict a user's expenses for the next month based on their past spending habits.",
    tags: ["#Time-Series", "#Pandas", "#Finance"],
    category: "Beginner",
  },
  {
    title: "Spam & Phishing Classifier",
    description: "Use Naive Bayes or Transformer models to detect spam or phishing attempts in emails by analyzing headers, links, and message metadata.",
    tags: ["#NLP", "#Transformers", "#Security"],
    category: "Beginner",
  },
  {
    title: "Basic Emotion Detector",
    description: "Use OpenCV and pre-trained models (like DeepFace) to analyze a webcam feed and detect if a person is happy, sad, angry, or surprised.",
    tags: ["#OpenCV", "#DeepFace", "#Vision"],
    category: "Beginner",
  },
  // 🚀 Intermediate: Computer Vision & Real-World Utility
  {
    title: "Sign Language Translator",
    description: "Use a webcam to recognize American Sign Language (ASL) gestures in real-time and convert them into text or speech using Convolutional Neural Networks (CNNs).",
    tags: ["#CNN", "#ASL", "#TensorFlow"],
    category: "Intermediate",
  },
  {
    title: "Plant Disease Identification",
    description: "Help farmers by creating an AI that classifies plant diseases from photos of leaves. Use Transfer Learning (ResNet) and deploy it as a mobile app.",
    tags: ["#Transfer Learning", "#ResNet", "#Mobile"],
    category: "Intermediate",
  },
  {
    title: "Automated Resume Screener",
    description: "Develop an NLP pipeline using SpaCy to parse PDF resumes, extract key skills using Named Entity Recognition (NER), and score candidates against a job description.",
    tags: ["#SpaCy", "#NER", "#NLP"],
    category: "Intermediate",
  },
  {
    title: "Smart Attendance System",
    description: "Build a facial recognition system that takes a classroom snapshot and automatically marks attendance in a spreadsheet, identifying multiple faces at once.",
    tags: ["#Face Recognition", "#OpenCV", "#Automation"],
    category: "Intermediate",
  },
  {
    title: "Garbage Segregation AI",
    description: "Create a model that identifies waste from an image and classifies it as biodegradable, recyclable, or hazardous. Integrated with Raspberry Pi smart dustbin.",
    tags: ["#Image Classification", "#Raspberry Pi", "#IoT"],
    category: "Intermediate",
  },
  // 🔥 Advanced: Deep Learning, AI Agents & Generative AI
  {
    title: "RAG-Based PDF Tutor",
    description: "Build an app where users upload complex textbooks. Using Llama 3 and RAG, the AI acts as a tutor that answers questions based only on the uploaded text.",
    tags: ["#LLM", "#RAG", "#Llama 3"],
    category: "Advanced",
  },
  {
    title: "Deepfake Video Detector",
    description: "Train a complex deep learning model to analyze facial micro-expressions and video artifacts to determine if a video has been manipulated by AI.",
    tags: ["#Deep Learning", "#Forensics", "#Video AI"],
    category: "Advanced",
  },
  {
    title: "AI Career Counselor Agent",
    description: "Build an autonomous AI agent that takes a student's interests and skills, scrapes job market data, and generates a personalized career roadmap.",
    tags: ["#AI Agents", "#Web Scraping", "#LangChain"],
    category: "Advanced",
  },
  {
    title: "Autonomous Drone Navigation",
    description: "Use Reinforcement Learning and Computer Vision to train a simulated drone (using ROS or AirSim) to navigate through an obstacle course without human intervention.",
    tags: ["#Reinforcement Learning", "#ROS", "#Robotics"],
    category: "Advanced",
  },
  {
    title: "Virtual Try-On (GANs)",
    description: "Use Generative Adversarial Networks (GANs) to allow users to upload a photo of themselves and 'try on' different outfits dynamically for e-commerce.",
    tags: ["#GANs", "#GenAI", "#Fashion Tech"],
    category: "Advanced",
  },
];

// Future Projects - Tech Stacks I'm Exploring
const futureProjects = [
  {
    title: "Agent Frameworks",
    description: "Building autonomous systems using modern orchestration libraries.",
    tags: ["#LangChain", "#LangGraph", "#CrewAI", "#Pydantic AI"],
  },
  {
    title: "Agent Development",
    description: "Designing agentic workflows and voice-enabled assistants.",
    tags: ["#AutoGen", "#Agentic Workflow", "#AgentOps", "#Voice Agents"],
  },
  {
    title: "ML & Deep Learning",
    description: "Developing robust models for computer vision and NLP.",
    tags: ["#Machine Learning", "#Deep Learning", "#NLP", "#Computer Vision"],
  },
  {
    title: "AI Infrastructure",
    description: "Scalable deployment and vector search systems.",
    tags: ["#MLOps", "#RAG Systems", "#Vector DBs", "#Docker"],
  },
  {
    title: "Monitoring",
    description: "Observability and tracking for LLM applications.",
    tags: ["#Langfuse", "#Prometheus", "#OpenTelemetry"],
  },
  {
    title: "Integrations",
    description: "Connecting AI agents to external tools and APIs.",
    tags: ["#API Integration", "#Tool Calling", "#Automation"],
  },
];

export { technologies, experiences, myProjects, futureProjects };
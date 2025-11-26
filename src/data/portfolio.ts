import type { Project, Skill, Education, SocialLink } from '../types';

export const personalInfo = {
  name: 'Savindya Pramudith',
  title: 'Software Engineering Undergraduate',
  tagline: 'Frontend-focused Full-Stack Developer | Building scalable, user-friendly web applications',
  bio: `I am an undergraduate Software Engineering student at the National Institute of Business Management with a strong interest in frontend-focused full-stack development. I'm passionate about creating scalable, user-friendly, and high-performance web applications. Eager to enhance my technical skills and gain hands-on experience, I aim to contribute to impactful projects while continuously learning and growing in a dynamic, collaborative environment.`,
  email: 'savindyapramudith@gmail.com',
  phone: '+94 775318474',
  location: 'No 13/1 A Wewalwala Road, Bataganwila, Galle, Sri Lanka',
  profileImage: 'https://github.com/SavindyaPramudith.png',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/SavindyaPramudith',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/savindya-pramudith-1b63a9252',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:savindyapramudith@gmail.com',
    icon: 'mail',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ensenar – Machine Learning Platform',
    description: 'Machine learning platform predicting student academic performance using ensemble methods, advanced feature engineering and a 5-layer deep neural network with batch normalization and dropout.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow/Keras', 'scikit-learn'],
    githubUrl: 'https://github.com/SavindyaPramudith',
    year: '2025',
  },
  {
    id: 2,
    title: 'SmartPaw – Mobile Application',
    description: 'Created a mobile app enabling student communication, resource sharing, and quizzes using Firebase integration.',
    technologies: ['Kotlin', 'Firebase', 'Android Studio'],
    githubUrl: 'https://github.com/SavindyaPramudith',
    year: '2025',
  },
  {
    id: 3,
    title: 'Automated Fruit Salad Machine',
    description: 'An automated fruit salad making machine programmed and developed to minimize human labor in fruit salad preparation.',
    technologies: ['React', 'C++', 'Arduino'],
    githubUrl: 'https://github.com/SavindyaPramudith',
    year: '2025',
  },
  {
    id: 4,
    title: 'NIBMEvex – Event Management System',
    description: 'Built a comprehensive system for managing events, participants, and schedules with RESTful API architecture.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
    githubUrl: 'https://github.com/SavindyaPramudith',
    year: '2025',
  },
  {
    id: 5,
    title: 'QueuePro – Hospital Queue Management',
    description: 'Developed a web-based system for real-time queue tracking, appointment scheduling, and hospital efficiency improvement.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'HTML/CSS'],
    githubUrl: 'https://github.com/SavindyaPramudith',
    year: '2024',
  },
  {
    id: 6,
    title: 'Hospital Management System',
    description: 'A desktop application for handling comprehensive hospital functionality including patient records, appointment scheduling, and billing.',
    technologies: ['Java', 'JavaFX', 'MySQL'],
    githubUrl: 'https://github.com/SavindyaPramudith',
    year: '2024',
  },
  {
    id: 7,
    title: 'INVENTO – Inventory Management System',
    description: 'Desktop tool for managing inventory with GUI operations, real-time tracking, and MySQL backend integration.',
    technologies: ['Java', 'Swing', 'MySQL'],
    githubUrl: 'https://github.com/SavindyaPramudith',
    year: '2024',
  },
];

export const skills: Skill[] = [
  // Languages
  { name: 'Java', level: 90, category: 'languages' },
  { name: 'JavaScript', level: 85, category: 'languages' },
  { name: 'Python', level: 80, category: 'languages' },
  { name: 'PHP', level: 75, category: 'languages' },
  { name: 'Kotlin', level: 75, category: 'languages' },
  { name: 'C++', level: 70, category: 'languages' },
  { name: 'C#', level: 65, category: 'languages' },
  
  // Frontend
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Bootstrap', level: 85, category: 'frontend' },
  { name: 'Flutter', level: 70, category: 'frontend' },
  
  // Backend
  { name: 'Spring Boot', level: 80, category: 'backend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'MySQL', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'Firebase', level: 80, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },
  { name: 'IntelliJ IDEA', level: 85, category: 'tools' },
  { name: 'Android Studio', level: 80, category: 'tools' },
  { name: 'Power BI', level: 70, category: 'tools' },
  { name: 'Arduino', level: 75, category: 'tools' },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'BSc in Software Engineering (Reading)',
    institution: 'National Institute of Business Management (NIBM), Galle',
    period: '2024 - Present',
    description: 'Currently pursuing degree with focus on full-stack development and software architecture.',
  },
  {
    id: 2,
    degree: 'Higher Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM), Galle',
    period: '2024',
    description: 'Completed with distinction, focusing on advanced programming concepts.',
  },
  {
    id: 3,
    degree: 'Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM), Galle',
    period: '2022',
    description: 'Foundation in programming, databases, and software development.',
  },
  {
    id: 4,
    degree: 'G.C.E Advanced Levels (Physical Science Stream)',
    institution: 'Richmond College, Galle',
    period: '2018',
    description: 'Completed A/L examination in Physical Science stream.',
  },
  {
    id: 5,
    degree: 'G.C.E Ordinary Levels',
    institution: 'Richmond College, Galle',
    period: '2015',
    description: 'Successfully completed O/L examination.',
  },
];

export const certificates = [
  {
    id: 1,
    name: 'Frontend Developer (React) Certification',
    issuer: 'HackerRank',
    year: '2025',
  },
  {
    id: 2,
    name: 'SQL Intermediate Certification',
    issuer: 'HackerRank',
    year: '2024',
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

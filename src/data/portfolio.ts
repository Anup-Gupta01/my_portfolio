import placementProImg from '../assets/placement_pro.jpg'
import studyVerseImg from '../assets/study_verse.webp'
import courseGenieImg from '../assets/course_genie.jpg'

export const personalInfo = {
  name: 'Anup Gupta',
  role: 'Full Stack Developer',
  tagline: 'Full Stack Developer | Problem Solver | DSA Enthusiast',
  bio: 'I am a Computer Science student at MMMUT Gorakhpur, building modern web applications with React, Next.js, Node.js, and Express. I enjoy solving real-world problems, learning new technologies, and turning ideas into clean, scalable products. I also have a strong foundation in Data Structures and Algorithms and competitive programming.',
  location: 'Gorakhpur, Uttar Pradesh, India',
  email: 'anupg9643@gmail.com',
  phone: '+91 93051 27121',
  resumeUrl: 'https://drive.google.com/file/d/1mflZSIxWfy4B-R0sUHXpUSJuLgeheLIt/view?usp=sharing',
  avatarInitials: 'AG',
}

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Anup-Gupta01',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anupg02/',
    icon: 'linkedin',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/AnupG12/',
    icon: 'leetcode',
  },
  {
    label: 'Email',
    href: 'mailto:anupg9643@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/',
    icon: 'twitter',
  },
]

export const skills = {
  frontend: [
    'React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'JavaScript', 'HTML/CSS',
  ],
  backend: [
    'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Authentication',
  ],
  devops: [
    'Git', 'GitHub', 'Cloudinary', 'Vercel', 'Postman', 'Drizzle ORM',
  ],
  tools: [
    'C++', 'DSA', 'Competitive Programming', 'Razorpay', 'Gemini API', 'YouTube API',
  ],
}

export const heroAchievements = [
  { label: 'B.Tech CSE, MMMUT Gorakhpur', icon: '🎓' },
  { label: 'CGPA 8.59', icon: '📊' },
  { label: '450+ DSA Problems Solved', icon: '⚡' },
  { label: 'LeetCode 1810+ Rating', icon: '🏆' },
  { label: 'CodeChef 3-Star', icon: '⭐' },
  { label: 'GATE CS Qualified', icon: '✅' },
]

export const projects = [
  {
    id: 1,
    title: 'PlacementPro',
    subtitle: 'Campus Placement Portal',
    description: 'A campus placement portal with role-based access for students and TnP admins, real-time application tracking, branch-wise analytics, and AI-powered resume analysis using Gemini API.',
    tags: ['Next.js', 'Gemini API', 'MongoDB', 'Node.js', 'Cloudinary', 'REST APIs'],
    githubUrl: 'https://github.com/Anup-Gupta01/Campus_placement_mgmt_System',
    liveUrl: 'https://campus-placement-mgmt-system.vercel.app/',
    featured: true,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accentColor: 'cyan',
    image: placementProImg,
  },
  {
    id: 2,
    title: 'StudyVerse',
    subtitle: 'EdTech Platform',
    description: 'A multi-role learning platform for students, instructors, and admins with OTP-based authentication, role-specific dashboards, Razorpay payments, and improved API/database performance.',
    tags: ['React.js', 'Express.js', 'Node.js', 'Redux', 'Razorpay', 'Cloudinary'],
    githubUrl: 'https://github.com/Anup-Gupta01/EdTech-frontend',
    liveUrl: 'https://study-verse-frontend.vercel.app/',
    featured: true,
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'purple',
    image: studyVerseImg,
  },
  {
    id: 3,
    title: 'CourseGenie',
    subtitle: 'AI Course Generator',
    description: 'An AI-powered course generator that creates personalized learning paths using Gemini API, YouTube Data API, and PostgreSQL with Drizzle ORM.',
    tags: ['Next.js', 'Gemini API', 'YouTube API', 'PostgreSQL', 'Drizzle ORM'],
    githubUrl: 'https://github.com/Anup-Gupta01/ai-course-gen',
    liveUrl: 'https://ai-course-gen-ruddy.vercel.app/',
    featured: true,
    gradient: 'from-blue-500/20 to-purple-500/20',
    accentColor: 'blue',
    image: courseGenieImg,
  },
]

export const services = [
  {
    id: 1,
    title: 'Frontend Engineer',
    description: 'Building responsive, pixel-perfect UIs with React.js and Next.js. Clean component design, smooth animations, and mobile-first layouts that users love.',
    icon: 'layers',
    color: 'cyan',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'Redux'],
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'Designing and building robust REST APIs, authentication systems, and database integrations using Node.js and Express.js.',
    icon: 'server',
    color: 'blue',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    description: 'End-to-end MERN/full-stack applications — role-based dashboards, payment integration, AI features, and clean API + frontend integration.',
    icon: 'zap',
    color: 'purple',
    tags: ['MERN Stack', 'Next.js', 'Razorpay', 'Cloudinary', 'Gemini API'],
  },
  {
    id: 4,
    title: 'Problem Solver / DSA',
    description: 'Strong problem-solving mindset with 450+ DSA problems solved. LeetCode 1810+ rating, CodeChef 3-star, and GATE CS qualified.',
    icon: 'code2',
    color: 'green',
    tags: ['C++', 'DSA', 'LeetCode', 'Competitive Programming', 'GATE CS'],
  },
]

export const stats = [
  { label: 'CGPA', value: '8.59' },
  { label: 'DSA Problems', value: '450+' },
  { label: 'CodeChef Rating', value: '3-star' },
  { label: 'Projects Built', value: '3+' },
]

export const navItems = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]

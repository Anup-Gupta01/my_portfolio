import placementProImg from '../assets/placement_pro.jpg'
import studyVerseImg from '../assets/study_verse.webp'
import courseGenieImg from '../assets/course_genie.jpg'

export const personalInfo = {
  name: 'Anup Gupta',
  role: 'Full Stack Developer',
  tagline: 'Full Stack Developer · Problem Solver · DSA Enthusiast',
  bio: "I work across the full stack — React and Next.js on the front, Node and Express on the back, MongoDB and Postgres in between. I also spend a fair amount of time on competitive programming and DSA, which keeps my problem-solving sharp.",
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
    subtitle: 'Campus placement portal',
    description: 'A full-stack placement management system built for colleges. Students can track applications and get AI-powered resume feedback via Gemini API. T&P admins get branch-wise analytics and real-time application visibility. Built the entire system from scratch — auth, dashboards, file uploads via Cloudinary, and the API layer.',
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
    subtitle: 'EdTech platform',
    description: 'A multi-role learning platform with three separate dashboards for students, instructors, and admins. Instructors can publish courses, students can enroll and pay via Razorpay, and admins manage everything else. Improved API response time significantly during development by restructuring database queries and reducing redundant calls.',
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
    subtitle: 'AI course generator',
    description: 'Give it a topic, get a structured course. Uses Gemini API to generate a learning plan, then automatically pulls relevant YouTube videos via the YouTube Data API for each chapter. Built with Next.js and stores everything in PostgreSQL via Drizzle ORM. A straightforward idea that ended up being genuinely useful.',
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
    description: 'Building responsive, pixel-perfect UIs with React.js and Next.js.',
    icon: 'layers',
    color: 'cyan',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'Redux'],
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'REST APIs, authentication systems, and database integrations using Node.js and Express.js.',
    icon: 'server',
    color: 'blue',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    description: 'End-to-end MERN/full-stack applications.',
    icon: 'zap',
    color: 'purple',
    tags: ['MERN Stack', 'Next.js', 'Razorpay', 'Cloudinary', 'Gemini API'],
  },
  {
    id: 4,
    title: 'Problem Solver / DSA',
    description: '450+ DSA problems solved. LeetCode 1810+, CodeChef 3-star, GATE CS qualified.',
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
  { label: 'Work', href: 'work' },
  { label: 'About', href: 'about' },
  { label: 'Approach', href: 'approach' },
  { label: 'Contact', href: 'contact' },
]

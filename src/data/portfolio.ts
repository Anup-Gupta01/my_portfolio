export const personalInfo = {
  name: 'Anup Gupta',
  role: 'Full-Stack Developer',
  tagline: 'Building digital experiences that matter.',
  bio: "I craft performant, scalable web applications with a keen eye for design. From pixel-perfect UIs to robust backend systems, I bridge the gap between elegant aesthetics and technical excellence.",
  location: 'India',
  email: 'anupgupta@example.com',
  resumeUrl: '#',
  avatarInitials: 'AG',
}

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: 'linkedin',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/',
    icon: 'leetcode',
  },
  {
    label: 'Email',
    href: 'mailto:anupgupta@example.com',
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
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'
  ],
  backend: [
    'Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'
  ],
  devops: [
    'Docker', 'AWS', 'CI/CD', 'Linux', 'Git', 'Kubernetes'
  ],
  tools: [
    'Figma', 'VS Code', 'Postman', 'Jest', 'Webpack', 'Vite'
  ],
}

export const techStack = [
  { name: 'React', color: 'cyan' },
  { name: 'TypeScript', color: 'blue' },
  { name: 'Node.js', color: 'green' },
  { name: 'Python', color: 'yellow' },
  { name: 'Next.js', color: 'white' },
  { name: 'PostgreSQL', color: 'blue' },
  { name: 'Docker', color: 'cyan' },
  { name: 'AWS', color: 'orange' },
]

export const projects = [
  {
    id: 1,
    title: 'Transport Management System',
    description: 'A full-stack logistics platform with real-time tracking, route optimization, and automated dispatch management for fleet operators.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'Docker'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    featured: true,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accentColor: 'cyan',
  },
  {
    id: 2,
    title: 'AI-Powered Code Review Tool',
    description: 'Integrates with GitHub PRs to provide automated, context-aware code feedback using LLM APIs. Reduces review time by 60%.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'GitHub API', 'Redis'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    featured: true,
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'purple',
  },
  {
    id: 3,
    title: 'Real-Time Collaboration Board',
    description: 'A Figma-inspired collaborative whiteboard with live cursors, shape tools, comments, and version history using CRDTs.',
    tags: ['Next.js', 'WebSocket', 'Canvas API', 'MongoDB', 'TypeScript'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    featured: true,
    gradient: 'from-blue-500/20 to-purple-500/20',
    accentColor: 'blue',
  },
  {
    id: 4,
    title: 'E-Commerce Analytics Dashboard',
    description: 'Multi-tenant SaaS analytics dashboard with interactive charts, revenue forecasting, and customer segmentation insights.',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    featured: false,
    gradient: 'from-green-500/20 to-cyan-500/20',
    accentColor: 'green',
  },
  {
    id: 5,
    title: 'DevOps Pipeline Visualizer',
    description: 'Visualizes CI/CD pipeline stages, deployment history, and infrastructure state across multiple cloud providers.',
    tags: ['React', 'TypeScript', 'AWS CDK', 'GraphQL', 'Kubernetes'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    featured: false,
    gradient: 'from-orange-500/20 to-red-500/20',
    accentColor: 'orange',
  },
  {
    id: 6,
    title: 'Open Source CLI Toolkit',
    description: 'A collection of developer productivity tools: code scaffolding, git workflow automation, and environment management.',
    tags: ['Node.js', 'TypeScript', 'Shell', 'NPM Package'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    featured: false,
    gradient: 'from-pink-500/20 to-purple-500/20',
    accentColor: 'pink',
  },
]

export const services = [
  {
    id: 1,
    title: 'Frontend Engineer',
    description: 'Building fast, responsive, and visually stunning UIs with React and TypeScript. Pixel-perfect implementation with accessibility and performance baked in.',
    icon: 'layers',
    color: 'cyan',
    tags: ['React', 'TypeScript', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'Designing RESTful and GraphQL APIs, microservices, and robust server-side systems that scale reliably under real-world load.',
    icon: 'server',
    color: 'blue',
    tags: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    description: 'End-to-end product delivery — from database schema and API design to polished frontend and cloud deployment, all in one.',
    icon: 'zap',
    color: 'purple',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    id: 4,
    title: 'Software Developer',
    description: 'Writing clean, maintainable, and well-tested code across platforms. Strong focus on system design, code quality, and engineering best practices.',
    icon: 'code2',
    color: 'green',
    tags: ['TypeScript', 'Python', 'Git', 'Jest', 'CI/CD'],
  },
]

export const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Shipped', value: '25+' },
  { label: 'Open Source PRs', value: '120+' },
  { label: 'Coffee / Day', value: '∞' },
]

export const navItems = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]

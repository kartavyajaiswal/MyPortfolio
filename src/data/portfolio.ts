export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    glow: string;
  };
  gradient: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  highlights?: string[];
  github: string;
  live?: string;
  gradient?: string;
  source?: 'resume' | 'github' | 'Personal Project' | 'Academic Project' | string;
  role?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  client?: string;
  location?: string;
  period: string;
  bullets: string[];
}

export interface UpcomingProject {
  title: string;
  status: 'Building now' | 'In progress' | 'Next up' | 'Expanding';
  blurb: string;
  focus: string[];
}

export interface Achievement {
  title: string;
  desc: string;
  color: string;
}

export interface ResponsibilityItem {
  title: string;
  desc: string;
  period: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  badge?: string;
  rating: number;
  color: string;
  link: string;
}

export const contact = {
  name: 'Kartavya Jaiswal',
  role: 'B.Tech CSE Student & Developer',
  title: 'B.Tech CSE Student & Developer',
  email: 'kartavyajaiswal242@gmail.com',
  phone: '+91-9170336632',
  whatsapp: '+91-9170336632',
  github: 'https://github.com/codebykartavya',
  githubUser: 'codebykartavya',
  leetcode: 'https://leetcode.com/Kartavya_Jaiswal',
  linkedin: 'https://linkedin.com/in/kartavyajaiswal',
  twitter: '#',
  resume:
    'https://drive.google.com/file/d/1y_dn9YDJr_KLV7Wc6qdiCgD-i-O6OUUW/view?usp=drivesdk',
  tagline:
    'B.Tech CSE student passionate about Full Stack Development, DSA, and building impactful, practical software solutions.',
  availability:
    'Open to full-time Software Engineering and Full Stack Development opportunities',
};

export const about = {
  paragraphs: [
    'I am a Computer Science Engineering student pursuing my B.Tech at Galgotias University, Greater Noida (Expected June 2027). I am focused on Full Stack Development and strengthening my problem-solving skills through Data Structures and Algorithms. I enjoy building practical web applications, developing backend APIs, and working on projects that solve real-world problems. I am actively looking for opportunities to apply my technical skills, learn from experienced teams, and grow as a Software Engineer.',
  ],
};

export interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  description: string;
  name: string;
  year: string;
  score?: string;
}

export const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Galgotias University, Greater Noida',
    timeline: '2023 - 2027 (Expected)',
    description:
      'Focusing on web development, data analytics, and robust API development.',
    name: 'Galgotias University, Greater Noida',
    year: '2023 - 2027 (Expected)',
  },
  {
    degree: 'Intermediate / High School',
    institution: 'Saint Ann College',
    timeline: 'Graduated 2022',
    description:
      'Completed foundational studies with a strong emphasis on mathematics and computer science.',
    name: 'Saint Ann College',
    year: 'Graduated 2022',
  },
];

export const coursework = [
  'Data Structures',
  'Database Management',
  'Computer Networks',
  'Operating Systems',
  'Machine Learning',
  'OOPs',
];

export const experience: ExperienceItem[] = [];

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'CollabDoc - Real-Time Collaborative Editor',
    role: 'Full Stack Development',
    description:
      'Developed a real-time collaborative text editor featuring y-websocket synchronization, JWT authentication, and comprehensive revision history.',
    tech: ['React', 'Node.js', 'Yjs', 'MongoDB', 'Socket.io'],
    highlights: [
      'Real-time multi-user document synchronization powered by Yjs CRDT & WebSockets',
      'Secure user authentication and authorization using JWT with MongoDB persistence',
      'Comprehensive revision history tracking, document locking, and multi-user cursor presence',
    ],
    github: '#',
    live: '#',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    source: 'Personal Project',
  },
  {
    title: 'Explainable AI for EEG Seizure Detection',
    role: 'ML & Academic Research',
    description:
      'Prepared an academic literature review and project report focusing on explainable artificial intelligence techniques for epileptic seizure detection using EEG signals.',
    tech: ['Machine Learning', 'Python', 'Explainable AI'],
    highlights: [
      'Comprehensive academic literature review on biomedical EEG signal interpretation',
      'Exploration of explainable artificial intelligence (XAI) models for transparent diagnostics',
      'Comparative evaluation of neural architectures for automated seizure onset detection',
    ],
    github: '#',
    live: '#',
    gradient: 'from-cyan-400 via-sky-500 to-indigo-500',
    source: 'Academic Project',
  },
  {
    title: 'Transport Management System',
    role: 'Web Development',
    description:
      'Built a web-based transport management application to streamline operations and logistics tracking.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Interactive dashboard for fleet dispatching, vehicle scheduling, and status tracking',
      'Intuitive user interface streamlining transport logistics and daily operations monitoring',
    ],
    github: '#',
    live: '#',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    source: 'Personal Project',
  },
];

export const projects = featuredProjects;

export const skills: Record<string, string[]> = {
  'Web Development': [
    'React',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'HTML5 / CSS3',
  ],
  'Backend & APIs': [
    'Node.js',
    'Express.js',
    'API Development',
    'REST APIs',
    'FastAPI',
  ],
  'Data Analytics': [
    'Python',
    'SQL',
    'Data Analysis',
    'Data Structures & Algorithms',
    'Pandas',
  ],
  'Databases & Tools': [
    'MongoDB',
    'SQL',
    'Git & GitHub',
    'VS Code',
    'Vercel',
  ],
};

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'Kartavya_Jaiswal',
    rating: 1552,
    color: 'from-yellow-400 to-orange-500',
    link: 'https://leetcode.com/Kartavya_Jaiswal',
  },
  {
    platform: 'CodeChef',
    username: 'kartavya_jaiswal',
    badge: '1★',
    rating: 1234,
    color: 'from-purple-400 to-pink-500',
    link: 'https://www.codechef.com/users/kartavyajas',
  },
];

export const achievements: Achievement[] = [];

export const responsibilities: ResponsibilityItem[] = [];

export const upcomingProjects: UpcomingProject[] = [];

export const githubPreferredOrder = ['CollabDoc'];

export const githubHiddenRepos = ['MyPortfolio'];

export const themes: Theme[] = [
  {
    name: 'Studio',
    colors: {
      primary: 'from-neutral-950 via-neutral-900 to-black',
      secondary: 'from-white via-neutral-200 to-neutral-400',
      accent: 'from-sky-300 via-cyan-400 to-teal-300',
      background: 'from-[#07090f] via-[#0b1020] to-[#05070d]',
      text: 'text-sky-200',
      glow: 'shadow-sky-500/20',
    },
    gradient: 'from-[#0b1224] via-[#111827]/50 to-transparent',
  },
];

export const navLinks = [
  { href: '#featured', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#coding', label: 'Profiles' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

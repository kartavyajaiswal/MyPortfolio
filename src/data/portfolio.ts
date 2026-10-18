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
  highlights: string[];
  github: string;
  live?: string;
  gradient: string;
  source: 'resume' | 'github' | 'Personal Project' | string;
  role: string;
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
  github: 'https://github.com/kartavyajaiswal',
  githubUser: 'kartavyajaiswal',
  linkedin: 'https://www.linkedin.com/in/kartavyajaiswal',
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

export const education = [
  {
    name: 'Galgotias University',
    degree: 'B.Tech. Computer Science and Engineering',
    year: '2023 – 2027',
    score: 'CPI: 6.75',
  },
  {
    name: 'Saint Ann College',
    degree: 'ICSE — Class XII',
    year: '2022',
    score: '76.4%',
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
    title: 'CollabDoc',
    role: 'Real-Time Collaborative Document Editor',
    description:
      'A full-stack real-time collaborative document editor that enables multiple users to write and edit documents together with live synchronization, user presence, and document history.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TipTap', 'Yjs', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'JWT'],
    highlights: [
      'Real-time multi-user editing powered by Yjs CRDT with live synchronization and colored user cursors',
      'Implemented user authentication and document management using JWT, bcryptjs, and MongoDB',
      'Built document persistence, revision history, document locking, tags, pinning, and offline support',
      'Added speech-to-text, emoji reactions, synchronized Pomodoro timer, QR sharing, and PDF/Markdown/Text export',
      'Deployed the frontend on Vercel and backend on Render for a complete full-stack application',
    ],
    github: 'https://github.com/kartavyajaiswal/CollabDoc',
    live: 'https://collab-doc-psi.vercel.app',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    source: 'Personal Project',
  },
];

export const skills: Record<string, string[]> = {
  Languages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++'],
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'FastAPI'],
  Databases: ['MongoDB', 'SQL'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Vercel'],
};

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'Kartavya_Jaiswal',
    rating: 1552,
    color: 'from-yellow-400 to-orange-500',
    link: 'https://leetcode.com/u/Kartavya_Jaiswal/',
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

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
  source: 'resume' | 'github';
  role: string;
}

export const contact = {
  name: 'Kartavya Jaisal',
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

// export const experience = [
//   {
//     role: 'Software Engineer',
//     company: 'Wavexcel Technologies Pvt. Ltd.',
//     client: 'Siemens Energy Ltd.',
//     location: 'Gurugram, Haryana',
//     period: 'January 2026 – July 2026',
//     bullets: [
//       'Designed a few-shot Azure OpenAI extraction pipeline (Python/FastAPI) that inferred a 95-field schema from 15–20 labeled samples, replacing a brittle hardcoded field catalog.',
//       'Shipped async FastAPI job APIs with SSE progress streaming and Excel/HTML/PDF export for a production .NET MAUI Windows client, keeping long-running work off the request path.',
//       'Built an iterative OCR + AI-vision correction loop (PaddleOCR, Hermes) that reconstructed structured HTML layouts from unstructured PDFs.',
//       'Implemented a formula-driven computation engine mapping 31 input drivers to 179 dependent outputs; validated with a 17-case suite at 100% pass rate.',
//       'Built a multi-agent LOS GenAI pipeline (planning agent → doc/extract agent → formula backbone): the planner acts as a readiness gate and writes a project plan of record; the doc agent extracts only bound drivers from staged sources, then calculates and fills HTML/Excel/PDF datasheets.',
//       'Shipped a confidence-gated review UI that surfaced low-certainty extractions first, cutting manual scan time by letting reviewers jump straight to uncertain fields.',
//       'Built versioned client configuration (schema + computation profiles) so new Siemens project templates could be onboarded without redeploying the Windows app.',
//       'Added end-to-end job observability (queued → OCR → extract → compute → export) with retryable stages and actionable failure states in the MAUI client.',
//     ],
//   },
// ];

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
    live: 'collab-doc-psi.vercel.app',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    source: 'Personal Project',
  },

];

export const skills: Record<string, string[]> = {
  Languages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++'],
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'FastAPI'],
  Databases: ['MongoDB', 'SQL'],
  // 'AI / ML': ['PyTorch', 'TensorFlow', 'Azure OpenAI'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Vercel'],
};

export const codingProfiles = [
  {
    platform: 'LeetCode',
    username: 'Kartavya_Jaiswal',
    // badge: 'Knight',
    rating: 1552,
    color: 'from-yellow-400 to-orange-500',
    link: 'https://leetcode.com/u/Kartavya_Jaiswal/',
  },
  // {
  //   platform: 'Codeforces',
  //   username: 'SwetabhSalampuria',
  //   badge: 'Specialist',
  //   rating: 1418,
  //   color: 'from-blue-400 to-cyan-500',
  //   link: 'https://codeforces.com/profile/SwetabhSalampuria',
  // },
  {
    platform: 'CodeChef',
    username: 'kartavya_jaiswal',
    badge: '1★',
    rating: 1234,
    color: 'from-purple-400 to-pink-500',
    link: 'https://www.codechef.com/users/kartavyajas',
  },
];





export const githubPreferredOrder = [
  'SpeakEasy',
  'MealDeal',
  'Attest',
  'BitHaven',
  'Audio-CNN',
  'HirePath',
  'Fuel-Machine',
  'MedLog',
  'Chopus',
  '6-DOF-Robotic-Arm',
  'HealthGuru',
  'PropertyHub',
  'IdeaFlow',
  'WeConnect',
];

export const githubHiddenRepos = ['MyPortfolio', 'deepeval'];

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

// export interface UpcomingProject {
//   title: string;
//   status: 'Building now' | 'In progress' | 'Next up' | 'Expanding';
//   blurb: string;
//   focus: string[];
// }

/** Active and upcoming builds — not all public yet. */
// export const upcomingProjects: UpcomingProject[] = [
//   {
//     title: 'MatchCore',
//     status: 'Building now',
//     blurb:
//       'A low-latency limit order book matching engine in modern C++. Price-time priority matching, multi-client binary TCP ingestion, and a measured path toward durability and market data — systems work with numbers attached, not just slides.',
//     focus: ['C++', 'Networking', 'Order books', 'Systems'],
//   },
//   {
//     title: 'Chopus',
//     status: 'Building now',
//     blurb:
//       'An agent-style developer tool with streaming replies and tool calling. Bun monorepo spanning a CLI and server — still moving fast, aimed at feeling useful in a real terminal workflow rather than a demo chat box.',
//     focus: ['TypeScript', 'Agents', 'Tool calling', 'Bun'],
//   },
//   {
//     title: 'MailSender',
//     status: 'In progress',
//     blurb:
//       'A practical outreach workflow for job applications — templated referral emails, resume attach, and delivery tracking across desktop and a companion Android app. Less flashy than most portfolio pieces, more useful day to day.',
//     focus: ['APIs', 'Email', 'Automation', 'Capacitor'],
//   },
//   {
//     title: 'YouKnowBall',
//     status: 'Expanding',
//     blurb:
//       'Football match winner and scoreline prediction, built end-to-end for the FIFA World Cup with Elo, form, head-to-head, and Dixon–Coles / ML models. Next: extend the same pipeline to club football — Premier League, La Liga, and other top leagues.',
//     focus: ['Python', 'XGBoost', 'FastAPI', 'Sports data'],
//   },
// ];

export const navLinks = [
  { href: '#featured', label: 'Work' },
  { href: '#building', label: 'Now' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

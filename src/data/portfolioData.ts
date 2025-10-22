export interface PersonalInfo {
  name: string;
  avatar: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resume: string;
  roles: string[];
  tagline: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
  level: number;
  category: string;
}

export interface Experience {
  id: string;
  type: 'work' | 'education';
  title: string;
  company: string;
  period: string;
  logo: string;
  description: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Nama Kamu",
  avatar: "/avatar.jpg",
  bio: "Saya adalah seorang Full Stack Developer dengan passion dalam menciptakan aplikasi web yang user-friendly dan performant. Dengan pengalaman dalam berbagai teknologi modern, saya senang menghadapi tantangan baru dan terus belajar.",
  email: "your.email@example.com",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia",
  resume: "/resume.pdf",
  roles: ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"],
  tagline: "Bersemangat dalam menciptakan aplikasi web yang indah dan fungsional dengan teknologi modern dan praktik terbaik."
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "Mail"
  }
];

export const stats: Stat[] = [
  { label: "Proyek Diselesaikan", value: 15 },
  { label: "Klien Bahagia", value: 8 },
  { label: "Tahun Pengalaman", value: 3 },
  { label: "Teknologi", value: 12 }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Platform e-commerce full-stack dengan fitur keranjang, payment gateway, dan dashboard admin",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/project-1.jpg",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan drag & drop, real-time collaboration, dan notifikasi",
    category: "Frontend",
    technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
    image: "/project-2.jpg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Dashboard cuaca interaktif dengan visualisasi data dan forecast 7 hari",
    category: "Frontend",
    technologies: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
    image: "/project-3.jpg",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "VS Code", "Postman"]
  }
];

export const skillItems: SkillItem[] = [
  { name: "React", icon: "Atom", level: 90, category: "Frontend" },
  { name: "TypeScript", icon: "Type", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", icon: "Palette", level: 88, category: "Frontend" },
  { name: "Next.js", icon: "VercelLogo", level: 80, category: "Frontend" },
  { name: "Vue.js", icon: "Vue", level: 75, category: "Frontend" },
  { name: "Node.js", icon: "Server", level: 85, category: "Backend" },
  { name: "Express", icon: "Code", level: 82, category: "Backend" },
  { name: "PostgreSQL", icon: "Database", level: 78, category: "Backend" },
  { name: "MongoDB", icon: "Database", level: 80, category: "Backend" },
  { name: "REST API", icon: "Globe", level: 88, category: "Backend" },
  { name: "Git", icon: "GitBranch", level: 90, category: "Tools" },
  { name: "Docker", icon: "Container", level: 75, category: "Tools" },
  { name: "Figma", icon: "PenTool", level: 85, category: "Tools" },
  { name: "VS Code", icon: "Code2", level: 95, category: "Tools" },
  { name: "Postman", icon: "Send", level: 80, category: "Tools" }
];

export const experiences: Experience[] = [
  {
    id: "1",
    type: "work",
    title: "Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    logo: "/company-logo-1.jpg",
    description: [
      "Mengembangkan dan memelihara aplikasi web menggunakan React dan Node.js",
      "Mengimplementasikan desain responsif dan mengoptimalkan performa",
      "Berkolaborasi dengan tim lintas fungsi untuk menghadirkan produk berkualitas tinggi"
    ]
  },
  {
    id: "2",
    type: "work",
    title: "Frontend Developer",
    company: "Startup XYZ",
    period: "2021 - 2022",
    logo: "/company-logo-2.jpg",
    description: [
      "Membangun antarmuka pengguna dengan React dan TypeScript",
      "Mengintegrasikan dengan REST API dan layanan pihak ketiga",
      "Berpartisipasi dalam proses pengembangan agile"
    ]
  },
  {
    id: "3",
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University of Technology",
    period: "2017 - 2021",
    logo: "/university-logo.jpg",
    description: [
      "Berspesialisasi dalam rekayasa perangkat lunak dan pengembangan web",
      "Lulus dengan pujian (IPK: 3.8/4.0)",
      "Berpartisipasi dalam berbagai kompetisi pemrograman"
    ]
  }
];
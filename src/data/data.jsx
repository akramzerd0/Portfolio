export const DATA = {
  name: "Akram",
  fullName: "Akram Zerdaoui",
  domain: "akram.dev",
  photo: null, // set to "/photo.jpg" after adding your image to /public

 
  
  shortBio: "I'm Akram, software engineer and data scientist. This is my corner of the internet. 💾",
  heroBio: `I'm a software engineer and data scientist with a Bachelor's in Computer Science and a Data Science diploma from a college in Canada. I love building things — from web apps to machine learning models — and I'm always looking for the next problem worth solving.`,
  heroNote: "Everything on this site is built by my beloved fiancee, with love. 🎮",

  projects: [
    {
      year: "2024",
      title: "Project Alpha",
      description: "A brief description of what this project does and the problem it solves.",
      tags: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      year: "2024",
      title: "Data Pipeline Tool",
      description: "Automated data pipeline for processing and visualizing large datasets.",
      tags: ["Python", "Pandas", "Matplotlib"],
      github: "#",
      demo: null,
    },
    {
      year: "2023",
      title: "ML Classification Model",
      description: "Machine learning achieving 94% accuracy on a real-world classification task.",
      tags: ["Python", "scikit-learn", "Jupyter"],
      github: "#",
      demo: null,
    },
  ],

  games: [
    { emoji: "🗡️", title: "Favorite Game",     genre: "Counter Strike", platform: "PC", note: "The world-building is unmatched. Hundreds of hours gone." },
    { emoji: "🎯", title: "Competitive Pick",  genre: "FPS",              platform: "PC", note: "Where most of my late nights disappear." },
    { emoji: "💎", title: "Indie Gem",         genre: "Puzzle / Indie",   platform: "PC", note: "A hidden gem with incredible storytelling." },
    { emoji: "🕹️", title: "Currently Playing", genre: "Strategy",         platform: "PC", note: "Can't stop, won't stop." },
  ],

  cv: {
    education: [
      {
        degree: "B.Sc. Computer Science",
        institution: "Badji Mokhtar University",
        location: "Annaba, Algeria",
        year: "2020 – 2024",
        courses: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Database Systems",
          "Software Engineering",
          "Computer Networks",
          "Object-Oriented Programming",
        ],
      },
      {
        degree: "Diploma in Data Science",
        institution: "College Name",
        location: "Ottawa, Canada",
        year: "2023 – 2024",
        courses: [
          "Machine Learning",
          "Statistical Analysis",
          "Data Visualization",
          "Big Data & Cloud Computing",
          "Deep Learning Fundamentals",
          "Python for Data Science",
        ],
      },
    ],
    experience: [
      {
        role: "Your Job Title",
        company: "Company Name",
        period: "Month Year – Present",
        bullets: [
          "Describe a key responsibility or achievement here.",
          "Another thing you are proud of from this role.",
          "Tech stack or tools you worked with.",
        ],
      },
      {
        role: "Intern / Previous Role",
        company: "Previous Company",
        period: "Month Year – Month Year",
        bullets: [
          "What you worked on and learned.",
          "A project or result you are proud of.",
        ],
      },
      {
        role: "Another Role / Freelance",
        company: "Company or Client",
        period: "Month Year – Month Year",
        bullets: [
          "What you worked on and learned.",
          "A project or result you are proud of.",
        ],
      },
    ],
    skills: {
      Languages:   ["Python", "JavaScript", "Java", "SQL", "C++"],
      Frameworks:  ["React", "Node.js", "Django", "Flask", "Git"],
      "Data & ML": ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "Tableau"],
      Other:       ["REST APIs", "Linux", "Docker", "Agile"],
    },
  },

  about: {
    contact: {
      intro: "Send me an email to say hi, or connect via the socials.",
      email: "akram@email.com",
      links: [
        { label: "GitHub",      href: "#" },
        { label: "LinkedIn",    href: "#" },
        { label: "Discord", href: "#" },
      ],
    },
    now: {
      updated: "March 2026",
      items: [
        "Looking for my first full-time role in software or data engineering",
        "Building this website",
        "Playing [Your Favorite Game Right Now]",
        "Learning [Something You're Currently Studying]",
        "Recently graduated — celebrating! 🎓",
      ],
    },
    tools: {
      software: {
        intro: "My daily dev setup.",
        items: [
          { label: "Coding: Visual Studio Code", sub: [{ label: "Theme: One Dark Pro" }] },
          { label: "Terminal: iTerm2 / Zsh" },
          { label: "Notes: Obsidian" },
          { label: "Design: Figma" },
        ],
      },
      hardware: [
        { label: "Laptop: Your Laptop Model" },
        {
          label: "Gaming PC",
          sub: [
            { label: "CPU: Your CPU"   },
            { label: "GPU: Your GPU"   },
            { label: "RAM: Your RAM"   },
            { label: "Storage: Your SSD" },
          ],
        },
        { label: "Monitor: Your Monitor"      },
        { label: "Keyboard: Your Keyboard"    },
        { label: "Headphones: Your Headphones"},
      ],
    },
  },

  languages: [
    { language: 'Arabic',  level: 'Native'  },
    { language: 'French',  level: 'Fluent'  },
    { language: 'English', level: 'Fluent'  },
  ],

  hobbies: [
    { emoji: '🥾', label: 'Hiking',            note: 'Exploring trails around Montreal whenever the weather allows.' },
    { emoji: '🎮', label: 'Gaming',             note: 'Big into story-driven and competitive games.' },
    { emoji: '💬', label: 'Good Conversations', note: 'Nothing beats a long talk with someone you love.' },
    { emoji: '💻', label: 'Building Things',    note: 'Side projects, tinkering, and learning new tech for fun.' },
  ],

  openTo: {
    roles:      ['Software Engineer', 'Data Scientist', 'Backend Developer', 'ML Engineer'],
    types:      ['Full-time', 'Internship', 'Contract'],
    locations:  ['Montreal', 'Remote', 'Open to relocation in Canada'],
  },

  social: [
    { label: "Email",       href: "mailto:akram@email.com" },
    { label: "GitHub",      href: "https://github.com/akramzerd0" },
    { label: "LinkedIn",    href: "https://www.linkedin.com/in/akram-zerdaoui-bb651a259/" },
    { label: "Discord", href: "#" },
  ],
};

export const ACCENT_COLORS = [
  { name: "purple", light: "#7c3aed", dark: "#a78bfa" },
  { name: "red",    light: "#dc2626", dark: "#f87171" },
  { name: "gold",   light: "#b45309", dark: "#fbbf24" },
  { name: "green",  light: "#16a34a", dark: "#4ade80" },
  { name: "blue",   light: "#1d4ed8", dark: "#60a5fa" },
];

export const NAV_ITEMS = [
  { id: "projects", label: "Projects"    },
  { id: "play",     label: "Play"        },
  { id: "cv",       label: "Resume" },
  { id: "about",    label: "About Me"    },
];
export const DATA = {
  name: "Akram",
  fullName: "Akram Zerdaoui",
  domain: "akram.dev",
  photo: "image.png", 

 
  
  shortBio: "I'm Akram, software engineer and data scientist. This is my corner of the internet. 💾",
  heroBio: `I’m a software engineer and data scientist with a Bachelor’s degree in Computer Science, a Data Science diploma from La Cité College in Canada, and one year of Master’s-level studies in Big Data Management and Analysis. I enjoy building practical solutions—from mobile applications to machine learning models—and I’m always looking for the next meaningful problem to solve.`,


  projects: [
    {
      year: "2026",
      title: "Glaucoma Detection Using Deep Learning",
      description: "This project uses deep learning to detect signs of glaucoma from retinal fundus images. A fine-tuned VGG16 model classifies images as healthy or glaucoma-related, while Grad-CAM visualizations help explain which areas of the eye influenced the prediction. The goal is to support faster and more accessible glaucoma screening.",
      tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "scikit-learn", "Matplotlib", "Grad-CAM", "Gradio", "Hugging Face Spaces", "Jupyter Notebook"],
      github: "https://github.com/akramzerd0/glaucoma-detection",
      demo: "https://huggingface.co/spaces/zakram23/glaucomaaa?logs=container",
    },
    {
      year: "2026",
      title: "Canadian Flight Price Prediction",
      description: "A machine learning project that predicts flight ticket prices across major Canadian cities using factors like airline, route, travel date, departure time, flight duration, and number of stops. The model helps users estimate ticket costs and better understand what influences airfare prices.",
      tags: ["Python", "scikit-learn", "Pandas", "NumPy", "Hugging Face Spaces", "Jupyter"],
      github: "#",
      demo: "https://huggingface.co/spaces/zakram23/CanadianFlightFarePredictor",
    },
    {
      year: "2023",
      title: "DoS Attack Detection Using Machine Learning",
      description: "This project uses machine learning to detect Denial of Service (DoS) attacks, including SYN, UDP, and ICMP flood attacks,by analyzing network traffic patterns. The goal is to identify malicious activity automatically and help protect systems from service disruption, slowdowns, and unauthorized traffic overload.",
      tags: ["Cicflowmeter", "Python", "Wireshark"],
      github: "https://github.com/akramzerd0/Machine-Learning-Model-for-Detecting-DoS-Attacks-SYN-UDP-ICMP-",
      demo: null,
    },
    {
      year: "2022",
      title: "Breaking and Fixing the Needham–Schroeder Protocol",
      description: "This project analyzes the Needham–Schroeder public-key authentication protocol by demonstrating how it can be exploited through a man-in-the-middle attack. It then implements Lowe’s fix to correct the vulnerability and improve mutual authentication between communicating parties.",
      tags: ["Cryptography", "Authentication Protocols", "Python", "Scyther tool"],
      github: "https://github.com/akramzerd0/Needham-Schroeder-Protocol-Analysis",
      demo: null,
    },
    {
      year: "2024",
      title: "World Time API Integration App",
      description: "This application was created to make it easier to check the current time in Algeria while living in Canada. Using the World Time API, it retrieves accurate time-zone data and classifies the time as morning, evening, or night, displaying a matching image. The project was later expanded to support several countries, with plans to add worldwide coverage.",
      tags: ["Flutter", "World Time API", "API Integration", "State management", "Dart"],
      github: null,
      demo: "https://www.linkedin.com/posts/akram-zerdaoui-bb651a259_api-integration-project-ever-since-my-activity-7166083480559276033-l0nT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-dZzoBdPxLnU1C_78GDVPWgy9oI273o8o",
    },
    {
      year: "2024",
      title: "Video Game Console Shop App",
      description: "A mobile shopping application where users can create an account, sign in, browse video game consoles, view product details, find nearby stores, and request delivery. This project helped me understand Flutter state management using Provider, Consumer, and Provider.of to access and update application data efficiently across different screens.",
      tags: ["Flutter", "Dart", "Provider"],
      github: null,
      demo: null,
    },
    {
      year: "2023",
      title: "Shipping and Towing Service Apps",
      description: "A pair of Flutter applications developed for a real-world client: one for drivers providing shipping and towing services, and another for customers requesting them. The project included Firebase authentication, real-time backend services, Google Maps integration, location-based matching, and service-request management. Although the project was not completed due to client payment issues, it provided valuable experience in teamwork, project management, and full-stack mobile development.",
      tags: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      github: null,
      demo: null,
    },
  ], 
  
  games: [
    { emoji: "🗡️", title: "Favorite Game",     genre: "Counter Strike 2", platform: "PC", note: "grinding too hard. Thousands of hours gone." },
    { emoji: "🎯", title: "Valorant",  genre: "FPS",              platform: "PC", note: "Where most of my late nights disappear." },
    { emoji: "💎", title: "Chess",         genre: "Puzzle",   platform: "PC", note: " kind of helps me getting smarter" },
    { emoji: "🕹️", title: "Currently Playing", genre: "Spiderman 2",         platform: "PC", note: "Can't stop, won't stop." },
  ],
  
  cv: {
    education: [
      {
        degree: "DEC in Applied Data Science",
        institution: "College LaCite",
        location: "Ottawa, Canada",
        year: "January 2025 – April 2026",
        courses: [
          "Machine Learning",
          "Statistical Analysis",
          "Data Visualization",
          "Big Data & Cloud Computing",
          "Deep Learning Fundamentals",
          "Python for Data Science",
        ],
      },
      {
        degree: "Masters in Big Data Management and Analytics",
        institution: "Badji Mokhtar University",
        location: "Annaba, Algeria",
        year: "2022 – 2023",
        courses: [
            "Big Data Management and Analytics",
            "Data Warehousing",
            "Machine Learning",
            "Data Mining",
            "Business Intelligence",
            "Data Visualization",
            "Cloud Computing",
            "Database Management",
            "Statistics for Data Analysis",
            "Python for Data Science",
        ],
      },
      {
        degree: "B.Sc. Computer Science",
        institution: "Badji Mokhtar University",
        location: "Annaba, Algeria",
        year: "2019 – 2022",
        courses: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Database Systems",
          "Software Engineering",
          "Computer Networks",
          "Object-Oriented Programming",
        ],
      },
    ],
    experience: [
      {
        role: "IT Support Assistant at Best Buy",
        company: "Best Buy",
        period: "February 2025 – September 2025",
        bullets: [
          "Provided basic technical support by diagnosing computer, software, printer, and internet connectivity issues.",
          "Helped customers resolve technical problems efficiently while explaining solutions in clear, simple language.",
          "Worked with Windows, Microsoft Office, printers, routers, point-of-sale systems, and basic hardware troubleshooting",
        ],
      },
      {
        role: "Flowers delivery Agent",
        company: "JMD livraison",
        period: "September 2024 – Present",
        bullets: [
          "Plan and complete 10–15 daily deliveries while managing time, traffic, route changes, and strict delivery windows.",
          "Stay organized and calm under pressure during busy periods, ensuring flowers arrive safely and on time.",
          "Communicate professionally with customers and florists to confirm addresses, resolve delivery issues, and provide status updates.",
          "Use navigation and route-planning tools to reduce delays and improve delivery efficiency.",
          "Handle fragile floral arrangements carefully while maintaining strong attention to detail and customer satisfaction."
        ],
      },
      {
        role: "Security Agent",
        company: "Devimco",
        period: "July 2024 – October 2025",
        bullets: [
          "Monitored building entrances, common areas, and surveillance systems to help maintain a safe and secure environment.",
          "Provided professional reception and customer service by assisting residents, visitors, contractors, and delivery personnel.",
          "Verified access permissions, registered visitors, and responded to security concerns according to established procedures.",
          "Handled incidents calmly under pressure, documented important events, and communicated issues to supervisors or emergency services when necessary.",
          "Completed regular patrols and inspections to identify safety hazards, unauthorized access, or suspicious activity.",
          "Managed multiple responsibilities during busy shifts while maintaining attention to detail, professionalism, and confidentiality."
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
      email: "zerdaouiakram3@gmail.com",
      links: [
        { label: "GitHub",      href: "https://github.com/akramzerd0" },
        { label: "LinkedIn",    href: "https://www.linkedin.com/in/akram-zerdaoui-bb651a259/" },
        { label: "Discord", href: "https://discord.com/channels/@me" },
      ],
    },
    now: {
      updated: "July 2026",
      items: [
        "Looking for my first full-time role in software or data engineering",
        "Building this website",
        "Playing Counter Strike 2",
        "Learning content creation",
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
        { label: "Laptop: HP EliteBook 840 G8" },
        {
          label: "Gaming PC",
          sub: [
            { label: "CPU: 12th gen intel(r) core(tm) i5-12400f (2.50 ghz)"   },
            { label: "GPU: NVIDIA GeForce RTX 3070 (8 GB)"   },
            { label: "RAM: TEAMGROUP T-Force Delta RGB DDR4 16GB (2x8GB) "   },
            { label: "Storage: SAMSUNG 990 PRO SSD 2 To PCIe Gen4 NVMe" },
          ],
        },
        { label: "Monitor: Samsung Odyssey LS32CG550ENXZA 180HZ"      },
        { label: "Keyboard: MageGee SKY81 75% Mechanical Gaming Keyboard"    },
        { label: "Headphones: Logitech G432 Wired Gaming Headset"},
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
    { label: "Email",       href: "mailto:zerdaouiakram3@gmail.com" },
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
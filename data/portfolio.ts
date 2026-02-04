export const portfolioData = {
  personal: {
    name: "Sudhansh",
    title: "Full Stack Developer",
    tagline: "Building secure, fast, and modern web applications",
      email: "sudhansh787@gmail.com",
      phone: "+91 7496097769",
    location: "Available Remotely",
    github: "https://github.com/sudhansh702",
    linkedin: "https://linkedin.com/in/sudhansh-soni-ba3a62256",
    // twitter: "https://twitter.com/yourusername",
    availability: "Open to opportunities",
    currentlyAvailable: true, // Set to false to hide availability badge in Contact section
  },
  
  about: {
    description: "I'm a passionate software developer with expertise in building scalable web applications. I specialize in creating secure, performant solutions using modern technologies and best practices.",
    highlights: [
      "2+ years of experience in full-stack development",
      "Expert in React,Node.js,Spring Boot, MongoDB, and PostgreSQL ecosystems",
      "docker, AWS, Git, REST API, GraphQL, Tailwind CSS, Framer Motion, GSAP",
      "Strong focus on performance and security",
      "Passionate about clean code and user experience",
    ],
  },

  skills: {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "REST API", level: 93 },
      { name: "PostgreSQL", level: 82 },
    ],
    mobile: [
      { name: "React Native", level: 78 },
      { name: "Flutter", level: 70 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Sneaker Studio",
      description: "Interactive 3D sneaker customization platform with real-time visualization, multiple color options, and texture mapping.",
      tech: ["Three.js", "React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/shoe_custom.png",
      link: "https://sneaker-studio-nine.vercel.app/customiser",
      github: "#",
    },
    {
      id: 2,
      title: "TeamConnect",
      description: "Smart team collaboration platform with real-time messaging, task management, and seamless team coordination.",
      tech: ["React", "Node.js", "TypeScript", "Tailwind CSS", "REST API"],
      image: "/images/teamconnect.png",
      link: "https://team-collaboration-five.vercel.app/login",
      github: "#",
    }
  ],

  experience: [
    {
      id: 1,
      company: "Kubits Solutions",
      position: "Full Stack Developer",
      period: "2025 - Present",
      description: "Led development of microservices architecture using Spring Boot backend and mentored junior developers.",
      achievements: [
        "Reduced API response time by 60%",
        "Built and optimized scalable backend services with Spring Boot",
        "Implemented automated testing improving code coverage to 85%",
        "Led migration to cloud infrastructure",
      ],
    },
    {
      id: 2,
      company: "TechsPie",
      position: "Frontend Developer Intern",
      period: "2024 - 2025",
      description: "Worked on various web development projects, focusing on front-end development and API integration.",
      achievements: [
        "Developed responsive web applications",
        "Collaborated with design team on UI/UX",
        "Learned modern development workflows",
      ],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO at TechCorp",
      content: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
      avatar: "/placeholder-avatar-1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      content: "Working with them has been a pleasure. They understand both the technical and business aspects, making them invaluable to any team.",
      avatar: "/placeholder-avatar-2.jpg",
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "Lead Designer",
      content: "Their ability to bring designs to life with pixel-perfect accuracy and smooth animations is truly impressive.",
      avatar: "/placeholder-avatar-3.jpg",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "CEO at StartUp Inc.",
      content: "A talented developer who goes above and beyond. Their code is clean, maintainable, and always delivered on time.",
      avatar: "/placeholder-avatar-4.jpg",
    },
  ],
};

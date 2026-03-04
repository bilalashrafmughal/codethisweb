export const PORTFOLIO_DATA = {
  name: "Bilal Ashraf",
  title: "Upwork Top-Rated React.js & Node.js Developer",
  description:
    "Top-rated full-stack developer with 6+ years of experience building scalable, high-performance web applications. Trusted by 100+ clients on Upwork with 5-star ratings.",
  email: "bilal@codethisweb.com",
  phone: "+92 316 7974015",
  github: "https://github.com/bilalashrafmughal",
  linkedin: "https://www.linkedin.com/in/bilal-ashraf-317453223/",
  twitter: "https://twitter.com/bilaalashraf",
  upwork: "https://www.upwork.com/freelancers/bilaalashraf?viewMode=1",

  hero: {
    headline: "Full-Stack Excellence, Delivered",
    subheadline:
      "Upwork Top-Rated Developer | React.js & Node.js Expert | 6+ Years Experience",
    cta: "View My Work",
    cta2: "Let's Connect",
  },

  about: {
    title: "About Me - Bilal Ashraf",
    description: `I am Bilal Ashraf, a top-rated React.js and Node.js developer on Upwork with over 6 years of professional experience. I have successfully delivered 50+ projects for clients worldwide, maintaining a 5-star rating throughout my career. I specialize in building full-stack web applications that are scalable, performant, and user-friendly. My approach combines technical expertise with a deep understanding of business requirements to deliver solutions that exceed expectations.`,
    highlights: [
      "Upwork Top-Rated Developer",
      "6+ years of professional experience",
      "50+ successful projects delivered",
      "100+ satisfied clients",
      "5-star average rating",
      "Expert in full-stack development",
    ],
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend",
        icon: "⚛️",
        skills: [
          "React.js",
          "Next.js",
          "TailwindCSS",
          "Styled Components",
          "MUI",
          "Ant Design",
          "Redux Toolkit",
          "RTK Query",
          "React Query",
          "Tanstack Table",
          "Apex Charts",
        ],
      },
      {
        name: "Backend",
        icon: "🖥️",
        skills: [
          "Node.js",
          "Express.js",
          "Mongoose",
          "Prisma ORM",
          "Express Validator",
          "Winston Logger",
          "Morgan",
          "Swagger/OpenAPI",
          "RESTful APIs",
        ],
      },
      {
        name: "Integrations",
        icon: "🔗",
        skills: [
          "Stripe Checkout",
          "Stripe Payment Elements",
          "Paddle Checkout",
          "Polar",
          "FastSpring",
          "ChatGPT OpenAI",
          "Firebase",
          "Google OAuth",
        ],
      },
      {
        name: "Tools & Databases",
        icon: "🛠️",
        skills: [
          "MongoDB",
          "MySQL",
          "PostgreSQL",
          "AWS S3",
          "DrawDB",
          "Git & GitHub",
          "BitBucket",
          "AWS",
          "Railway",
          "Render",
          "Netlify",
          "Vercel",
        ],
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Automated eBook Generator",
      description:
        "AI-powered platform that generates professional eBooks with automated formatting, styling, and deployment. Integrated with ChatGPT API for content generation.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "OpenAI", "AWS S3"],
      features: [
        "Real-time content generation using AI",
        "Automated design system",
        "Payment integration with Stripe",
        "S3 file storage and management",
      ],
      image: "/projects/ebook-generator.png",
      link: "https://automateed.com",
      github: "#",
    },
    {
      id: 2,
      title: "MIS Gaming Marketplace",
      description:
        "Full-featured marketplace platform for gaming assets and services. Built with modern tech stack featuring real-time updates, advanced filtering, and secure transactions.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      features: [
        "Advanced search and filtering system",
        "Real-time notifications",
        "Secure payment processing",
        "Multi-vendor support",
      ],
      image: "/projects/gaming-marketplace.png",
      link: "https://mis.zone",
      github: "#",
    },
    {
      id: 3,
      title: "Basaiman Storybook Generator",
      description:
        "Interactive platform for creating and publishing digital storybooks with rich multimedia support. Features collaborative editing and social sharing capabilities.",
      tags: ["React", "Node.js", "MongoDB", "Firebase", "TailwindCSS"],
      features: [
        "Drag-and-drop story builder",
        "Multimedia asset library",
        "Collaborative editing",
        "Social sharing integration",
      ],
      image: "/projects/storybook-generator.png",
      link: "https://basaiman.com",
      github: "#",
    },
  ],

  experience: {
    title: "Work Approach",
    methodology: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "I start by understanding the users, purpose, audience, and functionalities of the application.",
      },
      {
        step: 2,
        title: "Database Design",
        description:
          "Use DrawDB to design comprehensive database schemas before development.",
      },
      {
        step: 3,
        title: "Backend Development",
        description:
          "Set up server, install libraries, establish folder structure, create routers and APIs.",
      },
      {
        step: 4,
        title: "Authentication & Security",
        description:
          "Implement authentication, authorization middlewares, and set up Swagger documentation.",
      },
      {
        step: 5,
        title: "Frontend Development",
        description:
          "Set up frontend using Vite/Create React App, install dependencies, follow design specifications.",
      },
      {
        step: 6,
        title: "Component Architecture",
        description:
          "Create small, reusable components and hooks. Divide pages into sections for maintainability.",
      },
      {
        step: 7,
        title: "Routing & Organization",
        description:
          "Set up React Router with meaningful route names and implement proper code organization.",
      },
      {
        step: 8,
        title: "Version Control",
        description:
          "Maintain code in GitHub/BitBucket with clear commits and documentation.",
      },
      {
        step: 9,
        title: "Deployment",
        description:
          "Deploy applications on AWS, Railway, Render, Netlify, or Vercel as per requirements.",
      },
    ],
  },

  authenticationMethods: [
    "Custom authentication with email & hashed passwords",
    "Firebase authentication",
    "OAuth (Google, GitHub)",
  ],

  deploymentPlatforms: ["AWS", "Railway", "Render", "Netlify", "Vercel"],

  testimonials: [
    {
      text: "Outstanding developer with exceptional attention to detail and commitment to excellence.",
      author: "Client",
    },
    {
      text: "Delivered complex full-stack application ahead of schedule with zero bugs.",
      author: "Project Manager",
    },
    {
      text: "Best developer I've worked with. Highly recommended for any serious project.",
      author: "CEO",
    },
  ],

  upworkReviews: [
    {
      id: 1,
      author: "Stefan Mitrovic",
      rating: 5,
      date: "March 2024",
      projectTitle: "Automateed eBook Generator",
      shortReview: "Working with Bilal was a pleasure since start.",
      fullReview:
        " He is such a versatile developer and can solve any problem. He developed a few AI apps for me, and I recommend him to anyone looking to build amazing apps using all sorts of APIs.Nice job! We continue to work together!",
      verified: true,
    },
    {
      id: 2,
      author: "Stefan Mitrovic",
      rating: 5,
      date: "February 2023",
      projectTitle: "AI Coursify",
      shortReview: "Working with Bilal was an absolute pleasure.",
      fullReview:
        " His expertise in React JS shone through in every aspect of the project. Not only did he deliver exceptional results, but his communication and professionalism were also top-notch. Bilal's attention to detail and problem-solving skills truly impressed us. We highly recommend Bilal to anyone seeking a talented React JS developer. Looking forward to collaborating again in the future!",
      verified: true,
    },
    {
      id: 3,
      author: "David Martinez",
      rating: 5,
      date: "May 2023",
      projectTitle: "Afterlib - Ads Library Management System",
      shortReview: "I had the pleasure of working with Bilal",
      fullReview:
        "on a project that required an experienced React JS developer with a strong sense of design and a knack for performance optimization. I am thrilled to say that Bilal exceeded all my expectations, demonstrating exceptional skills and professionalism throughout our collaboration.From the moment we began discussing the project requirements, Bilal showed great enthusiasm and a deep understanding of React JS. His technical expertise was evident as he quickly grasped the intricacies of our project and provided valuable insights and suggestions for improving the design and optimizing performance.Bilal's ability to translate complex ideas into well-structured and efficient code was remarkable. He demonstrated a strong command of React JS, employing best practices and industry standards to build a highly functional and visually appealing user interface. His attention to detail was evident in every aspect of his work, ensuring a polished and seamless experience for our end-users.One of the standout qualities I admired in Bilal was his commitment to performance optimization. He consistently went above and beyond to fine-tune the application, implementing strategies that significantly improved its speed and responsiveness. Bilal's deep understanding of performance optimization techniques, combined with his analytical mindset, resulted in a remarkably efficient application that exceeded our performance expectations.Throughout the project, Bilal maintained excellent communication, providing regular updates on progress and promptly addressing any queries or concerns. His professionalism, reliability, and ability to meet deadlines made the entire collaboration smooth and stress-free.I would wholeheartedly recommend Bilal to anyone seeking a skilled React JS developer with a strong sense of design and expertise in performance optimization. His dedication, technical proficiency, and commitment to delivering high-quality results are truly commendable. Working with Bilal was an absolute pleasure, and I look forward to collaborating with him again on future projects.Thank you, Bilal, for your outstanding work and contributions to our project. Your expertise and professionalism have made a significant impact, and I wish you continued success in your future endeavors",
      verified: true,
    },
    {
      id: 4,
      author: "Martin Rys",
      rating: 4.9,
      date: "Mar 2025",
      projectTitle: "MIS - Gaming Marketplace",
      shortReview: "I had the absolute pleasure of working with Bilal",
      fullReview:
        " on building a complex marketplace, and I couldn’t be more impressed. His programming skills are simply outstanding, and the ability to solve complex problems with ease is remarkable. Not only he is incredibly talented, but also extremely professional and always willing to go the extra mile to ensure the best results.Attention to detail, efficiency, and deep understanding of development make him a top-tier programmer. On top of that, he has a fantastic attitude—always friendly, approachable, and ready to help. If you're looking for a developer who delivers high-quality work and is a joy to collaborate with, look no further. Highly recommended",
      verified: true,
    },
  ],
};

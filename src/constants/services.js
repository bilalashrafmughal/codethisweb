export const services = [
  {
    id: "business-websites",
    title: "Custom Business Websites",
    description:
      "Modern, fast, responsive websites for businesses, startups, agencies, and personal brands.",
    examples: [
      "Company websites",
      "Portfolio websites",
      "Landing pages",
      "Marketing websites",
      "Service-based business websites",
    ],
    icon: "FaGlobe",
    slug: "custom-business-websites",
    fullDescription:
      "In today's digital-first economy, your website is your most valuable employee. We build high-performance, conversion-optimized websites that don't just look pretty—they work. Our focus is on speed, accessibility, and a seamless user journey that guides your visitors from curiosity to checkout.",
    benefits: [
      "Industry-leading load times (Core Web Vitals optimized)",
      "Mobile-first responsive design for all devices",
      "SEO-ready architecture to help you rank on Google",
      "Intuitive UI/UX that reduces bounce rates",
    ],
    process: [
      "Discovery & Strategy",
      "Wireframing & UX Design",
      "Custom Development",
      "Rigorous Testing",
      "Launch & Optimization",
    ],
  },
  {
    id: "saas-apps",
    title: "SaaS Application Development",
    slug: "saas-application-development",
    description: "Build complete SaaS platforms from idea to production.",
    fullDescription:
      "Transforming a software idea into a scalable subscription business requires deep technical expertise and a focus on user retention. We architect robust SaaS platforms that handle complex logic, secure payments, and multi-tenant data structures, allowing you to focus on growth.",
    benefits: [
      "Scalable cloud-native architecture",
      "Secure payment & subscription management (Stripe/PayPal)",
      "Granular user roles and permissions",
      "Real-time data synchronization",
    ],
    process: [
      "Architecture Planning",
      "Database Modeling",
      "Core Feature Development",
      "Payment Integration",
      "Scale Testing",
    ],
    examples: [
      "Subscription-based apps",
      "Multi-user dashboards",
      "CRM systems",
      "Project management tools",
    ],
    features: [
      "Authentication",
      "Payments & subscriptions",
      "User roles",
      "AI integrations",
    ],
    icon: "FaCloud",
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    slug: "ai-powered-solutions",
    description:
      "Integrate AI into products and workflows to stay ahead of the curve.",
    fullDescription:
      "Artificial Intelligence is no longer a luxury—it's a competitive necessity. We help businesses integrate LLMs, custom training models, and automation agents into their existing products to automate human-intensive tasks and provide unique value to their users.",
    benefits: [
      "Automate 70% of customer support with AI",
      "Reduce operational costs through smart automation",
      "Personalized user experiences driven by data",
      "Fast integration with OpenAI, Anthropic, or local models",
    ],
    process: [
      "AI Opportunity Audit",
      "Model Selection & Prompt Engineering",
      "Integration & API Bridge",
      "Feedback Loop Implementation",
      "Continuous Fine-tuning",
    ],
    examples: [
      "AI chatbots",
      "AI customer support",
      "AI content generation",
      "AI automation tools",
    ],
    icon: "FaRobot",
  },
  {
    id: "fullstack-apps",
    title: "Full Stack Web Applications",
    description:
      "Develop scalable frontend + backend applications built for performance.",
    includes: [
      "Frontend UI/UX",
      "Backend APIs",
      "Database architecture",
      "Cloud deployment",
    ],
    icon: "FaCode",
    slug: "full-stack-web-applications",
    fullDescription:
      "Scale your business with custom web applications built for heavy performance and security. We bridge the gap between complex backend logic and beautiful frontend interfaces, using the latest industry standards like React, Node.js, and PostgreSQL.",
    benefits: [
      "High-performance single page applications (SPA)",
      "Robust REST or GraphQL API development",
      "Secure, scalable database architectures",
      "Seamless CI/CD deployment pipelines",
    ],
    process: [
      "Requirements Mapping",
      "System Design",
      "Agile Development",
      "Automated Testing",
      "Cloud Deployment",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    slug: "ecommerce-development",
    description:
      "Online stores and selling platforms that drive actual revenue.",
    fullDescription:
      "Your online store should be more than a catalog—it should be a high-converting sales machine. We build immersive shopping experiences that handle everything from complex product variants to secure global payments and inventory sync.",
    benefits: [
      "Frictionless checkout experience",
      "Advanced product filtering & search",
      "Automated inventory management",
      "Multi-currency & Global shipping support",
    ],
    process: [
      "Market Analysis",
      "UX/UI for Sales",
      "Platform Customization",
      "Integration (Stripe/Shopify/Custom)",
      "Growth Analytics Setup",
    ],
    examples: [
      "Custom e-commerce sites",
      "Product management",
      "Payment gateways",
      "Marketplace platforms",
    ],
    icon: "FaShoppingCart",
  },
  {
    id: "automation",
    title: "Automation & Workflow Systems",
    slug: "automation-workflow-systems",
    description:
      "Reduce manual work using smart automation and business process tools.",
    fullDescription:
      "Stop wasting hours on repetitive tasks. We build automated systems that connect your favorite tools (Zapier, Make, custom scripts) and handle data processing, email nurturing, and internal reporting while you sleep.",
    benefits: [
      "Save 10+ hours of manual work weekly",
      "Eliminate human error in data entry",
      "Automated customer lead nurturing",
      "Real-time business notifications",
    ],
    process: [
      "Process Audit",
      "Workflow Visualization",
      "Automation Build",
      "Integration Testing",
      "Handover & Training",
    ],
    examples: [
      "Email automation",
      "CRM integrations",
      "AI workflow systems",
      "Internal tools",
    ],
    icon: "FaCogs",
  },
  {
    id: "dashboards",
    title: "Dashboard & Admin Panels",
    slug: "dashboard-admin-panels",
    description:
      "Data-focused systems for businesses to manage operations and growth.",
    fullDescription:
      "Understand your business at a glance. We build custom internal tools and admin dashboards that visualize your KPIs, manage your team, and control your digital infrastructure with zero friction.",
    benefits: [
      "Real-time visual data reporting",
      "User-friendly team management",
      "Optimized operational efficiency",
      "Custom CRM/ERP capabilities",
    ],
    process: [
      "Data Source Identification",
      "Metric Selection",
      "Frontend Dashboard Build",
      "API/Database Hookup",
      "Deployment",
    ],
    examples: [
      "Analytics dashboards",
      "Inventory systems",
      "Employee management",
      "Reporting systems",
    ],
    icon: "FaChartBar",
  },
  {
    id: "api-integration",
    title: "API Development & Integration",
    slug: "api-integration",
    description: "Connect services and platforms together seamlessly.",
    fullDescription:
      "We build the invisible bridges that make the internet work. Whether you need a custom REST API for your mobile app or want to sync complex data between Shopify, Salesforce, and your internal tools, we handle the handshake.",
    benefits: [
      "Secure & fast data exchange",
      "Zero-downtime integrations",
      "Thorough API documentation",
      "Third-party system synchronization",
    ],
    process: [
      "Mapping Endpoints",
      "Security Architecture",
      "API Development",
      "Stress Testing",
      "Implementation",
    ],
    examples: [
      "REST APIs",
      "Third-party integrations",
      "Payment APIs",
      "Social media systems",
    ],
    icon: "FaLink",
  },
  {
    id: "optimization",
    title: "Performance & Scalability",
    slug: "performance-optimization",
    description:
      "Improve slow or poorly built systems to handle more customers.",
    fullDescription:
      "Is your site slow? Losing customers? We specialize in technical audits and performance tuning. From database indexing to frontend image optimization, we ensure your tech can handle 10x your current traffic.",
    benefits: [
      "Sub-second page load times",
      "Reduced server costs",
      "Higher search engine rankings",
      "Stable performance under high load",
    ],
    process: [
      "Performance Audit",
      "Identifying Bottlenecks",
      "Technical Refactoring",
      "Database Optimization",
      "Load Testing",
    ],
    services: [
      "Speed optimization",
      "Database scaling",
      "Code refactoring",
      "Security hardening",
    ],
    icon: "FaLightning",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    slug: "maintenance-support",
    description: "Ongoing technical support and feature updates after launch.",
    fullDescription:
      "Technology moves fast. We ensure your digital assets stay secure, updated, and bug-free long after launch. Think of us as your external CTO team, available whenever you need a fix or a new feature.",
    benefits: [
      "24/7 Uptime monitoring",
      "Regular security patches",
      "Priority bug fixes",
      "Strategic roadmap planning",
    ],
    process: [
      "System Audit",
      "Monitoring Setup",
      "Ticket Queue Management",
      "Phased Updates",
      "Monthly Reporting",
    ],
    includes: [
      "Bug fixing",
      "Monitoring",
      "Security updates",
      "Server maintenance",
    ],
    icon: "FaWrench",
  },
];

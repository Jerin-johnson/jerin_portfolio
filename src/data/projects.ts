export type ArchNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  description: string;
};

export type ArchEdge = {
  from: string;
  to: string;
};

export type Project = {
  id: string;
  category: "featured" | "selected" | "lab";
  index: string; // e.g. "01"
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  links: {
    live?: string;
    github?: string;
  };
  architecture?: {
    nodes: ArchNode[];
    edges: ArchEdge[];
  };
};

// Add new projects here — just push a new object into this array.
export const projects: Project[] = [
  {
    id: "irowzcure",
    category: "featured",
    index: "01",
    name: "IrowzCure",
    tagline: "Healthcare SaaS Platform",
    description:
      "Multi-role healthcare platform connecting patients, doctors, hospital admins and super admins — instant appointment booking, real-time lab report access, and video consultations, secured with a 4-role RBAC system.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS S3",
      "BullMQ",
      "Socket.IO",
      "ZegoCloud",
      "Razorpay",
      "Gemini AI",
      "Pinecone",
    ],
    highlights: [
      "Backend architected with SOLID principles and Clean Architecture — every module independently testable and extensible",
      "Socket.IO scaled across multiple server instances via Redis Pub/Sub for distributed real-time communication",
      "Slot-free booking architecture using Redis distributed locking to eliminate race conditions under concurrency",
      "4-role RBAC (Patient, Doctor, Hospital Admin, Super Admin) with JWT access/refresh token rotation",
      "BullMQ background workers for email notifications, lab report delivery and async task queues",
      "AI healthcare assistant using Google Gemini + Pinecone Vector DB for context-aware patient queries",
      "Dockerised services, deployed on AWS EC2 with S3 storage and automated CI/CD via GitHub Actions",
    ],
    links: {
      live: "https://irowzcure.shop/",
      github: "https://github.com/Jerin-johnson/Irowz-Health-Care-Backend",
    },
    architecture: {
      nodes: [
        {
          id: "client",
          label: "CLIENT",
          x: 50,
          y: 6,
          description:
            "React + TypeScript SPA. Handles booking, video consults and lab report views.",
        },
        {
          id: "nginx",
          label: "NGINX",
          x: 50,
          y: 22,
          description:
            "Reverse proxy and load balancer in front of the API layer.",
        },
        {
          id: "api",
          label: "NODE API",
          x: 50,
          y: 40,
          description:
            "Express services following Clean Architecture — controllers stay thin, business logic is isolated and independently testable.",
        },
        {
          id: "mongo",
          label: "MONGODB",
          x: 18,
          y: 60,
          description:
            "Primary datastore for patients, appointments, hospitals and lab records.",
        },
        {
          id: "redis",
          label: "REDIS",
          x: 50,
          y: 60,
          description:
            "Distributed locks for slot-free booking, Pub/Sub for scaling Socket.IO, and hot-path caching.",
        },
        {
          id: "bullmq",
          label: "BULLMQ",
          x: 82,
          y: 60,
          description:
            "Background job queues — notification emails, lab report delivery, async processing.",
        },
        {
          id: "worker",
          label: "WORKER",
          x: 82,
          y: 78,
          description:
            "Consumes BullMQ jobs off the request lifecycle so the API stays fast under load.",
        },
        {
          id: "s3",
          label: "S3",
          x: 68,
          y: 94,
          description:
            "Object storage for lab reports and documents, referenced by signed URLs.",
        },
        {
          id: "email",
          label: "EMAIL",
          x: 96,
          y: 94,
          description: "Transactional email delivery triggered by worker jobs.",
        },
      ],
      edges: [
        { from: "client", to: "nginx" },
        { from: "nginx", to: "api" },
        { from: "api", to: "mongo" },
        { from: "api", to: "redis" },
        { from: "api", to: "bullmq" },
        { from: "bullmq", to: "worker" },
        { from: "worker", to: "s3" },
        { from: "worker", to: "email" },
      ],
    },
  },
  {
    id: "irowzelite",
    category: "selected",
    index: "02",
    name: "IrowzElite",
    tagline: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with complete order lifecycle management, returns/refunds, wallet and coupon systems, and admin workflows for inventory and orders.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
    highlights: [
      "Authentication, product management, cart, checkout and order lifecycle end to end",
      "Returns, refunds, cancellations, wallet, coupons, referrals and offer management",
      "Admin dashboards for inventory management, order handling and product workflows",
      "Product filtering, sorting, search and role-based access workflows",
    ],
    links: {
      live: "https://irowz-elite.onrender.com/",
      github: "https://github.com/Jerin-johnson/Irowz_elite/",
    },
  },
  {
    id: "url-shortener",
    category: "lab",
    index: "L1",
    name: "URL Shortener",
    tagline: "High-throughput link redirection service",
    description:
      "A URL shortener built around fast redirects and collision-safe short codes, with click analytics and cache-first lookups.",
    tech: ["Node.js", "Express.js", "Redis", "MongoDB"],
    highlights: [
      "Cache-first redirect path — short codes resolved from Redis before falling back to MongoDB",
      "Collision-safe short code generation with base62 encoding",
      "Click analytics captured asynchronously so redirects stay fast",
    ],
    links: {
      live: "#",
      github: "https://github.com/Jerin-johnson/NestJs_UrlApp",
    },
  },
  {
    id: "microservices-user-mgmt",
    category: "lab",
    index: "L2",
    name: "Microservices User Management",
    tagline: "API Gateway · Auth · User · Reporting services",
    description:
      "A microservices-based backend with an API Gateway, Auth, User and Reporting services communicating over gRPC, with RabbitMQ handling async event-driven workflows.",
    tech: ["Node.js", "gRPC", "RabbitMQ", "Docker", "Kubernetes"],
    highlights: [
      "gRPC for typed, low-latency inter-service communication",
      "RabbitMQ for async, event-driven workflows between services",
      "Dockerised services with Kubernetes deployments configured on Minikube",
    ],
    links: {
      github:
        "https://github.com/Jerin-johnson/micro-service-backend-user-managment",
    },
  },
  {
    id: "micro-frontend-platform",
    category: "lab",
    index: "L3",
    name: "Micro Frontend Platform",
    tagline: "Webpack Module Federation, independently deployable UIs",
    description:
      "A micro-frontend architecture using Webpack Module Federation, with independently deployable frontend modules sharing dependencies at runtime.",
    tech: ["React.js", "Module Federation", "Docker", "Kubernetes"],
    highlights: [
      "Shared dependency management and runtime module loading across multiple React apps",
      "Dockerised frontend services with Kubernetes deployments",
      "Images published to Docker Hub as part of the deploy flow",
    ],
    links: {
      github: "https://github.com/Jerin-johnson/user_managment_mfe/",
    },
  },
];

export const featuredProject = projects.find((p) => p.category === "featured")!;
export const selectedProjects = projects.filter(
  (p) => p.category === "selected",
);
export const labProjects = projects.filter((p) => p.category === "lab");

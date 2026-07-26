export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Micro Frontends"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "gRPC"],
  },
  {
    label: "Data",
    items: ["MongoDB", "MySQL", "Redis"],
  },
  {
    label: "Messaging & Realtime",
    items: ["Socket.IO", "Redis Pub/Sub", "BullMQ", "RabbitMQ"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS EC2", "AWS S3", "Nginx", "GitHub Actions"],
  },
  {
    label: "AI & Tooling",
    items: ["Google Gemini", "LangChain", "Pinecone", "Git", "Postman", "Figma"],
  },
];

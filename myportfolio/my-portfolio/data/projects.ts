export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projectsData: Project[] = [
  {
    title: "AI Notes App",
    description: "Smart note-taking app with AI summarization built using Next.js & Gemini API.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://github.com",
  },
  {
    title: "E-Commerce Storefront",
    description: "High-performance online store with dynamic product fetching.",
    tech: ["Next.js", "Framer Motion", "Stripe"],
    link: "https://github.com",
  },
];
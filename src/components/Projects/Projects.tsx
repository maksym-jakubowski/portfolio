import { ArrowRight } from "lucide-react";
import { SquareCheck, ChartNoAxesCombined, Sparkles } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Task Manager App",
    description:
      "Fullstack task management application with kanban board, team workspace and real-time updates.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Socket.io"],
    image: "/project1-icon.png", // ścieżka do Twojego screena
    color: "#594afb", // kolor ikonki w rogu
    liveLink: "#",
    githubLink: "#",
    icon: SquareCheck,
  },
  {
    title: "AI Content Generator",
    description:
      "AI-Powered application for generating marketing content, product descriptions and social media posts.",
    tags: ["React", "Node.js", "OpenAI API", "PostgreSQL", "TailWind CSS"],
    image: "/project2-icon.png", // ścieżka do Twojego screena
    color: "#45937a", // kolor ikonki w rogu
    liveLink: "#",
    githubLink: "#",
    icon: Sparkles,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard for data visualisation and analysis with charts, filters and CSV data import.",
    tags: ["React", "Node.js", "Recharts", "PostgreSQL", "CSV"],
    image: "/project3-icon.png", // ścieżka do Twojego screena
    color: "#4d8cf0", // kolor ikonki w rogu
    liveLink: "#",
    githubLink: "#",
    icon: ChartNoAxesCombined,
  },
];

const Projects = () => {
  return (
    <section className="my-work w-full">
      <div className="container text-left px-6 py-6">
        <h2 className="text-indigo-400 font-medium tracking-wide text-sm">
          MY WORK
        </h2>
        <div className="lg:grid-cols-2 gap-4 justify-between flex items-center mb-3">
          <h3 className="text-m font-semibold text-white">Featured Projects</h3>
          <button className="flex items-center text-xs gap-2 border border-slate-700 bg-slate-900/40 text-white px-6 py-2 rounded-l font-semibold transition-all hover:bg-slate-800 active:scale-95">
            View all projects <ArrowRight size={20} />
          </button>
        </div>

        {/* Grid projektów */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((p, index) => (
            <ProjectCard key={index} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

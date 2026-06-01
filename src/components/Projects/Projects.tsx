// import { ArrowRight } from "lucide-react";
import { ChartNoAxesCombined, Sparkles, SquareCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      title: "Task Manager App",
      description: t("projects.project1"),
      tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Socket.io"],
      imageLight: "/project1-icon-light.png",
      imageDark: "/project1-icon-dark.png",
      color: "#594afb",
      liveLink: "http://task-app.maksym-jakubowski.pl/",
      githubLink: "https://github.com/maksym-jakubowski/task-management-app",
      icon: SquareCheck,
    },
    {
      title: "AI Content Generator",
      description: t("projects.project2"),
      tags: ["React", "Node.js", "OpenAI API", "PostgreSQL", "TailWind CSS"],
      imageLight: "/project2-icon-light.png",
      imageDark: "/project2-icon-dark.png",
      color: "#45937a",
      liveLink: "#",
      githubLink: "#",
      icon: Sparkles,
      isBeingBuild: true,
    },
    {
      title: "Chat App",
      description: t("projects.project3"),
      tags: ["React", "Node.js", "Recharts", "PostgreSQL", "CSV", "Supabase"],
      imageLight: "/project3-icon-light.png",
      imageDark: "/project3-icon-dark.png",
      color: "#4d8cf0",
      liveLink: "#",
      githubLink: "#",
      icon: ChartNoAxesCombined,
      isBeingBuild: true,
    },
  ];

  return (
    <section id="projects" className="my-work w-full">
      <div className="container text-center md:text-left py-6">
        <h5 className="t-primary">{t("projects.my_work")}</h5>
        <div className="lg:grid-cols-2 gap-4 justify-center md:justify-between flex items-center mb-3">
          <h4>{t("projects.featured_projects")}</h4>

          {/* Future button for all projects
          <button className="flex items-center text-xs gap-2 border border-slate-700 bg-slate-900/40 text-white px-6 py-2 rounded-l font-semibold transition-all hover:bg-slate-800 active:scale-95">
            View all projects <ArrowRight size={20} />
          </button>
          */}
        </div>

        {/* Projects Grid */}
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

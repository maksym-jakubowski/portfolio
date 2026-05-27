import { ExternalLink, ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

// 1. Definiujemy sztywny interfejs projektu
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  liveLink: string;
  githubLink: string;
  icon: LucideIcon;
}

// 2. Używamy go w Propsach
interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = project.icon; // Pobieramy ikonę z danych projektu
  return (
    <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-2 flex flex-col transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/60">
      {/* Container na zdjęcie */}
      <div className="relative aspect-16/10 overflow-hidden mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full transition-transform"
        />

        {/* Mały box z ikonką w rogu zdjęcia */}
        <div
          className={`absolute top-3 right-3 p-2 rounded-lg shadow-lg shadow-black/20`}
          style={{ backgroundColor: project.color }}
        >
          <div className="w-5 h-5 rounded-md flex items-center justify-center">
            <Icon size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* Teksty */}
      <div className="flex flex-col grow px-2">
        <h3 className="text-s font-semibold text-white mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-300 text-xs leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tagki technologii */}
        <div className="flex flex-wrap gap-2 mb-4 border-b border-white/10 pb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-bold tracking-wider bg-slate-800/50 text-slate-400 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Linki na dole */}
        <div className="flex items-center gap-6 mt-auto pb-2">
          <a
            href={project.liveLink}
            className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Live Demo <ArrowUpRight size={16} />
          </a>
          <a
            href={project.githubLink}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

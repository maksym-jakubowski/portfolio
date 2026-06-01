import { ArrowUpRight, ExternalLink } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageLight: string;
  imageDark: string;
  color: string;
  liveLink?: string;
  githubLink?: string;
  icon: LucideIcon;
  isBeingBuild?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = project.icon;
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="group shadow-md card rounded-xl p-3 flex flex-col transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-900/60 max-w-150">
      {/* image */}
      <div className="relative aspect-16/10 overflow-hidden rounded-xl mb-6 shadow-md">
        <img
          src={
            resolvedTheme === "dark" ? project.imageDark : project.imageLight
          }
          alt={project.title}
          className="w-full h-full transition-transform"
        />

        {/* corner icon */}
        <div
          className={`absolute top-3 right-3 p-2 rounded-lg shadow-lg shadow-black/20`}
          style={{ backgroundColor: project.color }}
        >
          <div className="w-5 h-5 rounded-md flex items-center justify-center">
            <Icon size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* text */}
      <div className="flex flex-col grow px-2">
        <h6>{project.title}</h6>
        <p className="muted text-xs leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 border-b border-default pb-4 justify-center md:justify-normal">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-bold tracking-wider bg-slate-300/50 text-slate-500 dark:bg-slate-800/50 dark:text-slate-400 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-center  md:justify-normal gap-6 mt-auto pb-2">
          {project.isBeingBuild && (
            <p className="text-xs font-semibold">
              {t("projects.currently_building")}
            </p>
          )}
          {!project.isBeingBuild && (
            <>
              <a
                href={project.liveLink}
                target="blank"
                className="flex items-center gap-1.5 text-xs font-semibold t-primary hover:text-indigo-300 transition-colors"
              >
                Live Demo <ArrowUpRight size={16} />
              </a>
              <a
                href={project.githubLink}
                target="blank"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-white transition-colors"
              >
                GitHub <ExternalLink size={16} />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

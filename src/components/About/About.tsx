import { Download } from "lucide-react";
import TechRow from "./TechRow";

const About = () => {
  return (
    <section className="about-me text-left py-3">
      <div className="container mx-auto px-6 border-t border-b border-slate-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEWA KOLUMNA: About Me */}
          <div className="flex flex-col md:flex-row gap-4 items-center lg:items-start py-12">
            <div className="flex-1 space-y-6">
              <span className="text-indigo-500 font-semibold text-xs uppercase mb-2">
                About Me
              </span>
              <h2 className="text-m font-semibold text-white">
                Passionate about building <br /> things for the web
              </h2>
              <div className="space-y-4 text-slate-300 text-xs leading-relaxed max-w-md">
                <p>
                  I'm a fullstack developer with a strong focus on React and
                  Node.js. I enjoy turning ideas into real products that solve
                  problems and deliver value.
                </p>
                <p>
                  I'm continuously learning new technologies and improving my
                  skills to build better applications.
                </p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-xs transition-all active:scale-95 w-fit shadow-lg shadow-indigo-500/20">
                Download CV <Download size={18} />
              </button>
            </div>
            {/* Zdjęcie z zaokrąglonymi rogami */}
            <div className="relative w-48 h-70 shrink-0">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-4xl -rotate-3"></div>
              <img
                src="/ja3.jpg" // Tu wstaw swoje zdjęcie
                alt="Profile"
                className="relative w-full h-full object-cover rounded-4xl border border-slate-800 shadow-2xl"
              />
            </div>
          </div>

          {/* PRAWA KOLUMNA: Tech Stack */}
          <div className="space-y-10 border-l border-slate-800/50 lg:pl-8 py-12">
            <div>
              <span className="text-indigo-500 font-semibold text-xs uppercase mb-2">
                Technologies
              </span>
              <h2 className="text-m font-semibold text-white">Tech Stack</h2>
            </div>

            <div className="space-y-8">
              <TechRow
                label="Frontend"
                icons={["react", "typescript", "tailwind", "html", "css", "js"]}
                labels={[
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ]}
              />
              <TechRow
                label="Backend"
                icons={["node-js", "express", "nestjs", "rest"]}
                labels={["Node.js", "Express", "NestJS", "REST API"]}
              />
              <TechRow
                label="Database & Tools"
                icons={["postgres", "git", "docker", "postman", "vscode"]}
                labels={["PostgreSQL", "Git", "Docker", "Postman", "VSCode"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

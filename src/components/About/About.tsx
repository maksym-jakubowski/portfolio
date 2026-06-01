import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

import TechRow from "./TechRow";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-me text-center md:text-left py-3">
      <div className="container mx-auto border-t border-b border-default">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-start">
          {/* About Me */}
          <section
            id="about"
            className="flex flex-col md:flex-row gap-9 md:gap-4 items-center lg:items-start py-9 lg:py-12 lg:pr-8"
          >
            <div className="flex-1">
              <h5 className="t-primary">{t("about_me.about_me")}</h5>

              <div className="space-y-6">
                <h4 className="whitespace-pre-line">{t("about_me.header")}</h4>

                <div className="space-y-4 muted text-xs leading-relaxed max-w-md">
                  <p>{t("about_me.text1")}</p>
                  <p>{t("about_me.text2")}</p>
                </div>
                <div>
                  <a
                    href="Maksym Jakubowski - CV.pdf"
                    download
                    className="cursor-pointer mx-auto inline-block"
                  >
                    <button className="cursor-pointer mx-auto md:mx-0 flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-xs transition-all active:scale-95 w-fit shadow-lg shadow-indigo-500/20">
                      {t("about_me.download_cv")}
                      <Download size={18} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Picture */}
            <div className="relative w-48 h-70 shrink-0">
              <div className="absolute inset-0 bg-indigo-900/85 dark:bg-indigo-500/10 rounded-4xl -rotate-3"></div>
              <img
                src="/ja3.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-4xl shadow-2xl"
              />
            </div>
          </section>

          {/* Tech Stack */}
          <section
            id="skills"
            className="-mx-6 lg:border-l border-default lg:pl-8 py-9 lg:py-12 border-t lg:border-t-0"
          >
            <div className="lg:px-0 px-6 space-y-10">
              <div>
                <h5 className="t-primary">{t("about_me.technologies")}</h5>
                <h4>Tech Stack</h4>
              </div>

              <div className="space-y-8">
                <TechRow
                  label="Frontend"
                  icons={[
                    "react",
                    "typescript",
                    "tailwind",
                    "html",
                    "css",
                    "js",
                  ]}
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

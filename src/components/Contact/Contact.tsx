import { Mail, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

import { GithubIconFooter, LinkedinIconFooter } from "../../ui/socialIcons";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-6 text-center md:text-left">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Text */}
          <div className="lg:col-span-1">
            <h5 className="t-primary">{t("contact.header")}</h5>
            <h4>{t("contact.header2")}</h4>
            <p className="muted text-xs lg:whitespace-pre-line">
              {t("contact.text")}
            </p>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Email */}
            <div className="card p-3 rounded-xl flex items-center gap-4 transition-colors group">
              <div className="w-12 h-12 bg-bg dark:bg-dark-bg rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/10 dark:group-hover:bg-dark-primary/10 transition-colors">
                <Mail
                  className="muted group-hover:text-primary dark:group-hover:text-primary"
                  size={20}
                />
              </div>
              <div className="flex flex-col">
                <span className="t-primary font-bold text-[10px] uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:maxpolak11@gmail.com"
                  className="text-xs font-medium hover:underline break-all"
                >
                  maxpolak11@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card p-3 rounded-xl flex items-center gap-4 transition-colors group">
              <div className="w-12 h-12 bg-bg dark:bg-dark-bg rounded-full flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 transition-colors">
                <MapPin
                  className="muted group-hover:text-emerald-400"
                  size={20}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                  {t("contact.location")}
                </span>
                <span className="text-xs font-medium">
                  {t("contact.poland")} (GMT+1)
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="card p-3 rounded-xl flex items-center gap-4 transition-colors group">
              <div className="w-12 h-12 bg-bg dark:bg-dark-bg rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                <Send className="muted group-hover:text-blue-400" size={20} />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-blue-400 font-bold text-[10px] uppercase tracking-wider">
                  {t("contact.lets_connect")}
                </span>
                <div className="flex gap-3 mt-2">
                  {/* LinkedIn - Direct SVG */}
                  <a
                    href="https://www.linkedin.com/in/maksym-jakubowski/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-slate-300 muted dark:bg-slate-800 hover:bg-[#0077B5] rounded-lg transition-all hover:-translate-y-1 hover:text-surface"
                  >
                    <LinkedinIconFooter />
                  </a>

                  {/* GitHub - Direct SVG */}
                  <a
                    href="https://github.com/maksym-jakubowski"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 muted bg-slate-300 hover:bg-muted hover:text-surface dark:bg-slate-800 dark:hover:bg-[#222] rounded-lg transition-all hover:-translate-y-1"
                  >
                    <GithubIconFooter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import Button from "../../ui/Button";
import { GithubIcon, LinkedinIcon } from "../../ui/socialIcons";

const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <div className="md:flex flex-col space-y-6 items-start text-center md:text-left">
      <span className="t-primary font-medium tracking-wide text-sm">
        {t("hero.hi")}
      </span>

      <h1>
        Maksym <br /> Jakubowski
      </h1>

      <h2 className="t-primary">Fullstack Developer (React & Node.js)</h2>

      <h3 className="lg:max-w-lg">{t("hero.about")}</h3>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
        <a href="#projects">
          <Button
            icon="arrow-right"
            text={t("hero.view_projects")}
            variant="primary"
          />
        </a>
        <a href="mailto:maxpolak11@gmail.com">
          <Button icon="mail" text={t("hero.contact_me")} variant="secondary" />
        </a>
      </div>

      {/* Social Media Section */}
      <div className="">
        <p className="text-xs muted mb-4 font-semibold">{t("hero.find_me")}</p>
        <div className="flex gap-4 justify-center md:justify-normal">
          <SocialIcon
            icon={<GithubIcon />}
            href="https://github.com/maksym-jakubowski"
          />
          <SocialIcon
            icon={<LinkedinIcon />}
            href="https://linkedin.com/in/maksym-jakubowski"
          />
          <SocialIcon
            icon={<Mail size={20} />}
            href="mailto:maxpolak11@email.com"
          />
        </div>
      </div>
    </div>
  );
};

interface SocialIconProps {
  icon: React.ReactNode; // ReactNode accepts JSX, SVG etc.
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg--surface muted hover:text-black dark:hover:text-white"
  >
    {icon}
  </a>
);

export default HeroContent;

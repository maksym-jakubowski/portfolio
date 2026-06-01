import { useTranslation } from "react-i18next";

type NavbarLinkProps = {
  text: string;
  link: string;
  onClick?: () => void;
};

const NavbarLink = ({ text, link, onClick }: NavbarLinkProps) => {
  return (
    <li>
      <a
        className="hover:text-primary dark:hover:text-dark-primary transition-all duration-200"
        href={link}
        onClick={onClick}
      >
        {text}
      </a>
    </li>
  );
};

interface MenuProps {
  onLinkClick?: () => void;
}

export default function Menu({ onLinkClick }: MenuProps) {
  const { t } = useTranslation();

  return (
    <>
      <NavbarLink onClick={onLinkClick} text={t("navbar.home")} link="#" />
      <NavbarLink
        onClick={onLinkClick}
        text={t("navbar.projects")}
        link="#projects"
      />
      <NavbarLink
        onClick={onLinkClick}
        text={t("navbar.about")}
        link="#about"
      />
      <NavbarLink
        onClick={onLinkClick}
        text={t("navbar.skills")}
        link="#skills"
      />
      {/* <NavbarLink onClick={onLinkClick} text={t("navbar.experience")} link="#experience" /> */}
      <NavbarLink
        onClick={onLinkClick}
        text={t("navbar.contact")}
        link="#contact"
      />
    </>
  );
}

import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import logo from "/logo.svg";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full">
      <div className="container mx-auto py-4 border-t border-default">
        <div className="flex flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="hidden sm:block" />
            <span className="muted text-xs pr-10 sm:pr-0">
              © {new Date().getFullYear()} {t("footer.copyrights")}
            </span>
          </div>

          {/* Built with */}
          <div className="items-center gap-6 relative h-10 lg:h-auto flex">
            <p className="muted text-xs pr-16 lg:pr-0 hidden lg:block">
              <Trans
                i18nKey="footer.built_with"
                components={{
                  bold: <b />,
                }}
              />
            </p>

            {/* Button Back to Top */}
            <a
              href="#"
              onClick={scrollToTop}
              className="right-0 absolute lg:static w-10 h-10 cursor-pointer rounded-xl flex items-center justify-center transition-all duration-300 group bg-primary/90 text-bg hover:bg-primary dark:bg-dark-primary/90 dark:hover:bg-dark-primary"
              aria-label="Back to top"
            >
              <ArrowUp
                size={18}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

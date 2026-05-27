import { ArrowUp } from "lucide-react";
import logo from "/logo.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950">
      <div className="container mx-auto py-4 px-6 border-t border-slate-800/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Lewo: Logo i Copyright */}
          <div className="flex items-center gap-4">
            <div className="text-indigo-500 font-black text-2xl tracking-tighter">
              <img src={logo} alt="Logo" />
            </div>
            <span className="text-slate-300 text-xs">
              © {new Date().getFullYear()} Maksym Jakubowski. All rights
              reserved.
            </span>
          </div>

          {/* Środek/Prawo: Built with */}
          <div className="flex items-center gap-6">
            <p className="text-slate-300 text-xs">
              Built with <span className="text-red-500">❤️</span> using{" "}
              <b>React & Tailwind CSS</b>
            </p>

            {/* Przycisk Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp
                size={18}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

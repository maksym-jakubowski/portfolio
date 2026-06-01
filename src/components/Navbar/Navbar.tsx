import { useState } from "react";

import logo from "/logo.svg";

import LanguLanguageSwitcher from "./LanguageSwitcher";
import Menu from "./Menu";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar w-full sticky top-0 z-50 bg-bg dark:bg-dark-bg">
        <div className="container flex items-center justify-between py-4 border-b border-default">
          <a
            onClick={scrollToTop}
            href="#"
            id="logo"
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Logo" />
            <p className="text-base font-semibold hidden sm:block">
              Maksym Jakubowski
            </p>
          </a>
          <ul className="hidden lg:flex menu gap-11 text-base">
            <Menu />
          </ul>
          <div className="config flex items-center gap-4">
            <LanguLanguageSwitcher />
            <ThemeToggle />

            {/* HAMBURGER (MOBILE ONLY) */}
            <button
              onClick={() => setOpen(true)}
              className="justify-center items-center lg:hidden flex cursor-pointer rounded-full bg-surface dark:bg-dark-surface w-10 h-10"
            >
              <div className="flex flex-col gap-1 justify-center">
                <span className="w-6 h-0.5 bg-black dark:bg-white border-2 rounded-4xl"></span>
                <span className="w-6 h-0.5 bg-black dark:bg-white border-2 rounded-4xl"></span>
                <span className="w-6 h-0.5 bg-black dark:bg-white border-2 rounded-4xl"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* OVERLAY for mobile side menu */}
      {open && (
        <div
          className="fixed z-99 inset-0 w-full h-full bg-white/40 dark:bg-black/40 cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}
      {/* SIDE MENU */}
      <aside
        className={` z-100
          fixed top-0 left-0 h-full w-64 card shadow-lg
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 flex justify-between items-center border-b border-default">
          <span className="font-bold">Menu</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          <ul className="space-y-4">
            <Menu onLinkClick={() => setOpen(false)} />
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;

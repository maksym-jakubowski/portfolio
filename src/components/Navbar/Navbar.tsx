import logo from "/logo.jpg";

import LanguLanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="navbar w-full ">
      <div className="container flex items-center justify-between text-white px-6 py-4 border-b border-white/10">
        <div id="logo" className="flex items-center gap-2">
          <img src={logo} alt="Logo" />
          <p className="text-sm font-semibold">Maksym Jakubowski</p>
        </div>
        <ul className="menu gap-8 flex text-xs">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="config flex items-center gap-4">
          <LanguLanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

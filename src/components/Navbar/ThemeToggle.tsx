import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="shink-0">
      <button
        onClick={toggleTheme}
        className="p-2.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none card hover:text-primary hover:dark:text-dark-primary cursor-pointer"
        aria-label="Zmień motyw"
      >
        <div className="relative w-5 h-5 overflow-hidden">
          <span
            className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
              resolvedTheme === "dark"
                ? "translate-y-0 rotate-0 scale-100"
                : "translate-y-10 rotate-45 scale-0"
            }`}
          >
            <Sun className="w-5 h-5" />
          </span>

          <span
            className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
              resolvedTheme === "light"
                ? "translate-y-0 rotate-0 scale-100"
                : "-translate-y-10 -rotate-45 scale-0"
            }`}
          >
            <Moon className="w-5 h-5" />
          </span>
        </div>
      </button>
    </div>
  );
};

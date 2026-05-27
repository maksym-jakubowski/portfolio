import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);

  // Logika przełączania klasy 'dark' w elemencie html
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 rounded-full bg-slate-900/50 text-slate-200 
                 hover:text-indigo-400 transition-all duration-300
                 shadow-[0_0_10px_rgba(0,0,0,0.1)] active:scale-95"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={20} strokeWidth={2.5} />
      ) : (
        <Moon size={20} strokeWidth={2.5} />
      )}
    </button>
  );
};

export default ThemeSwitcher;

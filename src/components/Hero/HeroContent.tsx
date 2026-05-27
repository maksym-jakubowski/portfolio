import { Mail, ArrowRight } from "lucide-react";

// Stałe z kodami SVG dla logo marek (GitHub i LinkedIn)
const GITHUB_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LINKEDIN_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const HeroContent = () => {
  return (
    <div className="flex flex-col space-y-4 items-start text-left">
      <span className="text-indigo-400 font-medium tracking-wide text-sm">
        Hi, I'm
      </span>

      <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-12">
        Maksym <br /> Jakubowski
      </h1>

      <p className="text-xl md:text-xl font-semibold text-indigo-400">
        Fullstack Developer (React & Node.js)
      </p>

      <p className="text-slate-300 max-w-lg leading-relaxed">
        I build modern, scalable web applications with a focus on clean code,
        performance and great user experience.
      </p>

      {/* Przyciski CTA - z Twoją nową klasą bg-linear-to-r */}
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center text-sm gap-2 bg-linear-to-r from-indigo-600 to-blue-600 hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
          View Projects <ArrowRight size={20} />
        </button>

        <button className="flex items-center gap-2 border border-slate-700 bg-slate-900/40 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95">
          Contact Me <Mail size={20} />
        </button>
      </div>

      {/* Social Media Section */}
      <div className="text-left">
        <p className="text-xs text-slate-300 mb-4 font-semibold">Find me on:</p>
        <div className="flex gap-4">
          <SocialIcon icon={GITHUB_SVG} href="https://github.com/twoj-profil" />
          <SocialIcon
            icon={LINKEDIN_SVG}
            href="https://linkedin.com/in/twoj-profil"
          />
          <SocialIcon icon={<Mail size={20} />} href="mailto:twoj@email.com" />
        </div>
      </div>
    </div>
  );
};

interface SocialIconProps {
  icon: React.ReactNode; // ReactNode oznacza, że to może być JSX, SVG, tekst itd.
  href: string; // href musi być ciągiem znaków
}

// Komponent pomocniczy dla ikonek
const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:text-white hover:border-indigo-500 transition-all duration-300"
  >
    {icon}
  </a>
);

export default HeroContent;

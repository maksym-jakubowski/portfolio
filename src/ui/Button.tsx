import { ArrowRight, ArrowUp, Download, LucideIcon, Mail } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "primaryTransparent" | "secondary" | "delete";
  text?: string;
  icon?: keyof typeof icons;
  small?: boolean;
};

const icons = {
  "arrow-right": ArrowRight,
  mail: Mail,
  download: Download,
  "arrow-up": ArrowUp,
} satisfies Record<string, LucideIcon>;

export default function Button({
  icon,
  small = false,
  text = "",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const padding = small ? "px-6 py-2.5" : "px-6 py-3 sm:px-8 sm:py-4";
  const iconStyles = "w-4.5 h-4.5 stroke-[2.5]";

  const IconComponent = icon ? icons[icon] : null;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 cursor-pointer text-sm sm:text-base";

  const variants = {
    primary:
      "text-white bg-linear-to-r from-primary to-blue hover:opacity-90 transition",

    primaryTransparent:
      "border font-medium text-sm border-primary/30 dark:border-dark-primary/30 bg-primary/5 dark:bg-dark-primary/5 text-primary dark:text-dark-primary hover:bg-primary dark:hover:bg-dark-primary hover:text-white",

    secondary:
      "border font-medium border-default bg-slate-200 hover:bg-slate-300 dark:bg-slate-900/40  dark:hover:bg-slate-800",

    delete:
      "font-medium border border-red dark:border-dark-border text-red bg-bg dark:bg-dark-surface hover:bg-surface dark:hover:bg-dark-bg hover:border-red",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${padding} ${className}`}
      {...props}
    >
      {text}
      {IconComponent && <IconComponent className={iconStyles} />}
    </button>
  );
}

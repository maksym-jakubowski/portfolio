const TechRow = ({
  label,
  icons,
  labels,
}: {
  label: string;
  icons: string[];
  labels?: string[];
}) => (
  <div className="flex flex-col md:flex-row text-center justify-center md:justify-normal gap-3 sm:gap-8 md:items-start">
    <span className="text-xs md:w-14 pt-3">{label}</span>
    <div className="flex flex-wrap justify-center md:justify-normal gap-3">
      {icons.map((icon, index) => (
        <div
          key={icon}
          className="group relative flex flex-col items-center gap-1"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-indigo-500/50 group-hover:-translate-y-1 bg-slate-300 dark:bg-slate-900">
            <img
              src={`/stack/${icon}.png`}
              alt={icon}
              className="w-6 transition-all"
            />
          </div>
          {/* Tooltip */}
          <span className="text-[11px] font-medium">
            {labels?.[index] ?? icon.charAt(0).toUpperCase() + icon.slice(1)}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TechRow;

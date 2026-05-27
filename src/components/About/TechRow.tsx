const TechRow = ({
  label,
  icons,
  labels,
}: {
  label: string;
  icons: string[];
  labels?: string[];
}) => (
  <div className="flex flex-col sm:flex-row text-center gap-3 sm:gap-8 items-start">
    <span className="text-white text-xs w-14 pt-3">{label}</span>
    <div className="flex flex-wrap gap-3">
      {icons.map((icon, index) => (
        <div
          key={icon}
          className="group relative flex flex-col items-center gap-1"
        >
          <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-indigo-500/50 group-hover:-translate-y-1">
            <img
              src={`/stack/${icon}.png`}
              alt={icon}
              className="w-6 transition-all"
            />
          </div>
          {/* Tooltip z nazwą (opcjonalnie) */}
          <span className="text-[11px] text-white font-medium">
            {labels?.[index] ?? icon.charAt(0).toUpperCase() + icon.slice(1)}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TechRow;

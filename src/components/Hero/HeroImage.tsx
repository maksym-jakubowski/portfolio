import heroUrl from "/hero.png";

const HeroImage = () => {
  return (
    <div className="relative group">
      {/* Poświata za laptopem (Glow effect) */}
      <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-500/30 transition-all duration-500" />

      {/* Mockup laptopa */}
      <div className="relative animate-float">
        <img
          src={heroUrl}
          alt="Dashboard Preview"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />

        {/* Dekoracyjne kropki (ten wzorek w tle na screenie) */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [bg-size:10px_10px]" />
      </div>
    </div>
  );
};

export default HeroImage;

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="hero  w-full bg-slate-950">
      <div className="container px-6 py-6 relative overflow-hidden border-b border-white/10 flex items-center">
        {/* Dekoracyjne tło "glow" w tle całej sekcji */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center z-10">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;

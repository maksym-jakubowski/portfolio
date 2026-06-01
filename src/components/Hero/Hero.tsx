import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="hero w-full">
      <div className="container py-6 relative border-b border-default flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center z-10">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;

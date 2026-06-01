import { useTheme } from "next-themes";

import heroDarkUrl from "/hero-dark.png";
import heroLightUrl from "/hero-light.png";

const HeroImage = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="relative group hidden lg:block">
      <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative animate-float">
        <img
          src={resolvedTheme === "dark" ? heroDarkUrl : heroLightUrl}
          alt="Dashboard Preview"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroImage;

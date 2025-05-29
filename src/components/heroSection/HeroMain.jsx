import HeroText from "./HeroText";
import Noise from "../ui/Noise";

const HeroMain = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 -z-10 bg-[#0F0E0E]">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
      <div className="mx-auto w-full">
        <HeroText />
      </div>
    </div>
  );
};

export default HeroMain;

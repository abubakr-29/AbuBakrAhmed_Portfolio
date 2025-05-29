import { SpeedInsights } from "@vercel/speed-insights/react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import AboutMeMain from "./components/aboutUsSection/AboutMeMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <main className="overflow-x-hidden text-zinc-300 antialiased">
      <NavbarMain />
      <HeroMain />
      <div className="container mx-auto px-8">
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        <ProjectMain />
        <BackToTop />
        <SpeedInsights />
      </div>
    </main>
  );
};

export default App;

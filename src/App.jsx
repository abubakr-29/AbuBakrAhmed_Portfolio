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
      <section
        id="contact"
        className="min-h-[400px] flex flex-col items-center justify-center py-20 border-t border-zinc-800 mt-12"
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-zinc-400 mb-2">
          This is a placeholder for the Contact section. You can add your
          contact form or details here.
        </p>
      </section>
    </main>
  );
};

export default App;

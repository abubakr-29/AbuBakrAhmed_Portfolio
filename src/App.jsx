import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import AboutMeMain from "./components/aboutUsSection/AboutMeMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import BackToTop from "./components/BackToTop";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ThankYouPage from "./components/contactMeSection/ThankYouPage";
import FooterMain from "./components/footer/FooterMain";

const App = () => {
  return (
    <BrowserRouter>
      <main className="overflow-x-hidden text-zinc-300 antialiased">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarMain />
                <HeroMain />
                <div className="container mx-auto px-8">
                  <AboutMeMain />
                  <SkillsMain />
                  <SubSkills />
                  <ProjectMain />
                  <ContactMeMain />
                  <FooterMain />
                  <BackToTop />
                  <SpeedInsights />
                </div>
              </>
            }
          />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

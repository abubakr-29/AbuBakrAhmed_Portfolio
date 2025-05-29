import { motion } from "motion/react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

const AboutUsMain = () => {
  return (
    <section className="py-20" id="about">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl tracking-tight sm:tracking-tighter mb-8 lg:mb-6 md:text-5xl text-center"
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap lg:flex-row-reverse max-w-7xl mx-auto px-4">
        <AboutMeImage />
        <AboutMeText />
      </div>
    </section>
  );
};

export default AboutUsMain;

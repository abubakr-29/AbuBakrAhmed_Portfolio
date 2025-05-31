import { motion } from "motion/react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="tracking-tight sm:tracking-tighter mb-6 text-2xl lg:self-start mt-8 lg:mt-0"
      >
        Who Am I
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-base sm:text-lg text-zinc-400 sm:leading-relaxed tracking-tight sm:tracking-tighter space-y-6 mx-auto text-center lg:text-left"
      >
        <p className="leading-relaxed">
          I'm a developer driven by curiosity, creativity, and the desire to
          solve meaningful problems through technology. What began as casual
          experimentation during college quickly evolved into a deeper passion
          for building digital solutions that are both functional and impactful.
        </p>
        <p className="leading-relaxed">
          Over time, I've transitioned from coding personal projects to
          developing real-world applications, gaining valuable insight into not
          just the technical side of development, but also the importance of
          user experience, clear communication, and collaboration.
        </p>
        <p className="leading-relaxed mb-8">
          Outside of coding, I dedicate myself to physical training, continuous
          learning, and self-reflection — all part of my broader goal to grow as
          both a developer and a person who contributes value wherever possible.
        </p>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-70}
          className="px-4 py-2 rounded-md button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutMeText;

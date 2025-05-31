import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import DecryptedText from "./DecryptedText";

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const HeroText = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-8">
      <DecryptedText
        text="Hi, I'm Abu Bakr Ahmed"
        animateOn="view"
        revealDirection="center"
        speed={120}
      />
      <motion.h2
        className="uppercase text-xl md:text-2xl text-zinc-400 font-medium mt-2 mb-4"
        variants={childVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        Full-Stack Developer | AI Enthusiast | MSc CS
      </motion.h2>
      <motion.p
        className="text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
        variants={childVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        I build exceptional digital experiences with modern web technologies.
        Passionate about creating efficient, scalable, and user-friendly
        applications.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <motion.div
          variants={childVariants}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
        >
          <a
            href="/AbuBakr_Ahmed_Resume.pdf"
            download
            className="px-4 py-2 rounded-md button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
          >
            Download Resume
          </a>
        </motion.div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
        >
          <Link
            to="projects"
            smooth={true}
            spy={true}
            duration={500}
            offset={-70}
            className="px-4 py-2 rounded-md button border border-white text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;

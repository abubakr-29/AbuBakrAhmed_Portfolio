import { motion } from "motion/react";
import { Link } from "react-scroll";

const AboutUsText = () => {
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
          I'm someone who genuinely enjoys building things that work and make
          sense. My journey into web development began during college out of
          pure curiosity, and over time, it turned into something much deeper—a
          drive to create, solve problems, and bring ideas to life through code.
        </p>
        <p className="leading-relaxed">
          What started as personal experiments evolved into real-world projects,
          and with each one, I've learned not just about development, but about
          people, communication, and how technology fits into everyday life.
        </p>
        <p className="leading-relaxed mb-8">
          Outside of work, I like to train hard, learn continuously, and reflect
          on how I can grow—not just as a developer, but as a person who wants
          to make a meaningful impact.
        </p>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-120}
          className="px-4 py-2 rounded-md button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUsText;

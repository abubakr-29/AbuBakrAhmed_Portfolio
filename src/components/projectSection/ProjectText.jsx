import { motion } from "motion/react";

const ProjectText = () => {
  return (
    <div className="mb-14 text-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl tracking-tight sm:tracking-tighter mb-10 md:text-5xl"
      >
        My Projects
      </motion.h2>
      <p className="max-w-3xl mx-auto text-lg">
        Here are some of the projects I've built — from client work to personal
        experiments. Each one reflects my focus on clean code, modern design,
        and solving real-world problems through technology.
      </p>
    </div>
  );
};

export default ProjectText;

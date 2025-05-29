import { motion } from "motion/react";

const ContactMeText = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        class="text-4xl tracking-tight sm:tracking-tighter mb-16 md:text-5xl text-center"
      >
        Let's Connect
      </motion.h2>
    </div>
  );
};

export default ContactMeText;

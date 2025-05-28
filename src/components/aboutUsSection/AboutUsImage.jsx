import { motion } from "motion/react";
import profilePic from "../../assets/AbuBakrAhmed.jpeg";

const AboutUsImage = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div class="flex justify-center lg:p-8">
        <motion.img
          src={profilePic}
          alt="Abu Bakr Ahmed"
          className="rounded-3xl shadow-2xl shadow-white/30"
          width={500}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default AboutUsImage;

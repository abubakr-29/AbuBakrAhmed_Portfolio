import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <section id="skills">
      <div className="max-w-7xl mx-auto px-4 min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block hidden">
          <AllSkills />
        </div>
        <div className="block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </section>
  );
};

export default SkillsMain;

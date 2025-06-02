import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { FaJava, FaCubes } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { SiC } from "react-icons/si";
import { SiCplusplusbuilder } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { FaMicrochip } from "react-icons/fa6";
import { MdStorage } from "react-icons/md";

const foundationSkills = [
  {
    skill: "C",
    icon: SiC,
    color: "#A8B9CC",
  },
  {
    skill: "C++",
    icon: SiCplusplusbuilder,
    color: "#00599C",
  },
  {
    skill: "Java",
    icon: FaJava,
    color: "#007396",
  },
  {
    skill: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    skill: "Data Structures & Algorithms",
    icon: FaProjectDiagram,
    color: "#F59E42",
  },
  {
    skill: "OOP Concepts",
    icon: FaCubes,
    color: "#6C3483",
  },
  {
    skill: "DBMS",
    icon: MdStorage,
    color: "#F4D03F",
  },
  {
    skill: "Computer Networks",
    icon: FaNetworkWired,
    color: "#229954",
  },
  {
    skill: "Operating Systems",
    icon: FaMicrochip,
    color: "#34495E",
  },
];

const FoundationSkills = () => {
  return (
    <section className="max-w-7xl mx-auto pt-20 pb-10">
      <motion.h3
        className="text-3xl tracking-tight mb-10 text-center"
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        Foundation Skills
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-4">
        {foundationSkills.map((item, idx) => (
          <motion.div
            key={item.skill}
            className="bg-white shadow-md rounded-lg px-6 py-4 flex items-center w-fit"
            variants={fadeIn("up", 0.1 + idx * 0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            <item.icon
              className="text-2xl mr-3"
              style={{ color: item.color }}
            />
            <span className="text-gray-700 font-medium">{item.skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FoundationSkills;

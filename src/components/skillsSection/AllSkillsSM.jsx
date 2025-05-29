import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    skill: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "#336791",
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    color: "#13AA52",
  },
  {
    skill: "MySQL",
    icon: SiMysql,
    color: "#00758f",
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
    color: "#43853d",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "#38BDF8",
  },
  {
    skill: "PHP",
    icon: FaPhp,
    color: "#474A8A",
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl" style={{ color: item.color }} />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;

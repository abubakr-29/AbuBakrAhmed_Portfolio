import { motion } from "motion/react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { fadeIn } from "../../framerMotion/variants";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    content: "Kolkata, India",
    link: null,
  },
  {
    icon: FaEnvelope,
    title: "Email",
    content: "abubakrahmed051@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=abubakrahmed051@gmail.com",
  },
  {
    icon: FaPhone,
    title: "Phone",
    content: "+91 74399 20798",
    link: "tel:+917439920798",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    link: "https://github.com/abubakr-29",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/abu-bakr-ahmed-01a9532bb/",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/__abu.bakr__03/",
  },
  {
    icon: FaWhatsapp,
    link: "https://wa.me/+918276058520",
  },
];

const ContactMeLeft = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
    >
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <p className="mb-8">
        Feel free to reach out to me for any questions or opportunities. I'm
        always open to discussing new projects, creative ideas or opportunities
        to be part of your vision.
      </p>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="flex items-start"
            variants={fadeIn("right", 0.2 + index * 0.1)}
          >
            <div className="bg-white p-3 rounded-full mr-4">
              <info.icon className="text-black" />
            </div>
            <div>
              <h4 className="font-semibold">{info.title}</h4>
              <p className="text-zinc-400">
                {info.link ? (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.content}
                  </a>
                ) : (
                  info.content
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="font-semibold mb-4">Follow Me</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-gray-300 hover:text-black transition-colors"
              variants={fadeIn("up", 0.2 + index * 0.1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMeLeft;

import { useState } from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeRight = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
    >
      <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
      <form
        className="space-y-6"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="3fba3a61-1228-4f30-a4e0-352ad9142c36"
        />
        <input
          type="hidden"
          name="redirect"
          value="https://abu-bakr-ahmed.vercel.app/thank-you"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fadeIn("left", 0.2)}>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-100 focus:border-gray-100 bg-white/90 text-black"
              required
            />
          </motion.div>
          <motion.div variants={fadeIn("left", 0.3)}>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-100 focus:border-gray-100 bg-white/90 text-black"
              required
            />
          </motion.div>
        </div>
        <motion.div variants={fadeIn("left", 0.4)}>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-100 focus:border-gray-100 bg-white/90 text-black"
            required
          />
        </motion.div>
        <motion.div variants={fadeIn("left", 0.5)}>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-100 focus:border-gray-100 bg-white/90 text-black"
            required
          />
        </motion.div>
        <motion.div className="inline-block" variants={fadeIn("left", 0.6)}>
          <motion.button
            type="submit"
            className="px-4 py-2 rounded-md button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
          >
            Send Message
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactMeRight;

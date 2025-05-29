import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fadeIn } from "../../framerMotion/variants";

const ThankYouPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="max-w-md w-full mx-4 p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl text-center border border-white/20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <FaCheckCircle className="text-6xl text-white" />
        </motion.div>

        <motion.h1
          variants={fadeIn("up", 0.3)}
          className="text-3xl font-bold text-white mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-300 mb-8">
          Your message has been successfully sent. I'll get back to you as soon
          as possible.
        </motion.p>

        <motion.div variants={fadeIn("up", 0.5)} className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm font-bold"
          >
            Back to Home
          </Link>

          <motion.div
            variants={fadeIn("up", 0.6)}
            className="text-sm text-gray-400"
          >
            Or you can contact me directly at{" "}
            <a href="tel:+917439920798" className="text-white hover:underline">
              +91 74399 20798
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouPage;

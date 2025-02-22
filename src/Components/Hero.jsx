
import { motion } from "framer-motion";
import { FaTasks } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-base-200  py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Task Management Simplified!
        </motion.h1>
        <p className="text-lg md:text-xl mb-6">
          Join <span className="font-semibold">TaskHive</span>, the ultimate platform for organizing, tracking, and completing tasks effortlessly.
        </p>
      </div>
    </section>
  );
}

export default  Hero

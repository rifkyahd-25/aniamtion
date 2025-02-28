import React from "react";
import { motion } from "framer-motion";
import exampleImage from "../assets/example.jpg";
export const Expiriance = () => {
  return (
    <>
      <motion.section
        className="h-screen flex items-center justify-center py-16 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex  items-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
        </div>

        <hr class="border-l-4 border-gray-300 h-[80%] m-7" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 text-left space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white">
                Freelance MERN Stack Developer
              </h3>
              <p className="text-gray-400 text-sm">Dec 2024 – Present</p>

              {/* Sequential list items */}
              <motion.ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Developed scalable and secure web applications.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Built custom APIs and integrated third-party services.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Optimized performance and database queries for efficiency.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Applied secure coding practices to prevent vulnerabilities.
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 flex justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-glow"
              src={exampleImage} // Replace with your image path
              alt="Freelance Development"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

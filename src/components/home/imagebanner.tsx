"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperientialLearning() {
  return (
    <motion.section
      className="py-12 px-4 md:px-12 text-center bg-white  sm:mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image with Hover Animation */}
      <motion.div
        className="max-w-7xl mx-auto overflow-hidden rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        // whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/imglearn.png"
          alt="Fellows at New Parliament Building"
          width={1000}
          height={600}
          className="w-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Caption with Staggered Effect */}
      <motion.p
        className="text-[#1E1E1E] mt-6 text-xs md:text-lg helvetica-neue-regular"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our Fellows during the experiential learning module at New Parliament Building (2023)
      </motion.p>
    </motion.section>
  );
}

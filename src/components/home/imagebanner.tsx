"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperientialLearning() {
  return (
    <motion.section
      className="mt-[60px] bg-white px-6 py-12 text-center sm:mb-12 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image with Hover Animation */}
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden rounded-lg shadow-md"
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
          height={400}
          className="w-full rounded-[4px]"
        />
      </motion.div>

      {/* Caption with Staggered Effect */}
      <motion.p
        className="helvetica-neue-regular mt-6 text-xs text-[#1E1E1E] md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our Fellows during the experiential learning module at New Parliament
        Building (2023)
      </motion.p>
    </motion.section>
  );
}

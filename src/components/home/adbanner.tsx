"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FellowshipStatus() {
  return (
    <section className="relative w-full h-auto py-16 px-4 md:px-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fellowback.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fc8174] to-gray-100 opacity-50"></div>
      </div>

      {/* Content Wrapper */}
      <motion.div
        className="relative max-w-7xl mx-auto text-white text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading with Animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold Abril_font"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          What is the status of the Fellowship?
        </motion.h2>

        {/* Fellowship Details with Staggered Effect */}
        <motion.div
          className="mt-6 text-lg helvetica-neue"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="font-bold">For the year:</span> 2024-25
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="font-bold">Starting date:</span> 1st August 2024
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="font-bold">The final date of application:</span>{" "}
            25th July 2024
          </motion.p>
        </motion.div>

        {/* Logos Section with Hover Effect */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/brand1.png" alt="PPGF Logo" width={144} height={72} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/brand2.png"
              alt="Nation First Logo"
              width={144}
              height={72}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

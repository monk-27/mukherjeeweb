"use client";
import { motion } from "framer-motion";

export default function VideoBanner() {
  return (
    <div className="relative px-4 xl:px-0 mx-auto w-full h-[60vh] sm:h-screen overflow-hidden bg-white">
      {/* Background Video */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover bg-white"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <source src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Text Content with Staggered Animation */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end bottom-8 sm:bottom-32 text-left text-white px-4 sm:px-20 md:px-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.3 },
          },
        }}
      >
        {/* Subheading */}
        <motion.h3
          className="text-sm sm:text-xl md:text-4xl helvetica-neue"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          style={{
            textShadow:
              "4px 4px 6px rgba(0, 0, 0, 0.7), 6px 6px 10px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Catalyse The Future With
        </motion.h3>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-8xl mt-2 abrildisplay whitespace-nowrap"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          The Mukherjee Fellowship
        </motion.h1>
      </motion.div>
    </div>
  );
}
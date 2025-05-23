"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FellowshipStatus() {
  return (
    // <section className="relative h-auto w-full px-4 py-12 sm:py-24 md:px-12">
    <section className="relative h-auto w-full px-4 py-12 sm:py-24 md:px-12">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0 bg-contain sm:bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/fellowback.png')" }}> */}
      <div className="bg-mobimg absolute inset-0 min-h-fit">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f77768] via-[#f5775b5c] to-[#f3f4f633]"></div>
      </div>

      {/* Content Wrapper */}
      <motion.div
        className="relative mx-auto max-w-7xl text-center text-white md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading with Animation */}
        <motion.h2
          className="font-EB-extrabold text-2xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Mark your calendars!
          <br /> Dates for the 2025-26 cohort are out now:
        </motion.h2>

        {/* Fellowship Details with Staggered Effect */}
        <motion.div
          className="my-12 text-sm sm:text-xl"
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
            className="mb-2"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="helvetica-neue-bold">
              Applications open on 26th May 2025{" "}
            </span>
            {/* <span className="helvetica-neue-regular">Important Dates</span> */}
          </motion.p>
          <motion.p
            className="mb-2"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="helvetica-neue-bold">
              Apply on or before 22nd June 2025
            </span>
            {/* <span className="helvetica-neue-regular">July 14, 2025</span> */}
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="helvetica-neue-bold">
              Cohort starts on 17th July 2025
            </span>

            {/* <span className="helvetica-neue-bold"> Application Deadline: </span> <span className="helvetica-neue-regular">June 30, 2025</span> */}
          </motion.p>
        </motion.div>

        {/* Logos Section with Hover Effect */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-start"
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

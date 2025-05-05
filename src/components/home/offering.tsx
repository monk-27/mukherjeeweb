"use client";
import { motion } from "framer-motion";

export default function Offerings() {
  return (
    <div className="py-2 bg-white mb-6">
      {/* Header Section */}

      <motion.p
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center mt-10"
      >
        <div className="text-gray-600 sm:text-xl text-sm helvetica-neue-light px-2 mx-auto ">
          The Policy, Politics and Governance Foundation (PPGF), in
          collaboration with the Nation First Policy Research Centre (NFPRC)
        </div>
      </motion.p>
      <motion.section
        className="py-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-4xl helvetica-neue-bold text-[#FB7165]"
          >
            Presents young professionals with an immersive hands-on <br/> 
            <span className="text-[#FE8854]">
            experience
            in policymaking and political strategy consulting. </span>
            
          </motion.h2>
          <motion.p
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-gray-700 mt-8 text-sm md:text-xl helvetica-neue-light px-6 sm:px-10"
          >
            The Fellowship intends to empower passionate students and
            exceptional professionals with the necessary skill set to succeed in
            policy making and political strategy consulting. After completing a
            customized training program, Fellows will be assigned to work at the
            offices of leading policymakers, public leaders, and administrators,
            providing them with valuable insights into policymaking and
            politics.
          </motion.p>
        </div>
      </motion.section>

      {/* Offerings Section */}
      <motion.section
        className="relative py-20 px-4 md:px-12 text-center bg-white bg-img min-h-fit"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative max-w-7xl mx-auto">
          {/* Title */}
          <motion.h3
            className=" text-3xl sm:text-6xl text-gray-800 mb-12 sm:mt-12 font-playfair-black"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            What We Offer
          </motion.h3>

          {/* Offerings Wrapper */}
          <motion.img
            src="/offering.png"
            alt="Offerings"
            className="mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.section>
    </div>
  );
}

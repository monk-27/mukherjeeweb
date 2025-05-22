"use client";
import { motion } from "framer-motion";

export default function Offerings() {
  return (
    <div className="mb-6 bg-white py-2">
      {/* Header Section */}
      <motion.div
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 px-6 text-center sm:px-0"
      >
        <div className="helvetica-neue-regular mx-auto px-2 text-[14px] text-[#1E1E1E] sm:text-xl">
          The Policy, Politics and Governance Foundation (PPGF), in
          collaboration with the Nation First Policy Research Centre (NFPRC)
        </div>
      </motion.div>

      <motion.section
        className="mx-auto max-w-6xl px-6 text-center sm:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* <div className="max-w-6xl mx-auto"> */}
        {/* <div className=""> */}
        <motion.h2
          transition={{ duration: 0.7, delay: 0.4 }}
          className="helvetica-bold py-[10px] text-[18px] leading-tight text-[#FB7165] md:text-[30px]"
        >
          Presents young professionals with an immersive{" "}
          <span className="text-[#FE8854]">
            hands-on experience in policymaking and political strategy
            consulting.
          </span>
        </motion.h2>

        <motion.p
          transition={{ duration: 0.7, delay: 0.6 }}
          className="helvetica-neue-regular text-[14px] text-[#1E1E1E] sm:px-10 md:text-xl"
        >
          The Fellowship intends to empower passionate students and exceptional
          professionals with the necessary skill set to succeed in policy making
          and political strategy consulting. After completing a customized
          training program, Fellows will be assigned to work at the offices of
          leading policymakers, public leaders, and administrators, providing
          them with valuable insights into policymaking and politics.
        </motion.p>
        {/* </div> */}
      </motion.section>

      <div className="h-[60px]"></div>

      {/* Offerings Section */}
      <motion.section
        className="bg-img relative min-h-fit bg-white px-4 py-0 text-center sm:py-20 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Title */}
          <motion.h3
            className="font-EB-extrabold mb-6 mt-0 text-3xl text-gray-800 sm:mt-12 sm:text-6xl md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            What We Offer
          </motion.h3>

          {/* Offerings Wrapper */}
          <motion.img
            src="/offer.png"
            alt="Offerings"
            className="mx-auto hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          />
          <div className="block space-y-4 sm:hidden">
            <motion.img
              src="/offer_mobile.png"
              alt="Offerings"
              className="mx-auto max-w-[75%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
            {/* <motion.img
              src="/image02.png"
              alt="Offerings"
              className="mx-auto max-w-[75%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/image03.png"
              alt="Offerings"
              className="mx-auto max-w-[75%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            /> */}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

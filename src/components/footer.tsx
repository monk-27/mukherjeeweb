"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaXTwitter, FaMeta } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 pt-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Left Section - Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/footerlogo.png"
            alt="Mukherjee Fellowship"
            width={150}
            height={50}
            className="mx-auto md:mx-0"
          />
          <p className="text-gray-600 mt-4 text-sm helvetica-neue">
            Creating opportunities for students and young professionals in
            Policy, Politics & Governance.
          </p>
        </motion.div>

        {/* Middle Section - Links */}
        <motion.div
          className="flex flex-col space-y-2 md:pl-10 mt-0 md:mt-24"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {["Home", "SPEAR", "Accelerating India"].map((link, index) => (
            <motion.a
              key={index}
              href={link === "Home" ? "/" : "/"}
              className="text-gray-600 hover:text-gray-900 helvetica-neue"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col space-y-2 mt-0 md:mt-24"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {["PPGF", "ICPC Internship", "Contact Us"].map((link, index) => (
            <motion.a
              key={index}
              href={link === "/" ? "/" : "/contact"}
              className="text-gray-600 hover:text-gray-900"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Right Section - Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-0 md:mt-24"
        >
          <h3 className="helvetica-neue-bold text-xl text-gray-900">Follow Us On</h3>
          <motion.div
            className="flex justify-center md:justify-start space-x-4 mt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[FaXTwitter, FaInstagram, FaLinkedin, FaMeta].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white hover:text-gray-900 text-2xl rounded-full bg-black p-3"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Bar */}
      <motion.div
        className="mt-8 grad1 text-white text-center py-4 text-lg helvetica-neue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        © 2024 PPGF. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

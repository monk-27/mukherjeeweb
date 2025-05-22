"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { icon: FaXTwitter, url: "https://x.com/PPGF_Mukherjee" },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/mukherjee_fellowship/",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/showcase/mukherjee-fellowship/posts/?feedView=all",
    },
    // { icon: FaMeta, url: "https://www.facebook.com/PPGF.IN" },
  ];

  return (
    <motion.footer
      className="bg-[#FFFFFF] pt-4 sm:bg-[#F9F8F8]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 text-left sm:gap-8 md:grid-cols-2 md:px-4 lg:grid-cols-4">
        {/* Left Section - Logo & About */}
        <motion.div
          className="gap-1 py-8 text-left sm:py-0"
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
            className="sm:h-30 mx-0 h-[109.598px] w-[126px] sm:w-40"
          />
          <p className="helvetica-neue-regular mt-4 text-base text-[#1E1E1E]">
            Creating opportunities for students and young professionals in
            Policy, Politics & Governance.
          </p>
        </motion.div>

        {/* Middle Section - Links */}
        <motion.div
          className="mt-0 flex flex-col space-y-2 md:mt-24 md:pl-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* "SPEAR", */}
          {["Home", "Accelerating India"].map((link, index) => (
            <motion.a
              key={index}
              href={link === "Home" ? "/" : "/"}
              className="helvetica-neue-regular text-[#1E1E1E] hover:text-gray-900"
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
          className="mt-0 flex flex-col space-y-2 md:mt-24"
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
              href="/"
              className="text-[#1E1E1E] hover:text-gray-900"
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
          className="my-8 md:mt-24"
        >
          <h3 className="font-EB-extrabold text-xl text-gray-900">
            Follow Us On
          </h3>
          <motion.div
            className="mt-1 flex justify-start space-x-4 sm:mt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank" // Opens link in a new tab
                rel="noopener noreferrer" // Security best practice
                className="rounded-full bg-black p-1 text-sm text-white hover:text-gray-200 sm:p-3 sm:text-2xl"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Bar */}
      <motion.div
        className="grad1 font-EB mt-8 py-2 text-center text-[12px] text-[#F9F8F8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        © 2024 PPGF. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

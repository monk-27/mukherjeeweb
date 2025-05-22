"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQs", path: "/faq" },
    { name: "Meet Our Fellows", path: "/fellowmate" },
  ];

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smooth slide-in
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1], // Smooth slide-out
      },
    },
  };
  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto flex w-full items-center justify-between p-4 px-8 sm:max-w-full sm:py-1 xl:px-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Mukherjee Fellowship"
              width={100}
              height={100}
              className="h-[20px] w-[102px] sm:h-[51px] sm:w-[262px]"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden space-x-12 lg:flex"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.path}
              href={link.path}
              className={`text-xl ${
                pathname === link.path
                  ? "helvetica-neue-bold text-[#FF8609]"
                  : "helvetica-neue-regular text-[#FF8609]"
              } transition-all`}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>

        {/* Right Side: Apply Button */}
        <motion.div
          className="hidden items-center space-x-4 lg:flex"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="https://forms.gle/YRCpcPHnvuMfA9DCA" target="_blank">
            <button className="grad1 helvetica-neue-bold rounded-[2px] px-4 py-2 text-base text-white md:rounded-[8px] xl:px-8 xl:text-xl">
              Apply now
            </button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black lg:hidden"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu color="#000" size={24} className="h-[24px] w-[24px]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu with Slide-in Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            className="absolute left-0 w-full border-t bg-white text-center lg:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col space-y-4 p-4 text-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.path}
                  href={link.path}
                  className={`${
                    pathname === link.path
                      ? "helvetica-neue-bold text-lg text-[#FF8609]"
                      : "helvetica-neue-regular text-lg text-[#FF8609]"
                  } transition-all hover:text-orange-600`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                className="grad1 helvetica-neue-bold mx-auto w-1/2 rounded-[2px] px-4 py-2 text-white md:rounded-[8px]" // Added mx-auto to center the button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  href="https://forms.gle/YRCpcPHnvuMfA9DCA"
                  target="_blank"
                >
                  Apply now
                </Link>
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

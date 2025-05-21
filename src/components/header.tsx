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

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"}`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="  sm:max-w-full mx-auto flex items-center justify-between p-3 md:px-6 xl:px-20 w-full">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Link href="/">
            <Image src="/logo.png" alt="Mukherjee Fellowship" width={250} height={100} />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden lg:flex space-x-12"
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
              className={`text-xl ${pathname === link.path ? "helvetica-neue-bold text-[#FF8609]" : "helvetica-neue-regular text-[#FF8609]"} transition-all`}
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
        <motion.div className="hidden lg:flex items-center space-x-4" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Link href="https://forms.gle/YRCpcPHnvuMfA9DCA" target="_blank">
            <button className="grad1 text-white px-4 xl:px-8 py-2 rounded-xl text-base xl:text-xl helvetica-neue-bold">Apply now</button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black">
          {isOpen ? <X size={28} /> : <Menu color="#000" size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu with Slide-in Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav className="lg:hidden bg-white border-t absolute w-full left-0" initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.path}
                  href={link.path}
                  className={` ${pathname === link.path ? "helvetica-neue-bold text-[#FF8609]" : "helvetica-neue-regular text-[#FF8609]"} hover:text-orange-600 transition-all`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                className="grad1 text-white px-4 py-2 rounded-xl helvetica-neue-bold w-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link href="https://forms.gle/YRCpcPHnvuMfA9DCA" target="_blank">Apply now</Link>
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
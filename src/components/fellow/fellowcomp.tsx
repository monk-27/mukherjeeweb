"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

import { XMarkIcon } from "@heroicons/react/24/solid";
export default function MeetOurFellows() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fellows = [
    {
      name: "John Doe",
      image: "/fellowmate.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Jane Smith",
      image: "/fellowmate2.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Rahul Sharma",
      image: "/fellowmate.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Priya Patel",
      image: "/fellowmate2.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Alex Johnson",
      image: "/fellowmate.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Emily Brown",
      image: "/fellowmate2.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "David Wilson",
      image: "/fellowmate.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Sophia Thomas",
      image: "/fellowmate2.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Daniel Garcia",
      image: "/fellowmate.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Amit Verma",
      image: "/fellowmate2.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Neha Kapoor",
      image: "/fellowmate.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Carlos Mendes",
      image: "/fellowmate2.png",
      alt: "John Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 xl:px-0 text-center">
      {/* Heading with Animation */}
      <motion.h2
        className="text-5xl font-bold text-gray-900 Abril_font mt-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Meet Our Fellows
      </motion.h2>
      <motion.p
        className="text-gray-700 mt-4 helvetica text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hear from our past and present Fellows sharing their Mukherjee
        Fellowship experience in their own words.
      </motion.p>

      {/* Fellows Grid with Staggered Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-12"
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
        {fellows.map((fellow, index) => (
          <motion.div
            key={index}
            onClick={() => openModal(index)}
            className="place-content-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={fellow.image}
              alt={fellow.name}
              width={600}
              height={600}
              className="mx-auto object-cover rounded-lg shadow-md"
            />
            <p className="font-semibold mt-2 text-gray-800">{fellow.name}</p>
          </motion.div>
        ))}

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4"
        >
          <motion.div
            className="relative mx-auto max-w-5xl max-h-[90vh] flex items-center gap-4 bg-white p-12 rounded-lg"
            initial={{ x: "-30%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white p-2 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-5 h-5 text-black" />
            </button>

            {/* Navigation Buttons */}

            {/* Main Image Display */}
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 md:col-span-1 place-content-center">
                <Image
                  src={fellows[currentIndex].image}
                  alt={fellows[currentIndex].alt}
                  width={600}
                  height={600}
                  className="max-w-full max-h-[80vh] md:max-h-[40vh] object-contain rounded-lg"
                />
              </div>

              <div className="col-span-3 md:col-span-2 place-content-center">
                <motion.div
                  className="text-left text-gray-900 text-2xl Abril_font"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {fellows[currentIndex].name}
                </motion.div>
                <motion.div
                  className="text-left text-gray-900 text-lg helvetica mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {fellows[currentIndex].description}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      </motion.div>
    </section>
  );
}

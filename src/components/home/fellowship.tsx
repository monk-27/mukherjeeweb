"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LearningModules() {
  return (
    <motion.section
      className="bg-gray-100 py-16 px-4 md:px-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 Abril_font">
          Mukherjee Fellowship
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-2 Abril_font">
          Structure
        </h3>
      </motion.div>

      {/* Learning Modules Container */}
      <motion.div
        className="max-w-5xl mx-auto mt-10 space-y-12 text-left"
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
        {/* Learning Modules */}
        {[
          {
            title: "Theoretical Learning Module",
            duration: "⏳ 1.5 Months",
            location: "In-person",
            image: "/fellow1.png",
            description:
              "The learning module runs for a period of three months starting in July and takes place in person in Delhi with the attendance of all the Fellows being compulsory. The Mukherjee Fellows undergo rigorous training through curated courses on submodules such as:",
            topics: [
              "Understanding Indian Society",
              "Political Campaigns 101",
              "Understanding Political Communication",
              "Law and Economics in India",
            ],
          },
          {
            title: "Experiential Learning Module",
            duration: "⏳ 3 Months",
            location: "Practical Work",
            image: "/fellow1.png",
            description:
              "This module offers Fellows hands-on experience working with policymakers, government officials, and organizations to apply theoretical knowledge in real-world policy and governance scenarios.",
            topics: [
              "Internships with Elected Representatives",
              "Policy Research & Governance Projects",
              "Legislative & Policy Drafting",
              "Grassroots Engagement",
            ],
          },
        ].map((module, index) => (
          <motion.div
            key={index}
            className="w-full max-w-5xl mx-auto overflow-hidden rounded-lg group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Section Title */}
            <h3 className="text-xl md:text-2xl Abril_font font-semibold mb-4 text-black">
              {index + 1}. {module.title}
            </h3>

            {/* Image Container with Hover Effect */}
            <div className="relative">
              {/* Background Image */}
              <Image
                src={module.image}
                alt={module.title}
                width={1000}
                height={600}
                className="w-full min-h-[400px] object-cover rounded-lg shadow-lg"
              />
              <motion.div
                className="hidden absolute inset-0 bg-black bg-opacity-60 lg:flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                initial={{ y: 240, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Badges */}
                <div className="flex space-x-3 mb-3">
                  <span className="grad1 text-white px-3 py-1 text-sm font-semibold rounded-md">
                    {module.duration}
                  </span>
                  <span className="grad1 text-white px-3 py-1 text-sm font-semibold rounded-md">
                    {module.location}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-white Abril_font text-base sm:text-2xl font-bold">
                  {module.title}
                </h2>

                {/* Description */}
                <p className="text-white helvetica-neue text-sm sm:text-lg mt-2 leading-relaxed">
                  {module.description}
                </p>

                {/* Bullet Points */}
                <ul className="text-white text-xs sm:text-base helvetica mt-3 space-y-1">
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>• {topic}</li>
                  ))}
                </ul>
              </motion.div>
              {/* Overlay Content (Appears on Hover) */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex lg:hidden flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                // initial={{ y: 240, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                // transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Badges */}
                <div className="flex space-x-3 mb-3">
                  <span className="grad1 text-white px-3 py-1 text-sm font-semibold rounded-md">
                    {module.duration}
                  </span>
                  <span className="grad1 text-white px-3 py-1 text-sm font-semibold rounded-md">
                    {module.location}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-white Abril_font text-base sm:text-2xl font-bold">
                  {module.title}
                </h2>

                {/* Description */}
                <p className="text-white helvetica-neue text-sm sm:text-lg mt-2 leading-relaxed">
                  {module.description}
                </p>

                {/* Bullet Points */}
                <ul className="text-white text-xs sm:text-base helvetica mt-3 space-y-1">
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>• {topic}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

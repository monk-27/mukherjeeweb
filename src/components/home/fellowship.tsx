"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LearningModules() {
  return (
    <motion.section
      className="mt-4 px-4 py-0 text-center sm:mt-16 sm:bg-gray-100 sm:py-20 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section */}
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* <h2 className="text-[30px] md:text-6xl  text-[#181818] font-EB-extrabold">
          Mukherjee Fellowship
        </h2>
        <h3 className="text-[16px] md:text-3xl  text-[#181818] mt-0 sm:mt-2 font-EB-extrabold">
          Structure
        </h3> */}

        <h2 className="font-EB-extrabold text-[30px] text-[#181818] md:text-6xl">
          Mukherjee Fellowship
        </h2>
        <h3
          className="font-EB-extrabold mt-0 text-[16px] text-[#181818] sm:mt-2 md:text-3xl"
          style={{ lineHeight: "124%" /* 26.7px */ }}
        >
          Structure
        </h3>
      </motion.div>

      {/* Learning Modules Container */}
      <motion.div
        className="mx-auto mt-8 max-w-5xl space-y-12 text-left sm:pt-12"
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
            emoji: "•",
            image1: "/time.svg",
            duration: "3 Months",
            location: "In-person",
            image: "/fellow1.png",
            description:
              "Before deployment, Fellows undergo intensive classroom training led by subject matter experts, covering: ",
            topics: [
              " Understanding Indian Society - Analyzing political, social, and cultural frameworks.  ",
              " Political Campaigns & Communications 101 - Strategies for elections, media relations, and voter engagement  ",
              " Understanding Parliamentary Procedures - Insights into legislative processes and policymaking.",
              " Law and Economics in India - Decoding the intersection of governance, law, and fiscal policies",
            ],
          },
          {
            title: "Experiential Learning Module",
            image1: "/time.svg",

            duration: "9 Months",
            location: "Practical Work",
            image: "/parliimage.png",
            description:
              "After completing their training, Fellows are placed in the offices of leading public figures, gaining hands-on exposure to:",
            topics: [
              {
                text: "Drafting inputs on bills, parliamentary questions, and policy discussions",
                emoji: "•",
              },
              {
                text: "Managing social media and political communications",
                emoji: "•",
              },
              {
                text: "Assisting in election campaigns and constituency strategy",
                emoji: "•",
              },
              {
                text: "Conducting in-depth policy research and legislative analysis",
                emoji: "•",
              },
              // {
              //   text: "Collaborating with consultants on political outreach, governance, and policy formulation",
              //   emoji: "🤝",
              // },
            ],
          },
        ].map((module, index) => (
          <motion.div
            key={index}
            className="group mx-auto w-full max-w-5xl overflow-hidden rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Section Title */}
            <h3 className="font-EB-extrabold mb-4 text-[18px] text-[#181818] md:text-2xl">
              {String.fromCharCode(65 + index)}. {module.title}
            </h3>

            {/* Image Container with Hover Effect */}
            <div className="relative">
              {/* Background Image */}
              <Image
                src={module.image}
                alt={module.title}
                width={1000}
                height={600}
                className="min-h-[400px] w-full rounded-lg object-cover shadow-lg"
              />
              <motion.div
                className="absolute inset-0 hidden flex-col justify-end rounded-lg bg-black bg-opacity-60 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:flex"
                initial={{ y: 240, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Badges */}
                <div className="mb-3 flex space-x-1 sm:space-x-3">
                  <span className="grad1 helvetica-neue-bold flex items-center rounded-md px-1 py-1 text-sm text-white sm:px-3">
                    <Image
                      src={module.image1}
                      alt={`${module.title} badge`}
                      width={20}
                      height={20}
                      className="mr-0 sm:mr-2"
                    />
                    {module.duration}
                  </span>
                  <span className="grad1 helvetica-neue-bold rounded-md px-3 py-1 text-sm text-white">
                    {module.location}
                  </span>
                </div>

                {/* Title */}
                <h2 className="orelega-one-regular text-[12px] text-white sm:text-3xl">
                  {module.title}
                </h2>

                {/* Description */}
                <p className="helvetica-neue-bold mt-2 text-[12px] leading-relaxed text-white sm:text-lg">
                  {module.description}
                </p>

                {/* Bullet Points */}
                <ul className="helvetica-neue-medium mt-3 space-y-1 text-xs text-white sm:text-base">
                  {/* {module.topics.map((topic, idx) => (
                    <li key={idx}>
                      {typeof topic === "string"
                        ? `${module.emoji} ${topic}` // For Theoretical Learning Module
                        : `${topic.emoji} ${topic.text}` // For Experiential Learning Module
                      }
                    </li>
                  ))} */}

                  {module.topics.map((topic, idx) => (
                    <li key={idx}>
                      {typeof topic === "string" ? (
                        // For Theoretical Learning Module: Split and bold the part before hyphen
                        module.title === "Theoretical Learning Module" ? (
                          <>
                            <span className="text-xl">{module.emoji}</span>
                            <span className="helvetica-neue-bold">
                              {topic.split(" - ")[0] || topic}
                            </span>
                            {" - "}
                            <span className="helvetica-neue-medium">
                              {topic.split(" - ")[1] || ""}
                            </span>
                          </>
                        ) : (
                          // For Experiential Learning Module: Render as string with emoji
                          `${module.emoji} ${topic}`
                        )
                      ) : (
                        // For Experiential Learning Module: Render as object with emoji and text

                        <>
                          <span className="mr-2 inline-flex items-center justify-center text-xl">
                            {topic.emoji}
                          </span>
                          <span>{topic.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
              {/* Overlay Content (Appears on Hover) */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end rounded-lg bg-black bg-opacity-60 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:hidden"
                // initial={{ y: 240, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                // transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Badges */}
                <div className="mb-3 flex space-x-3">
                  <div className="grad1 helvetica-neue-bold flex items-center rounded-md px-4 py-1 text-[9.52px] text-white sm:px-3">
                    <Image
                      src={module.image1}
                      alt={`${module.title} badge`}
                      width={20}
                      height={20}
                      className="mr-[7px] h-[9.52px] w-[9.52px]"
                    />
                    {module.duration}
                  </div>

                  <span className="grad1 helvetica-neue-bold rounded-md px-3 py-1 text-[9.52px] text-white">
                    {module.location}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-EB-extrabold text-[16px] font-bold text-white sm:text-3xl">
                  {module.title}
                </h2>

                {/* Description */}
                <p className="font-helvetica-neue mt-2 text-[12px] leading-relaxed text-white sm:text-lg">
                  {module.description}
                </p>

                {/* Bullet Points */}
                <ul className="helvetica-neue-medium mt-3 space-y-1 text-xs text-white sm:text-base">
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>
                      {
                        typeof topic === "string" ? (
                          `${module.emoji} ${topic}` // For Theoretical Learning Module
                        ) : (
                          <>
                            <span className="mr-2 inline-flex items-center justify-center">
                              {topic.emoji}
                            </span>
                            <span>{topic.text}</span>
                          </>
                        ) // For Experiential Learning Module
                      }
                    </li>
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

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LearningModules() {
  return (
    <motion.section className="sm:bg-gray-100 mt-4 sm:mt-16 py-0 sm:py-20 px-4 md:px-12 text-center " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      {/* Title Section */}
      <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-[30px] md:text-6xl  text-gray-900 font-EB-extrabold">Mukherjee Fellowship</h2>
        <h3 className="text-[16px] md:text-3xl  text-gray-900 mt-0 sm:mt-2 font-helvetica-regular">Structure</h3>
      </motion.div>

      {/* Learning Modules Container */}
      <motion.div
        className="max-w-5xl mx-auto mt-8 sm:pt-12 space-y-12 text-left"
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
            description: "Before deployment, Fellows undergo intensive classroom training led by subject matter experts, covering: ",
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
            description: "After completing their training, Fellows are placed in the offices of leading public figures, gaining hands-on exposure to:",
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
            className="w-full max-w-5xl mx-auto overflow-hidden rounded-lg group "
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Section Title */}
            <h3 className="text-[12px] md:text-2xl  helvetica-neue-bold mb-4 text-black ">
              {String.fromCharCode(65 + index)}. {module.title}
            </h3>

            {/* Image Container with Hover Effect */}
            <div className="relative">
              {/* Background Image */}
              <Image src={module.image} alt={module.title} width={1000} height={600} className="w-full min-h-[400px] object-cover rounded-lg shadow-lg" />
              <motion.div
                className="hidden absolute inset-0 bg-black bg-opacity-60 lg:flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                initial={{ y: 240, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Badges */}
                <div className="flex space-x-1 sm:space-x-3 mb-3">
                  <span className="grad1 text-white px-1 sm:px-3 py-1 text-sm helvetica-neue-bold rounded-md flex items-center">
                    <Image src={module.image1} alt={`${module.title} badge`} width={20} height={20} className="mr-0 sm:mr-2" />
                    {module.duration}
                  </span>
                  <span className="grad1 text-white px-3 py-1 text-sm helvetica-neue-bold rounded-md">{module.location}</span>
                </div>

                {/* Title */}
                <h2 className="text-white orelega-one-regular text-[12px] sm:text-3xl ">{module.title}</h2>

                {/* Description */}
                <p className="text-white helvetica-neue-bold text-[12px] sm:text-lg mt-2 leading-relaxed">{module.description}</p>

                {/* Bullet Points */}
                <ul className="text-white text-xs sm:text-base helvetica-neue-medium mt-3 space-y-1">
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
                           <span className="text-xl">
                                {module.emoji}
                                </span>
                            <span className="helvetica-neue-bold">
                             
                              {topic.split(" - ")[0] || topic}
                            </span>
                            {" - "}
                            <span className="helvetica-neue-medium">{topic.split(" - ")[1] || ""}</span>
                          </>
                        ) : (
                          // For Experiential Learning Module: Render as string with emoji
                          `${module.emoji} ${topic}`
                        )
                      ) : (
                        // For Experiential Learning Module: Render as object with emoji and text

                        <>
                          <span className="inline-flex items-center justify-center text-xl mr-2">{topic.emoji}</span>
                          <span>{topic.text}</span>
                        </>
                      )}
                    </li>
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
                  <span className="grad1 text-white px-4 sm:px-3 py-1 text-sm helvetica-neue-bold rounded-md flex">
                    <Image src={module.image1} alt={`${module.title} badge`} width={20} height={20} className="" />
                    {module.duration}
                  </span>
                  <span className="grad1 text-white px-3 py-1 text-sm helvetica-neue-bold rounded-md">{module.location}</span>
                </div>

                {/* Title */}
                <h2 className="text-white font-playfair-regular text-[12px] sm:text-3xl font-bold">{module.title}</h2>

                {/* Description */}
                <p className="text-white helvetica-neue-bold text-[12px] sm:text-lg mt-2 leading-relaxed">{module.description}</p>

                {/* Bullet Points */}
                <ul className="text-white text-xs sm:text-base helvetica-neue-medium mt-3 space-y-1">
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>
                      {
                        typeof topic === "string" ? (
                          `${module.emoji} ${topic}` // For Theoretical Learning Module
                        ) : (
                          <>
                            <span className="inline-flex items-center justify-center mr-2">{topic.emoji}</span>
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

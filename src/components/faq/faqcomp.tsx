"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "Who can apply for the Fellowship?",
      answer:
        "The Fellowship welcomes young professionals and final-year students aspiring to build careers in policy and political consulting. If you are still in college, we recommend applying for the ICPC Internship instead.",
    },
    {
      question: "Is there any age limit to apply for this Fellowship?",
      answer:
        "Yes. Applicants must be 25 years or younger as of July 1, 2025 (born on or after July 1, 2000).",
    },
    {
      question: "Will Fellows receive a stipend?",
      answer:
        "Yes. For the period of the Fellowship including the training module, Fellows will receive a stipend of ₹ 50,000 per month.",
    },
    {
      question:
        "Can the Fellows pursue any other professional or academic engagement?",
      answer:
        "No. The Mukherjee Fellowship is a full-time program, requiring complete dedication during the fellowship period.",
    },
    {
      question:
        "Can professionals pursue both the ICPC Internship and the Mukherjee Fellowship?",
      answer:
        "No. The ICPC Internship is for penultimate-year students, while the Mukherjee Fellowship is designed for graduates and professionals.",
    },
    {
      question: "Will those who complete the Fellowship receive a Certificate?",
      answer:
        "Yes. Upon successful completion, Fellows will receive a course completion certificate from the Nation First Policy Research Centre, along with recommendation letters from their assigned offices.",
    },
    // {
    //   question:
    //     "Can the Fellows continue working with their representatives post the completion of the Fellowship?",
    //   answer: "Yes, based on performance and opportunities available.",
    // },
    {
      question: "Will the Fellows be provided any post Fellowship support?",
      answer:
        "Fellows will receive career placement support in government, corporate, and policy consulting sectors, based on their performance and potential.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle FAQ answer visibility
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search input
  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 xl:px-0">
      {/* Heading with Animation */}
      <motion.h2
        className="font-EB-extrabold mt-6 text-center text-2xl text-black sm:mt-8 sm:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="font-helvetica-regular mt-[7px] leading-4 sm:leading-tight  text-center text-xs  text-[#1E1E1E] sm:text-2xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Applications for our Fellowship open in the months of May-June. Till
        then, you can connect with us on our blogs and social media handles.
      </motion.p>

      {/* FAQ Items with Staggered Appearance */}
      <motion.div
        className="mt-12 space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
          },
        }}
      >
        <div>
          <dl className="z-50 mt-8 space-y-4 divide-y divide-gray-900/10">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-2xl border shadow-xl hover:bg-gray-50"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { ease: "easeIn" },
                    },
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  {/* Question with Fixed Increased Height */}
                  <div
                    className="flex cursor-pointer items-center justify-between p-4 sm:p-10" // Increased padding to p-6 for more height
                    onClick={() => toggleFAQ(index)}
                  >
                    <span
                      className={`helvetica-neue-bold text-xs sm:text-2xl ${
                        openIndex === index
                          ? "text-[#FB7165]"
                          : "text-[#FB7165]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {openIndex === index ? (
                        <FaMinus className="h-5 w-5 text-[#FB7165]" />
                      ) : (
                        <FaPlus className="h-5 w-5 text-gray-600" />
                      )}
                    </motion.div>
                  </div>

                  {/* Answer with Smooth Transition */}
                  <motion.div
                    initial={false}
                    animate={{ height: openIndex === index ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="helvetica-neue-regular leading-tight grad1 rounded-b-2xl px-4 py-3 text-xs  text-white sm:text-lg"
                      animate={{ opacity: openIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="helvetica mt-4 text-center text-gray-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                No results found for {searchQuery}
              </motion.p>
            )}
          </dl>
        </div>
      </motion.div>

      {/* Search Bar with Animation */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Ask a question"
          className="w-full rounded-lg border p-3 text-gray-700 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>
    </section>
  );
}

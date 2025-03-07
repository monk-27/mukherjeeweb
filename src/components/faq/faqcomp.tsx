



"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "Who can apply for the Fellowship?",
      answer:
        "Academic background is no bar for applying for the Fellowship. However, the Fellowship particularly caters to young professionals and final-year graduate students who envision a career in policy development and political consultancy. If you are not a final-year student, you are suggested to partake in the ICPC internship.",
    },
    {
      question: "Is there any age limit to apply for this Fellowship?",
      answer:
        "There is no strict age limit, but it is designed for young professionals and students.",
    },
    {
      question: "Will Fellows receive a stipend?",
      answer: "Yes, selected Fellows receive a stipend during the program.",
    },
    {
      question:
        "Can the Fellows pursue any other professional or academic engagement?",
      answer:
        "Fellows are expected to commit full-time, limiting other engagements.",
    },
    {
      question:
        "Can professionals pursue both the ICPC Internship and the Mukherjee Fellowship?",
      answer: "No, candidates must choose between the two programs.",
    },
    {
      question: "Will those who complete the Fellowship receive a Certificate?",
      answer: "Yes, successful Fellows will receive an official certificate.",
    },
    {
      question:
        "Can the Fellows continue working with their representatives post the completion of the Fellowship?",
      answer: "Yes, based on performance and opportunities available.",
    },
    {
      question: "Will the Fellows be provided any post Fellowship support?",
      answer:
        "Yes, career support and networking opportunities will be provided.",
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
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 px-4 xl:px-0 max-w-7xl mx-auto">
      {/* Heading with Animation */}
      <motion.h2
        className="text-5xl font-bold text-black text-center Abril_font mt-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="text-gray-700 mt-4 text-center helvetica text-xl"
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
          <dl className="mt-8 space-y-6 divide-y divide-gray-900/10 z-50">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:bg-gray-50"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  {/* Question */}
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer transition-all duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span
                      className={`font-semibold text-lg helvetica-neue-bold ${
                        openIndex === index ? "text-[#FB7165]" : "text-[#FB7165] p-4"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {openIndex === index ? (
                        <FaMinus className="text-[#FB7165] w-5 h-5" />
                      ) : (
                        <FaPlus className="text-gray-600 w-5 h-5" />
                      )}
                    </motion.div>
                  </div>

                  {/* Answer with Smooth Transition */}
                  <AnimatePresence mode="wait">
                    {openIndex === index && (
                      <motion.div
                        key={`answer-${index}`} // Unique key for AnimatePresence
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          // className="text-lg leading-7 rounded-b-2xl px-4 py-3 helvetica grad1 text-white"
                          className={`text-lg leading-7 rounded-b-2xl px-4 py-3 helvetica grad1 text-white ${
                            openIndex === index ? "" : " p-4"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="text-gray-500 mt-4 helvetica text-center"
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
          placeholder="Search for a question..."
          className="w-full p-3 border rounded-lg shadow-md focus:outline-none text-gray-700 transition-all duration-300 focus:ring-2 focus:ring-orange-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>
    </section>
  );
}

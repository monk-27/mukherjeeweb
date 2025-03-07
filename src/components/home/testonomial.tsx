"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/VanathiSriNivasan 2.png",
      text: "The Mukherjee Fellow has been sincere, proactive, and conducted herself professionally. She efficiently handled all legislative work for the office. I suggest that future Fellows be taught to develop outreach programs to enhance their contributions further.",
      name: "Smt Vanathi Srinivasan ",
      position: "MLA, Tamil Nadu",
    },
    {
      image: "/test2.png",
      text: "The Fellow has exhibited outstanding political communication skills and has been praised for her tenacity and quick learning. She is highly receptive to feedback, and her presentation of data and issues as briefs has been very effective.",
      name: "Shri Baijayant ‘Jay’ Panda",
      position: "Member of Parliament, Kendrapara",
    },
    {
      image: "/test1.png",
      text: "The Fellows in our office worked closely on the ground with volunteers from various allied organisations. Their knowledge of the Marathi electorate was invaluable to our team, greatly contributing to the election campaign. We found the Fellows to be a key value add, particularly due to their proficiency in Marathi. We are considering the option of permanently integrating the two into our office.",
      name: "Shri Piyush Goyal",
      position: "Minister of Commerce & Industry, India",
    },
    {
      image: "/test2.png",
      text: "The Fellow played a crucial role in policy research and execution...",
      name: "Shri Ravi Shankar Prasad",
      position: "Former IT Minister, India",
    },
  ];

  return (
    <motion.section
      className="py-24 px-4 grid grid-cols-3 md:px-12 bg-white relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section with Animation */}
      <motion.div
        className="col-span-3 lg:col-span-1 place-content-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-20 lg:mb-8 text-center Abril_font">
          Testimonials
        </h2>
      </motion.div>

      {/* Swiper Section with Animation */}
      <motion.div
        className="col-span-3 lg:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="absolute bg-gradient-to-r from-gray-100 to-[#fc8174]   w-1/2 right-0 h-[70vh] md:h-[70vh] lg:h-[60vh] top-44 lg:top-11"></div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 relative m-3 mb-8"
                style={{ boxShadow: "0px 0px 7px #000" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image & Testimonial Content */}
                <div className="flex flex-col items-center justify-center lg:flex-row space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={240}
                    height={288}
                    className="w-60 h-72 rounded-md object-cover"
                  />
                  {/* Testimonial Text */}
                  <div className="flex flex-col justify-between h-full mt-8 lg:mt-0">
                    <p className="text-gray-600 text-xl italic helvetica-neue">
                      <img src="/testo1.png" className="h-12 opacity-40" />
                      {testimonial.text}
                      <div className=" flex justify-end">
                        <img src="/testo2.png" className="h-12 opacity-40" />
                      </div>
                    </p>
                    <div>
                      <h4 className="font-semibold mt-4 text-right text-black">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 text-right">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}

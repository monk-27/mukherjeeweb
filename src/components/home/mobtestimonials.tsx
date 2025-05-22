"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function TestimonialsMob() {
  const testimonials = [
    {
      text: "The Mukherjee Fellows in our office displayed remarkable professionalism, work ethic and political attitude. They embraced the work promptly and established a close connection with on ground volunteers. Their knowledge of the Marathi electorate was invaluable to our team, greatly contributing to the election campaign!",
      name: "Shri Piyush Goyal",
      position: "Minister of Commerce & Industry, India",
      image: "/test/1.png",
    },
    {
      text: "The Mukherjee Fellow in our office made invaluable contributions across various domains displaying exceptional professionalism and dedication. His political work was outstanding including work on issue briefs and talking pointers. His policy work was exceptional too with his contribution to the CM Dashboard Project invaluable.",
      name: "Dr Pramod Sawant ",
      position: "Chief Minister, Goa",
      image: "/test/2.png",
    },
    {
      text: "The Mukherjee Fellow has shown exceptional reliability and zeal throughout her fellowship. During the General Elections of 2024, she skillfully managed the entire Assembly Constituency of Mahanga, demonstrating her capability and dedication. The Fellow’s overall performance has been commendable.",
      name: "Shri Baijayant ‘Jay’ Panda",
      position: "Member of Parliament, Kendrapara",
      image: "/test/3.png",
    },
    {
      text: "The Mukherjee Fellow has been sincere, proactive, and conducted herself professionally. She efficiently handled all legislative work for the office. I suggest that future Fellows be taught to develop outreach programs to enhance their contributions further.",
      name: "Smt Vanathi Srinivasan",
      position: "MLA, Tamil Nadu",
      image: "/test/4.png",
    },
  ];

  return (
    <motion.section
      className="relative grid grid-cols-3 bg-white px-4 py-12 sm:py-28 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section with Animation */}
      <motion.div
        className="col-span-3 place-content-center lg:col-span-1"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-EB-extrabold text-grad mb-2 text-center text-2xl">
          Testimonials
        </h2>
      </motion.div>

      {/* Swiper Section with Animation */}
      <motion.div
        className="relative col-span-3 shadow-md lg:col-span-2"
        // style={{ boxShadow: "rgb(131 131 131) 0px 0px 7px" }}

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Swiper Slider with Navigation */}
        <div className="relative flex items-center justify-center">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={1000}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="w-full max-w-4xl"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative m-3 mb-8 bg-white p-6"
                  // style={{ boxShadow: "rgb(131 131 131) 0px 0px 7px" }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {/* Image & Testimonial Content */}
                  <div className="grid min-h-[400px] grid-cols-3 place-content-center items-center justify-center gap-1">
                    <div className="col-span-3 flex place-content-center items-center justify-center lg:col-span-1">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={199}
                        height={185}
                        className="w-50 h-45 rounded-md object-cover"
                      />
                    </div>
                    {/* Testimonial Text */}
                    <div className="col-span-3 mt-8 flex h-full flex-col place-content-center justify-between lg:col-span-2 lg:mt-0">
                      <div className="helvetica-neue-regular text-center text-xs italic text-gray-600">
                        <div className="flex justify-start">
                          <img
                            src="/testo1.png"
                            className="h-[11.196px]"
                            alt="quote start"
                          />
                        </div>

                        <p className="text-[11.926px] text-[#4F4F4F]">
                          {testimonial.text}
                        </p>

                        <div className="flex justify-end">
                          <img
                            src="/testo2.png"
                            className="h-[11.196px]"
                            alt="quote end"
                          />
                        </div>
                      </div>

                      {/* Name and Position Centered */}
                      <div className="text-center">
                        <h4 className="font-EB-extrabold text-grad text-[13.25px]">
                          {testimonial.name}
                        </h4>
                        <p className="helvetica-neue-regular text-[9.275px] text-base text-[#555]">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation Arrows Positioned Outside */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform">
            <div className="swiper-button-prev"></div>
          </div>
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform">
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

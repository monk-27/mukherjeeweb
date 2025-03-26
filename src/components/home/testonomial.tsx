

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    // {
    //   image: "/VanathiSriNivasan 2.png",
    //   text: "The Mukherjee Fellow has been sincere, proactive, and conducted herself professionally. She efficiently handled all legislative work for the office. I suggest that future Fellows be taught to develop outreach programs to enhance their contributions further.",
    //   name: "Smt Vanathi Srinivasan ",
    //   position: "MLA, Tamil Nadu",
    // },
    // {
    //   image: "/test2.png",
    //   text: "The Fellow has exhibited outstanding political communication skills and has been praised for her tenacity and quick learning. She is highly receptive to feedback, and her presentation of data and issues as briefs has been very effective.",
    //   name: "Shri Baijayant ‘Jay’ Panda",
    //   position: "Member of Parliament, Kendrapara",
    // },
    // {
    //   image: "/test1.png",
    //   text: "The Fellows in our office worked closely on the ground with volunteers from various allied organisations. Their knowledge of the Marathi electorate was invaluable to our team, greatly contributing to the election campaign. We found the Fellows to be a key value add, particularly due to their proficiency in Marathi. We are considering the option of permanently integrating the two into our office.",
    //   name: "Shri Piyush Goyal",
    //   position: "Minister of Commerce & Industry, India",
    // },
    // {
    //   image: "/test2.png",
    //   text: "The Fellow played a crucial role in policy research and execution...",
    //   name: "Shri Ravi Shankar Prasad",
    //   position: "Former IT Minister, India",
    // },




    {
      text:
        "The MukherJee Fellows in our office displayed remarkable professionalism, work ethic and political attitude. They embraced the work promptly and established a close connection with on ground volunteers. Their knowledge of the Marathi electorate was invaluable to our team, greatly contributing to the election campaign!",
      name: "Shri Piyush Goyal",
      position: "Minister of Commerce & Industry, India",

      image: "/piyushgoyal.png", 
    },
    {
      text:
        "The Mukherjee Fellow in our office made invaluable contributions across various domains displaying exceptional professionalism and dedication. His political work was outstanding including work on issue briefs and talking pointers. His policy work was exceptional too with his contribution to the CM Dashboard Project invaluable.",
      name: "Dr Pramod Sawant ",
      position: "Chief Minister, Goa",
      image: "/image12.png",
    },
    {
      text:
        "The Mukherjee Fellow has shown exceptional reliability and zeal throughout her fellowship. During the General Elections of 2024, she skillfully managed the entire Assembly Constituency of Mahanga, demonstrating her capability and dedication. The Fellow’s overall performance has been commendable.",
        name: "Shri Baijayant ‘Jay’ Panda",
        position: "Member of Parliament, Kendrapara",
      image: "/image 2.png",
    },
    {
      text:
        "The Mukherjee Fellow has been sincere, proactive, and conducted herself professionally. She efficiently handled all legislative work for the office. I suggest that future Fellows be taught to develop outreach programs to enhance their contributions further.a",
        name: "Smt Vanathi Srinivasan",
        position: "MLA, Tamil Nadu:",
      image: "/image3.png",
    },
  ];

  return (
    <motion.section
      className="py-28 px-4 grid grid-cols-3 md:px-12 bg-white relative"
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
        <h2 className="text-5xl abril-fatface-bold text-gray-900 mb-20 lg:mb-16 text-center Abril_font">
          Testimonials
        </h2>
      </motion.div>

      {/* Swiper Section with Animation */}
      <motion.div
        className="col-span-3 lg:col-span-2 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute w-1/2 right-0 h-[70vh] md:h-[70vh] lg:h-[570px] top-52 lg:top-16"
          style={{
            background:
              "linear-gradient(to right, #FECAB8 0%, #FEA48F 29%, #FC7F6F 100%)",
          }}
        ></div>

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
                  className="bg-white shadow-lg p-6 relative m-3 mb-8"
                  style={{ boxShadow: "rgb(131 131 131) 0px 0px 7px" }}
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
                  <div className="grid grid-cols-3 items-center justify-center place-content-center min-h-[400px] gap-6">
                    <div className="place-content-center flex items-center justify-center col-span-3 lg:col-span-1">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={240}
                        height={288}
                        className="w-60 h-72 rounded-md object-cover"
                      />
                    </div>
                    {/* Testimonial Text */}
                    <div className="place-content-center col-span-3 lg:col-span-2 flex flex-col justify-between h-full mt-8 lg:mt-0">
                      <p className="text-gray-600 text-xl italic helvetica-neue-medium text-center">
                        <img src="/testo1.png" className="h-12 top-12 absolute" />
                        {testimonial.text}
                        <div className="flex justify-end">
                          <img src="/testo2.png" className="h-12" />
                        </div>
                      </p>
                      <div>
                        <h4 className="helvetica-neue-bold mt-4 text-right text-black">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 text-right helvetica-neue-regular">
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
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
            <div className="swiper-button-prev"></div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

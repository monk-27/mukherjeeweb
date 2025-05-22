// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaShareAlt } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// export default function BlogSection() {
//   const tabs = ["Featured", "Educational", "Events", "By Fellows"];
//   const [activeTab, setActiveTab] = useState("Featured");

//   const blogs = [
//     {
//       id: 1,
//       category: "Featured",
//       image: "/blog1.png",
//       author: "Mr. Yuyu Hanma",
//       date: "24/06/2024",
//       title:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       excerpt:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
//     },
//     {
//       id: 2,
//       category: "Featured",
//       image: "/image 9.png",
//       author: "Dr. Alex Smith",
//       date: "20/06/2024",
//       title: "Educational Insights: How Policy Impacts Daily Life.",
//       excerpt:
//         "Educational blogs help understand how laws and policies impact society. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
//     },
//     {
//       id: 3,
//       category: "Featured",
//       image: "/imagemeet.png",
//       author: "Ms. Sarah Johnson",
//       date: "18/06/2024",
//       title: "Upcoming Fellowship Events and Workshops in 2024.",
//       excerpt:
//         "Stay updated with upcoming events in the Mukherjee Fellowship. Networking, learning, and exploring opportunities in policy-making...",
//     },
//     {
//       id: 4,
//       category: "Educational",
//       image: "/blog1.png",
//       author: "Dr. Alex Smith",
//       date: "20/06/2024",
//       title: "Educational Insights: How Policy Impacts Daily Life.",
//       excerpt:
//         "Educational blogs help understand how laws and policies impact society. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
//     },
//     {
//       id: 5,
//       category: "Events",
//       image: "/blog1.png",
//       author: "Ms. Sarah Johnson",
//       date: "18/06/2024",
//       title: "Upcoming Fellowship Events and Workshops in 2024.",
//       excerpt:
//         "Stay updated with upcoming events in the Mukherjee Fellowship. Networking, learning, and exploring opportunities in policy-making...",
//     },
//     {
//       id: 6,
//       category: "By Fellows",
//       image: "/blog1.png",
//       author: "Fellow - Rahul Verma",
//       date: "15/06/2024",
//       title: "A Fellow’s Journey in the Mukherjee Fellowship Program.",
//       excerpt:
//         "This is a real story from a fellow who experienced first-hand the transformative impact of policy, politics, and governance...",
//     },
//   ];

//   const filteredBlogs = blogs.filter((blog) => blog.category === activeTab);

//   return (
//     <section className="py-16 px-4 xl:px-0 max-w-7xl mx-auto">
//       {/* Heading with Animation */}
//       <motion.h2
//         className="text-2xl sm:text-6xl  text-center text-gray-900 font-EB-extrabold mt-6 sm:mt-8"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         Blogs
//       </motion.h2>
//       <motion.p
//         className="text-gray-700 text-center mt-4 font-helvetica-regular text-xs sm:text-2xl"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         Explore our blogs for new perspectives, 
//         insights, and stories.
//       </motion.p>

//       {/* Tabs with Animation */}
//       <motion.div
//         className="flex justify-center space-x-6 mt-12 pb-4"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.3 }}
//         viewport={{ once: true }}
//       >
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={`text-sm sm:text-lg font-semibold ${
//               activeTab === tab
//                 ? "text-gray-900 border-b-2 border-red-500 helvetica-neue-bold "
//                 : "text-gray-800 helvetica-neue-regular"
//             } `}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </motion.div>

//       {/* Blog Cards with Transition Animation */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeTab}
//           className="mt-8 space-y-6 "
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//         >
//           {filteredBlogs.map((blog) => (
//             <motion.div
//               key={blog.id}
//               className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadowMy group"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Image with Hover Animation */}
//               <div className="md:w-1/3 relative cursor-pointer overflow-hidden group h-64 m-4">
//                 <motion.div
//                   className="absolute inset-0 bg-black opacity-60 group-hover:opacity-0 transition-opacity duration-500"
//                   initial={{ opacity: 0.6 }}
//                   whileHover={{ opacity: 0 }}
//                 ></motion.div>
//                 <Image
//                   src={blog.image}
//                   alt={blog.title}
//                   width={400}
//                   height={250}
//                   className="w-full h-full object-cover filter grayscale transition duration-300 group-hover:grayscale-0"
//                 />
//               </div>

//               {/* Content with Motion Effect */}
//               <div className="p-6 md:w-2/3 relative">
//                 <div className="flex justify-between items-center">
//                   <p className="text-gray-700 text-sm ont-helvetica-regular">
//                     {blog.author} &nbsp; | &nbsp; {blog.date}
//                   </p>
//                   <FaShareAlt className="text-gray-600 hover:text-gray-900 cursor-pointer" />
//                 </div>
//                 <motion.h3
//                   className="font-bold text-2xl mt-2 text-gray-800 font-helvetica-regular"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   {blog.title}
//                 </motion.h3>
//                 <motion.p
//                   className="text-gray-700 mt-2  text-xl ont-helvetica-regular"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                   viewport={{ once: true }}
//                 >
//                   {blog.excerpt}
//                 </motion.p>

//                 {/* Read More & Share */}
//                 <div className="flex justify-between items-center mt-4">
//                   <a
//                     href="#"
//                     className="text-grad font-semibold helvetica-neue-bold underline"
//                     style={{ textDecoration: "underline" }}
//                   >
//                     Continue reading
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// }
"use client";
import { useState } from "react";
import Image from "next/image";
// import { FaShareAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogSection() {
  const tabs = ["Featured", "Educational", "Events", "By Fellows"];
  const [activeTab, setActiveTab] = useState("Featured");

  const blogs = [
    {
      id: 1,
      category: "Featured",
      image: "/blog1.png",
      author: "Mukherjee Fellowship",
      date: "February 5, 2025",
      title:
        "India's First Coal Exchange: Key to Enhance Market Transparency, Efficiency and Sustainability",
      excerpt:
        "In this age of industrial advancement and digital empowerment, ensuring energy security is one of India’s key areas of focus moving towards a truly Atmanirbhar Bharat. In this regard, Coal has been the backbone of India’s energy sector, powering over 55% of the nation’s energy needs.",
      link: "https://www.linkedin.com/pulse/indias-first-coal-exchange-key-enhance-market-transparency-p74fc/?trackingId=dZf3QoHlpNHxG%2Fk5aLY6ew%3D%3D",
    },
    {
      id: 2,
      category: "Featured",
      image: "/image 9.png",
      author: "Mukherjee Fellowship",
      date: "February 4, 2025",
      title: "Rising East: BJP's Northeast Success Story",
      excerpt:
        "What does the name Northeast India conjure up for you? Is it the mesmerising sight of beautiful mountains, verdant valleys, tumbling waterfalls, and magnificent rivers? Although this region's natural beauty is unmatched, the Northeast is much more than just a breathtaking sight.",
      link: "https://www.linkedin.com/pulse/rising-east-bjps-northeast-success-story-mukherjee-fellowship-xbfrc/?trackingId=zsjVURrerwcP7cEp%2B1ml8w%3D%3D",
    },
    {
      id: 3,
      category: "Featured",
      image: "/imagemeet.png",
      author: "Mukherjee Fellowship",
      date: "January 31, 2025",
      title: "India Hosting the Olympics",
      excerpt:
        "Last year, the Indian Olympic Association submitted a bid to host the 2036 Olympics and Paralympics, competing with England, Egypt, Chile, Indonesia, Turkey, Saudi Arabia, and Qatar. ",
      link: "https://www.linkedin.com/pulse/india-hosting-olympics-mukherjee-fellowship-nowzc/?trackingId=8m0ePuFNS94baVH%2F6RNsuQ%3D%3D",
    },
    {
      id: 4,
      category: "Featured",
      image: "/imagemeet.png",
      author: "Mukherjee Fellowship",
      date: "January 28, 2025",
      title: "Cleared for Takeoff: Bharat’s Journey to Aviation Supremacy",
      excerpt:
        "In a nation of boundless aspirations, few industries mirror India’s sky-high ambitions as vividly as civil aviation. Airports have become, in today's world, not just transit hubs, but also gateways to dreams, representations of economic development, and reflections of the global stature of nations.",
      link: "https://www.linkedin.com/pulse/cleared-takeoff-bharats-journey-aviation-supremacy-16hcc/?trackingId=1e9dOwho9z2EMxqxQ2ADZQ%3D%3D",
    },
  ];

  const filteredBlogs = blogs.filter((blog) => blog.category === activeTab);

  return (
    <section className="py-16 px-4 xl:px-0 max-w-7xl mx-auto">
      {/* Heading with Animation */}
      <motion.h2
        className="text-2xl sm:text-6xl text-center text-gray-900 font-EB-extrabold mt-6 sm:mt-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Blogs
      </motion.h2>
      <motion.p
        className="text-gray-700 text-center mt-4 font-helvetica-regular text-xs sm:text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Explore our blogs for new perspectives,
        insights, and stories.
      </motion.p>

      {/* Tabs with Animation */}
      <motion.div
        className="flex justify-center space-x-6 mt-12 pb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm sm:text-lg font-semibold ${activeTab === tab
                ? "text-gray-900 border-b-2 border-red-500 helvetica-neue-bold"
                : "text-gray-800 helvetica-neue-regular"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Blog Cards with Transition Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="mt-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadowMy group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image with Hover Animation */}
              <div className="md:w-1/3 relative cursor-pointer overflow-hidden group h-64 m-4">
                <motion.div
                  className="absolute inset-0 bg-black opacity-60 group-hover:opacity-0 transition-opacity duration-500"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0 }}
                ></motion.div>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover filter grayscale transition duration-300 group-hover:grayscale-0"
                />
              </div>

              {/* Content with Motion Effect */}
              <div className="p-6 md:w-2/3 relative">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 text-sm font-helvetica-regular">
                    {blog.author}      {blog.date}
                  </p>
                  {/* <FaShareAlt className="text-gray-600 hover:text-gray-900 cursor-pointer" /> */}
                </div>
                <motion.h3
                  className="font-EB-extrabold text-2xl mt-2 text-gray-800 font-helvetica-regular"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {blog.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 mt-2 text-lg font-helvetica-regular"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {blog.excerpt}
                </motion.p>

                {/* Read More & Share */}
                <div className="flex justify-between items-center mt-4 ">
                 <a
  href={blog.link}
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold helvetica-neue-bold bg-gradient-to-r from-[#fb7165] to-[#fe8854] bg-clip-text text-transparent relative inline-block"
>
  <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#fb7165] after:to-[#fe8854]">
    Continue reading
  </span>
</a>


                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

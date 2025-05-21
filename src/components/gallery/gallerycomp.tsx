


// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Dialog } from "@headlessui/react";
// import {
//   XMarkIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "@heroicons/react/24/solid";
// import { motion } from "framer-motion";

// export default function ImageGallery() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     {
//       src: "/images/gal1.jpeg",
//       alt: "Government Building",
//       className: "col-span-1",
//       title: "Meeting Image",
//       description: "Fill out all the 2018-2017",
//     },
//     {
//       src: "/gallery4.png",
//       alt: "Group of people",
//       className: "col-span-2",
//       title: "Meeting Image",
//       description: "Fill out all the 2018-2017",
//     },
//     {
//       src: "/gallery6.png",
//       alt: "Government Building Wide",
//       className: "col-span-2",
//       title: "Meeting Image",
//       description: "Fill out all the 2018-2017",
//     },
//     {
//       src: "/gallery3.png",
//       alt: "Meeting Session",
//       className: "col-span-1",
//       title: "Meeting Image",
//       description: "Fill out all the 2018-2017",
//     },
//     {
//       src: "/gallery6.png",
//       alt: "Government Building Wide",
//       className: "col-span-2",
//       title: "Meeting Image",
//       description: "Fill out all the 2018-2017",
//     },
//     {
//       src: "/gallery6.png",
//       alt: "Government Building Wide",
//       className: "col-span-2",
//       title: "Meeting Image",
//       description: "Fill out all the 2018-2017",
//     },
//     {
//       src: "/gallery6.png",
//       alt: "Government Building Wide",
//       className: "col-span-2",
//       title: "Meeting Image",
//       description: "Fill out all the 2018-2017",
//     },
//     {
//       src: "/gallery6.png",
//       alt: "Government Building Wide",
//       className: "col-span-2",
//       title: "Meeting Image",
//       description: "Fill out all the 2018-2017",
//     },
//   ];

//   const openModal = (index: number) => {
//     setCurrentIndex(index);
//     // console.log("curent index",currentIndex)
//     setIsOpen(true);
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <section className="max-w-7xl mx-auto py-10 px-4 xl:px-0 text-center">
//       {/* Title with Fade-In Effect */}
//       <motion.h2
//         className="text-5xl text-gray-900 font-playfair-black mt-8"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         Image Gallery
//       </motion.h2>
//       <motion.p
//         className="text-gray-700 mt-4 font-helvetica-regular text-xl"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         See our Fellows in action!
//       </motion.p>
//       <motion.div
//         className="grid grid-cols-3 gap-4 mt-12"
//         initial={{ opacity: 0 }} // Initial opacity for the grid
//         animate={{ opacity: 1 }} // Animate opacity separately
//         whileInView={{ opacity: 1 }} // Trigger for all children
//         viewport={{ once: false, amount: 0.3 }}
//         transition={{ duration: 0.5, ease: "easeOut" }} // Synchronized timing
//       >
//         {images.slice(0, 4).map((image, index) => (
//           <motion.div
//             key={index}
//             className={`cursor-pointer relative overflow-hidden group ${image.className}`}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => openModal(index)}
//             initial={{ scale: 0 }} // Start scaled down
//             whileInView={{ scale: 1 }} // Expand to full size
//             style={{ transformOrigin: "left" }} // Expand from each image's left edge
//             transition={{ duration: 0.5, ease: "easeOut" }} // Match parent timing
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={500}
//               height={500}
//               className="w-full h-full object-cover max-h-96 object-top filter grayscale transition duration-300 group-hover:grayscale-0"
//             />

//             {/* Title Appearing from Bottom (Hover on Whole Image) */}
//             <motion.div
//               className="absolute inset-0 flex items-end justify-center pb-4 mx-4 text-white text-center opacity-0 transition-opacity duration-300 font-helvetica-extrabold"
//               initial={{ y: 20, opacity: 0 }}
//               whileHover={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//             >
//               <div className="bg-white text-black px-4 py-2 w-full">
//                 {image.title}
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}

//         {/* Modal */}
//         <Dialog
//           open={isOpen}
//           onClose={() => setIsOpen(false)}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//         >
//           <motion.div
//             className="relative mx-auto max-w-full max-h-[90vh] flex items-center gap-4 bg-white p-12 rounded-xl"
//             initial={{ x: "60%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-2 right-2 bg-white p-2 rounded-full"
//               onClick={() => setIsOpen(false)}
//             >
//               <XMarkIcon className="w-5 h-5 text-black" />
//             </button>

//             {/* Navigation Buttons */}
//             <button
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
//               onClick={prevImage}
//             >
//               <ChevronLeftIcon className="w-6 h-6 text-black" />
//             </button>
//             <button
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
//               onClick={nextImage}
//             >
//               <ChevronRightIcon className="w-6 h-6 text-black" />
//             </button>

//             {/* Main Image Display */}
//             <div className="flex flex-col">
//               <motion.div
//                 className="text-left text-gray-900 text-2xl font-helvetica-regular"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//               >
//                 {images[currentIndex].title}
//               </motion.div>
//               <motion.div
//                 className="text-left text-gray-900 text-lg font-helvetica-regular mb-4"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//               >
//                 {images[currentIndex].description}
//               </motion.div>
//               <Image
//                 src={images[currentIndex].src}
//                 alt={images[currentIndex].alt}
//                 width={600}
//                 height={600}
//                 className="max-w-full max-h-[60vh] object-contain"
//               />
//             </div>

//             {/* Thumbnail Preview (VERTICAL ON RIGHT) */}
//             <div className="flex flex-col gap-2 overflow-y-auto max-h-[90vh] p-2">
//               {images.map((image, index) => (
//                 <button key={index} onClick={() => setCurrentIndex(index)}>
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     width={80}
//                     height={80}
//                     className={`w-16 h-16 object-cover border-2 ${
//                       index === currentIndex
//                         ? "border-gray-900"
//                         : "border-transparent"
//                     } transition-all duration-200`}
//                   />
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         </Dialog>
//       </motion.div>
//     </section>
//   );
// }
"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMainImage, setSelectedMainImage] = useState(0);

  const images = [
    {
      main: {
        src: "/images/gal1.jpeg",
        alt: "Government Building",
        className: "col-span-1",
        title: "Mukherjee Fellows of the 2023-24 cohort on a visit to the parliament.",
        description: "",
      },
      gallery: [
        {
          src: "/images/gal1.jpeg",
          alt: "Government Building",
          title: "Mukherjee Fellows of the 2023-24 cohort on a visit to the parliament.",
          description: "",
        },
        {
          src: "/images/gal2.jpeg",
          alt: "Meeting Detail 1",
          title: "Mukherjee Fellows of the 2023-24 cohort on a visit to the parliament.",
          description: "",
        },
        {
          src: "/images/gal3.jpeg",
          alt: "Meeting Detail 2",
          title: "",
          description: "Mukherjee Fellows of the 2023-24 cohort on a visit to the parliament.",
        },
      ],
    },
    {
      main: {
        src: "/images/gal4.jpeg",
        alt: "Group of people",
        className: "col-span-2",
        title: "Chief Economic Advisor to the Government of India Dr V. Anantha Nageswaran addressing Mukherjee Fellows",
        description: "",
      },
      gallery: [
        {
          src: "/images/gal4.jpeg",
          alt: "Group of people",
          title: "",
          description: "Chief Economic Advisor to the Government of India Dr V. Anantha Nageswaran addressing Mukherjee Fellows",

        },
        {
          src: "/images/gal5.jpeg",
          alt: "Group Detail 1",
          title: "",
          description: "Chief Economic Advisor to the Government of India Dr V. Anantha Nageswaran addressing Mukherjee Fellows",

        },
        {
          src: "/images/gal6.jpeg",
          alt: "Group Detail 1",
          title: "",
          description: "Chief Economic Advisor to the Government of India Dr V. Anantha Nageswaran addressing Mukherjee Fellows",

        },
        {
          src: "/images/gal7.jpeg",
          alt: "Group Detail 1",
          title: "",
          description: "Chief Economic Advisor to the Government of India Dr V. Anantha Nageswaran addressing Mukherjee Fellows",
        },
      ],
    },
    {
      main: {
        src: "/images/gal9.jpeg",
        alt: "Government Building Wide",
        className: "col-span-2",
        title: "Mukherjee Fellows at a session organised and conducted by the RIS",
        description: "Mukherjee Fellows at a session organised and conducted by the RIS",
      },
      gallery: [
        {
          src: "/images/gal9.jpeg",
          alt: "Government Building Wide",
          title: "",
          description: "Mukherjee Fellows at a session organised and conducted by the RIS",
        },
        {
          src: "/images/gal10.jpeg",
          alt: "Building Detail 1",
          title: "",
          description: "Mukherjee Fellows at a session organised and conducted by the RIS",
        },
        {
          src: "/images/gal11.jpeg",
          alt: "Building Detail 2",
          title: "",
          description: "Mukherjee Fellows at a session organised and conducted by the RIS",
        },
        {
          src: "/images/gal12.jpeg",
          alt: "Building Detail 2",
          title: "",
          description: "Mukherjee Fellows at a session organised and conducted by the RIS",
        },
        
        
      ],
    },
    {
      main: {
        src: "/images/gal16.jpg",
        alt: "Meeting Session",
        className: "col-span-1",
        title: "Professor Himanshu Rai, Director IIM Indore, addressing Mukherjee Fellows at an interactive event",
        description: "",
      },
      gallery: [
        {
          src: "/images/gal16.jpg",
          alt: "Meeting Session",
          title: "",
          description: "Professor Himanshu Rai, Director IIM Indore, addressing Mukherjee Fellows at an interactive event",
        },
        {
          src: "/images/gal17.jpeg",
          alt: "Session Detail 1",
          title: "",
          description: "Professor Himanshu Rai, Director IIM Indore, addressing Mukherjee Fellows at an interactive event",
        },
        {
          src: "/images/gal18.jpeg",
          alt: "Session Detail 1",
          title: "",
          description: "Professor Himanshu Rai, Director IIM Indore, addressing Mukherjee Fellows at an interactive event",
        },
        {
          src: "/images/gal19.jpeg",
          alt: "Session Detail 1",
          title: "",
          description: "Professor Himanshu Rai, Director IIM Indore, addressing Mukherjee Fellows at an interactive event",
        },
        
        {
          src: "/images/gal20.jpeg",
          alt: "Session Detail 1",
          title: "",
          description: "Professor Himanshu Rai, Director IIM Indore, addressing Mukherjee Fellows at an interactive event",
        },
        {
          src: "/images/gal21.jpeg",
          alt: "Session Detail 1",
          title: "",
          description: "Professor Himanshu Rai, Director IIM Indore, addressing Mukherjee Fellows at an interactive event",
        },
      ],
    }
  ];

  const openModal = (mainIndex: SetStateAction<number>, galleryIndex = 0) => {
    setSelectedMainImage(mainIndex);
    setCurrentIndex(galleryIndex);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images[selectedMainImage].gallery.length
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images[selectedMainImage].gallery.length) %
      images[selectedMainImage].gallery.length
    );
  };

  return (
    <section className="max-w-7xl mx-auto py-10 px-4 xl:px-0 text-center">
      {/* Title with Fade-In Effect */}
      <motion.h2
        className="text-2xl sm:text-6xl text-gray-900 font-EB-extrabold mt-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Image Gallery
      </motion.h2>
      <motion.p
        className="text-gray-700 mt-4 font-helvetica-regular text-lg sm:text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        See our Fellows in action!
      </motion.p>
      <motion.div
        className="grid grid-cols-3 gap-4 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer relative overflow-hidden group ${image.main.className}`}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(index)}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={image.main.src}
              alt={image.main.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover max-h-96 object-top filter grayscale transition duration-300 group-hover:grayscale-0"
            />
            {/* Title Appearing from Bottom (Hover on Whole Image) */}
            <motion.div
              className="absolute inset-0 flex items-end justify-center pb-4 mx-4 text-white text-center opacity-0 transition-opacity duration-300 font-helvetica-extrabold"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="bg-white text-black px-4 py-2 w-full">
                {image.main.title}
              </div>
            </motion.div>
          </motion.div>
        ))}
        {/* Modal */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        >
          <motion.div
            className="relative mx-auto max-w-full max-h-[90vh] flex items-center gap-4 bg-white p-12 rounded-xl"
            initial={{ x: "60%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white p-2 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-5 h-5 text-black" />
            </button>
            {/* Navigation Buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeftIcon className="w-6 h-6 text-black" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
              onClick={nextImage}
            >
              <ChevronRightIcon className="w-6 h-6 text-black" />
            </button>
            {/* Main Image Display */}
            <div className="flex flex-col">
              <motion.div
                className="text-left text-gray-900 text-2xl font-helvetica-regular"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {images[selectedMainImage].gallery[currentIndex].title}
              </motion.div>
              <motion.div
                className="text-left text-gray-900 text-lg font-helvetica-regular mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {images[selectedMainImage].gallery[currentIndex].description}
              </motion.div>
              <Image
                src={images[selectedMainImage].gallery[currentIndex].src}
                alt={images[selectedMainImage].gallery[currentIndex].alt}
                width={600}
                height={600}
                className="max-w-full max-h-[60vh] object-contain"
              />
            </div>
            {/* Thumbnail Preview (VERTICAL ON RIGHT) */}
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[90vh] p-2">
              {images[selectedMainImage].gallery.map((image, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={80}
                    className={`w-16 h-16 object-cover border-2 ${
                      index === currentIndex
                        ? "border-gray-900"
                        : "border-transparent"
                    } transition-all duration-200`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </Dialog>
      </motion.div>
    </section>
  );
}

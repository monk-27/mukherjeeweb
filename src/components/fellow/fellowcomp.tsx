"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function MeetOurFellows() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fellowsold = [
    {
      name: "Shivesh Kumar Amit ",
      image: "/shivesh.jpg",
      alt: "Shivesh Kumar Amit ",
      description:
        "From a young age, I was fascinated by politics, and its inner workings. This passion later drew me towards political science, which deepened my curiosity and interest in the world of policy and political consultancy. The Mukherjee fellowship has proven to be the ideal platform for me to explore this field. The past year in the fellowship has been an incredibly rewarding learning experience, stimulating my intellectual growth. It has significantly broadened my understanding of Indian politics and the intricacies of policymaking.",
    },
    {
      name: "Yashvi Rana",
      image: "/yashvi.jpg",
      alt: "Yashvi Rana",
      description:
        "Being part of Mukherjee Fellowship was a transformative learning experience. I was working closely with Member of Parliament Smt. Poonam Mahajan ji over the course of the fellowship and gained invaluable insights into the inner workings of parliamentary offices. This hands-on experience not only sharpened my skills in policy analysis and political engagement but also empowered me to make a tangible impact on the ground through effective collaboration and cooperation.",
    },
    {
      name: "Ujjwal Singh",
      image: "/ujjwal.jpg",
      alt: "Ujjwal Singh",

      description:
        "Driven by the excitement of working closely with a Member of Parliament and witnessing the 2024 Lok Sabha elections, I joined the Mukherjee Fellowship. My assignment with Shri Dharmendra Pradhan, particularly my three-month stint in Sambalpur, Odisha, was an eye-opening and unforgettable journey into the heart of India's democracy."
    },
    {
      name: "Utsav Utkrisht ",
      image: "/utsav.jpg",
      alt: "Utsav Utkrisht ",

      description:
        ""
    },
    {
      name: "Abhinav Narta",
      image: "/abhinav.webp",
      alt: "Abhinav Narta",
      description:
        ""
    },
    {
      name: "Yadukrishna C S",
      image: "/yadu.jpg",
      alt: "Yadukrishna C S",
      description:
        ""
    },
    {
      name: "ARUNDAS A",
      image: "/arun.jpg",
      alt: "ARUNDAS A",
      description:
        ""
    },
    {
      name: "Ananya Vinod",
      image: "/ananya.png",
      alt: "Ananya Vinod",
      description:
        ""
    },
    {
      name: "Reeva Godara",
      image: "/reeva.jpeg",
      alt: "Reeva Godara",
      description:
        ""
    },
    {
      name: "Diksha Bohra",
      image: "/diksha.jpg",
      alt: "Diksha Bohra",

      description:
        ""
    },
    {
      name: "Archana M",
      image: "/archana.jpg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Sankarshana K K",
      image: "/kk.png",
      alt: "Sankarshana K K",
      description:
        ""
    },
    // Replicating the first 9 fellows to reach 21 total
    {
      name: "Tejaswi Singh ",
      image: "/tejaswi.jpg",
      alt: "Tejaswi Singh ",
      description:
        ""
    },
    {
      name: "Pushyamitra Joshi",
      image: "/joshi.jpg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Vaishali Sukhija ",
      image: "/vaishali.jpg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Ashish Mishra",
      image: "/ashish.jpg",
      alt: "Ashish Mishra",
      description:
        ""
    },
    {
      name: "Shivansh Nagpal",
      image: "/shivansh.jpeg",
      alt: "Shivansh Nagpal",
      description:
        ""
    },
    {
      name: "Shubham Rai",
      image: "/shubham.jpeg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Aryaman Pathak",
      image: "/aryaman.jpg",

      alt: "Aryaman Pathak",
      description:
        ""
    },
    {
      name: "Ronak Pawar",
      image: "/ronak.jpg",
      alt: "Ronak Pawar",
      description:
        ""
    },
    {
      name: "Mehak Yadav",
      image: "/mehak.jpg",
      alt: "Mehak Yadav",

      description:
        ""
    },
    
    {
      name: "Hardik Bhatnagar  ",
      image: "/hardik.jpg",
      alt: "Hardik Bhatnagar ",

      description:
        ""
    },
    {
      name: "Omkar Arora",
      image: "/omkar.jpeg",
      alt: "Omkar Arora",

      description:
        ""
    },
    {
      name: "Sakshi Kapoor",
      image: "/sakshi.jpg",
      alt: "SAKSHI KAPOOR",

      description:
        ""
    },
    {
      name: "Shubham Kumar",
      image: "/shubhamkumar.jpg",
      alt: "Shubham Kumar",

      description:
        ""
    },
    {
      name: "Ravi Kumar Sogarwal",
      image: "/ravi.jpg",
      alt: "RAVI KUMAR SOGARWAL",

      description:
        ""
    },
    {
      name: "Mukesh Ghanshyam Bisane",
      image: "/bisane.jpg",
      alt: "Mukesh Ghanshyam Bisane",

      description:
        ""
    },
    {
      name: "Mrunmayee Mandar Paralikar",
      image: "/mandar.jpg",
      alt: "Mrunmayee Mandar Paralikar",

      description:
        ""
    },
    

  ];


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fellownew = [
    {
      name: "Anand",
      image: "/anand.jpg",
      alt: "Anand ",
      description:
        "From a young age, I was fascinated by politics, and its inner workings. This passion later drew me towards political science, which deepened my curiosity and interest in the world of policy and political consultancy. The Mukherjee fellowship has proven to be the ideal platform for me to explore this field. The past year in the fellowship has been an incredibly rewarding learning experience, stimulating my intellectual growth. It has significantly broadened my understanding of Indian politics and the intricacies of policymaking.",
    },
    {
      name: " Rajwardhan Rana ",
      image: "/rajwardhan.jpg",
      alt: "Rajwardhan Rana",
      description:
        "Being part of Mukherjee Fellowship was a transformative learning experience. I was working closely with Member of Parliament Smt. Poonam Mahajan ji over the course of the fellowship and gained invaluable insights into the inner workings of parliamentary offices. This hands-on experience not only sharpened my skills in policy analysis and political engagement but also empowered me to make a tangible impact on the ground through effective collaboration and cooperation.",
    },
    {
      name: "Anirudh Badoni ",
      image: "/anirudh.jpg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Pallav Shrivastava ",
      image: "/pallav.jpg",
      alt: "Pallav Shrivastava ",
      description:
        ""
    },
    
    {
      name: "Disha Chauhan ",
      image: "/disha.jpeg",
      alt: "Disha Chauhan ",
      description:
        ""
    },
    {
      name: "Rakshita Malviya ",
      image: "/rakshita.jpg",
      alt: "Rakshita Malviya ",
      description:
        ""
    },
    {
      name: "Harshwardhan ",
      image: "/harsh.jpg",
      alt: "Harshwardhan ",
      description:
        ""
    },
    {
      name: "Bharati Agarwal",
      image: "/bharati.png",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Sumit Goswami",
      image: "/sumit.jpeg",
      alt: "Sumit Goswami",
      description:
        ""
    },
    {
      name: "Manan Goel",
      image: "/manan.jpeg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Pranjal Yadav",
      image: "/pranjal.JPG",
      alt: "Pranjal Yadav",
      description:
        ""
    },
    // Replicating the first 9 fellows to reach 21 total
    
    {
      name: "Vivek Raj",
      image: "/vivek.jpeg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Shantanu Misra",
      image: "/shantanu.jpg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Sarthak Sharma ",
      image: "/sarthak.jpg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Sahil Jindal",
      image: "/sahil.jpeg",
      alt: "Sahil Jindal",
      description:
        ""
    },
    
    {
      name: "Janya Vyas ",
      image: "/janya.jpeg",
      alt: "Janya Vyas",
      description:
        ""
    },
    {
      name: "Vishnudath S",
      image: "/vishu.jpg",
      alt: "Vishnudath S",
      description:
        ""
    },
    {
      name: "Dazy Sabharwal",
      image: "/dazy.jpeg",
      alt: "Dazy Sabharwal",
      description:
        ""
    },
    {
      name: "Vaishnavi Gaur",
      image: "/gaur.jpg",
      alt: "Vaishnavi Gaur",
    
      description:
        ""
    },
    {
      name: "Abhijeet Singh Kushwah",
      image: "/abhijeet.jpeg",
      alt: "Abhijeet Singh Kushwah",
      description:
        ""
    },
    {
      name: "Nipun Kumar Srivastava",
      image: "/nipun.webp",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Navamohana Krishnan S",
      image: "/s.jpg",
      alt: "John Doe",
      description:
        ""
    },
    {
      name: "Jithesh Krishnan Ramesh",
      image: "/ramesh.jpeg",
      alt: "Jithesh Krishnan Ramesh",
      description:
        ""
    },
  ];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 xl:px-0 text-center">
      {/* Heading with Animation */}
      <motion.h2
        className="text-5xl font-bold text-gray-900 abril-fatface-regular mt-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Meet Our Fellows
      </motion.h2>
      <motion.p
        className="text-gray-700 mt-4 helvetica-neue-light text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hear from our past and present Fellows sharing their Mukherjee
        Fellowship experience in their own words.
      </motion.p>

      {/* Fellows Grid with Staggered Animation */}
      <span className="block text-gray-700  text-md sm:text-5xl mt-8 abril-fatface-regular " >2024 - 2025 </span>
      <motion.div
        className="grid grid-cols-6 gap-6 mt-12 overflow-x-auto flex-nowrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {fellownew.map((fellow, index) => (
          <motion.div
            key={index}
            onClick={() => openModal(index)}
            className="place-content-center min-w-[150px]" // Ensure each card has a minimum width for visibility
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {/* <Image
              src={fellow.image}
              alt={fellow.name}
              width={600}
              height={600}
              className="mx-auto object-cover rounded-lg shadow-md"
            /> */}
            <div className="w-[150px] h-[290px] mx-auto flex items-center justify-center">
              <Image
                src={fellow.image}
                alt={fellow.name}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg  "
              />
            </div>
            <p className="font-semibold mt-2 text-gray-800">{fellow.name}</p>
          </motion.div>
        ))}

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4"
        >
          <motion.div
            className="relative mx-auto max-w-5xl max-h-[90vh] flex items-center gap-4 bg-white p-12 rounded-lg"
            initial={{ x: "-30%", opacity: 0 }}
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

            {/* Main Image Display */}
            <div className="grid grid-cols-3 gap-6">
              {/* <div className="col-span-3 md:col-span-1 place-content-center">
                <Image
                  src={fellowsold[currentIndex].image}
                  alt={fellowsold[currentIndex].alt}
                  width={600}
                  height={600}
                  className="max-w-full max-h-[80vh] md:max-h-[40vh] object-contain rounded-lg"
                />
              </div> */}

              <div className="w-[300px] h-[300px] mx-auto flex items-center justify-center">
                <Image
                  src={fellownew[currentIndex].image}
                  alt={fellownew[currentIndex].alt}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>

              <div className="col-span-3 md:col-span-2 place-content-center">
                <motion.div
                  className="text-left text-gray-900 text-2xl Abril_font"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {fellownew[currentIndex].name}
                </motion.div>
                <motion.div
                  className="text-left text-gray-900 text-lg helvetica mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {fellownew[currentIndex].description}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      </motion.div>



      <span className="block text-gray-700 text-md sm:text-5xl mt-8 abril-fatface-regular" >2023 - 2024 </span>
      <motion.div
        className="grid grid-cols-6 gap-6 mt-12 overflow-x-auto flex-nowrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {fellowsold.map((fellow, index) => (
          <motion.div
            key={index}
            onClick={() => openModal(index)}
            className="place-content-center min-w-[150px]" // Ensure each card has a minimum width for visibility
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {/* <Image
              src={fellow.image}
              alt={fellow.name}
              width={600}
              height={600}
              className="mx-auto object-cover rounded-lg shadow-md"
            /> */}

            <div className="w-[150px] h-[290px] mx-auto flex items-center justify-center">
              <Image
                src={fellow.image}
                alt={fellow.name}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg "
              />
            </div>
            <p className="font-semibold mt-2 text-gray-800">{fellow.name}</p>
          </motion.div>
        ))}

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4"
        >
          <motion.div
            className="relative mx-auto max-w-5xl max-h-[90vh] flex items-center gap-4 bg-white p-12 rounded-lg"
            initial={{ x: "-30%", opacity: 0 }}
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

            {/* Main Image Display */}
            <div className="grid grid-cols-3 gap-6">
              {/* <div className="col-span-3 md:col-span-1 place-content-center">
                <Image
                  src={fellowsold[currentIndex].image}
                  alt={fellowsold[currentIndex].alt}
                  width={600}
                  height={600}
                  className="max-w-full max-h-[80vh] md:max-h-[40vh] object-contain rounded-lg"
                />
              </div> */}
              <div className="w-[300px] h-[300px] mx-auto flex items-center justify-center">
                <Image
                  src={fellowsold[currentIndex].image}
                  alt={fellowsold[currentIndex].alt}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="col-span-3 md:col-span-2 place-content-center">
                <motion.div
                  className="text-left text-gray-900 text-2xl Abril_font"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {fellowsold[currentIndex].name}
                </motion.div>
                <motion.div
                  className="text-left text-gray-900 text-lg helvetica mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {fellowsold[currentIndex].description}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      </motion.div>
    </section>
  );
}
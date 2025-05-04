// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function RegistrationForm() {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     fullName: "",
//     day: "",
//     month: "",
//     year: "",
//     citizenship: "",
//     country: "",
//     state: "",
//     city: "",
//     zipCode: "",
//     address1: "",
//     address2: "",
//     email: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // Handle form field change
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setMessage("Registration successful!");
//         setFormData({
//           fullName: "",
//           day: "",
//           month: "",
//           year: "",
//           citizenship: "",
//           country: "",
//           state: "",
//           city: "",
//           zipCode: "",
//           address1: "",
//           address2: "",
//           email: "",
//           phone: "",
//         });
//       } else {
//         setMessage("Failed to register. Try again.");
//       }
//     } catch (error) {
//       // setMessage("Error connecting to the server.");
//       console.error(error);
//     }

//     setLoading(false);
//   };

//   return (
//     <motion.section
//       className="py-16 px-4 xl:px-0 max-w-7xl mx-auto"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Title with Animation */}
//       <motion.h2
//         className="text-5xl font-bold text-gray-900 Abril_font mt-8"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         Please fill in your information
//       </motion.h2>
//       <motion.p
//         className="text-gray-600 mt-2"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         Applications for our Fellowship open in the months of May-June. Connect
//         with us on our blogs and social media handles.
//       </motion.p>

//       {/* Form */}
//       <motion.form
//         onSubmit={handleSubmit}
//         className="mt-8 space-y-6 text-black"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.2 },
//           },
//         }}
//       >
//         {/* Personal Information */}
//         <motion.div
//           className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
//           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//         >
//           <motion.div
//             variants={{
//               hidden: { y: 20, opacity: 0 },
//               visible: { y: 0, opacity: 1 },
//             }}
//           >
//             <label className="font-semibold">Your full name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg mt-1 focus:outline-none"
//             />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Date of Birth */}
//             <motion.div
//               variants={{
//                 hidden: { y: 20, opacity: 0 },
//                 visible: { y: 0, opacity: 1 },
//               }}
//             >
//               <label className="font-semibold">Date of birth</label>
//               <div className="grid grid-cols-3 gap-2">
//                 <select
//                   name="day"
//                   value={formData.day}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border rounded-lg"
//                 >
//                   <option value="">Day</option>
//                   {[...Array(31)].map((_, i) => (
//                     <option key={i}>{i + 1}</option>
//                   ))}
//                 </select>
//                 <select
//                   name="month"
//                   value={formData.month}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border rounded-lg"
//                 >
//                   <option value="">Month</option>
//                   {[...Array(12)].map((_, i) => (
//                     <option key={i}>{i + 1}</option>
//                   ))}
//                 </select>
//                 <select
//                   name="year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border rounded-lg"
//                 >
//                   <option value="">Year</option>
//                   {[...Array(60)].map((_, i) => (
//                     <option key={i}>{new Date().getFullYear() - i}</option>
//                   ))}
//                 </select>
//               </div>
//             </motion.div>

//             {/* Citizenship */}
//             <motion.div
//               variants={{
//                 hidden: { y: 20, opacity: 0 },
//                 visible: { y: 0, opacity: 1 },
//               }}
//             >
//               <label className="font-semibold">Citizenship</label>
//               <input
//                 type="text"
//                 name="citizenship"
//                 value={formData.citizenship}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg"
//               />
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Address Information */}
//         <motion.div
//           className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
//           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//         >
//           <motion.div
//             variants={{
//               hidden: { y: 20, opacity: 0 },
//               visible: { y: 0, opacity: 1 },
//             }}
//           >
//             <label className="font-semibold">Country</label>
//             <input
//               type="text"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg"
//             />
//           </motion.div>
//         </motion.div>

//         {/* Message & Buttons */}
//         {message && <p className="text-center mt-4 text-red-500">{message}</p>}
//         <motion.div className="flex justify-end gap-5 mt-6">
//           <motion.button
//             type="button"
//             className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-100"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Save
//           </motion.button>
//           <motion.button
//             type="submit"
//             className="grad1 text-white px-6 py-3 rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {loading ? "Submitting..." : "Continue"}
//           </motion.button>
//         </motion.div>
//       </motion.form>
//     </motion.section>
//   );
// }

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RegistrationForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    day: "",
    month: "",
    year: "",
    citizenship: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful!");
        setFormData({
          fullName: "",
          day: "",
          month: "",
          year: "",
          citizenship: "",
          country: "",
          state: "",
          city: "",
          zipCode: "",
          address1: "",
          address2: "",
          email: "",
          phone: "",
        });
      } else {
        setMessage("Failed to register. Try again.");
      }
    } catch (error) {
      // setMessage("Error connecting to the server.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <motion.section className="py-16 px-4 xl:px-0 max-w-7xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      {/* Title with Animation */}
      <motion.h2
        className="text-5xl font-bold text-gray-900 font-playfair-regular mt-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        fill in your information
      </motion.h2>
      <motion.p className="text-gray-600 mt-2 helvetica-neue-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
        Applications for our Fellowship open in the months of May-June. Connect with us on our blogs and social media handles.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6 text-black "
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
        {/* Personal Information */}
        <motion.div className="bg-[#F7F7F7] sm:p-16 p-10 rounded-lg shadow-md space-y-6" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <label className="helvetica-neue-bold text-lg">Your full name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mt-1 focus:outline-none  placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date of Birth */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <label className="helvetica-neue-bold text-lg">Date of birth</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg bg-white  placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700  "
                >
                  <option value="">Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
                </select>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg bg-white placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
                >
                  <option value="">Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
                </select>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg bg-white placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
                >
                  <option value="">Year</option>
                  {[...Array(60)].map((_, i) => (
                    <option key={i}>{new Date().getFullYear() - i}</option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Citizenship */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <label className="helvetica-neue-bold text-lg">Citizenship</label>
              <select
                name="citizenship"
                value={formData.citizenship}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg bg-white placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
              >
                <option value="">Select</option>
                {/* Add city options here if needed */}
              </select>
            </motion.div>
          </div>
        </motion.div>

        {/* Address Information */}
        <motion.div className="bg-[#F7F7F7] sm:p-16 p-10 rounded-lg shadow-md space-y-6 mt-5 " variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <label className="helvetica-neue-bold text-lg">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
            />
          </motion.div>

          {/* State, City, Zip Code */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div>
              <label className="helvetica-neue-bold text-lg">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg bg-white placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700  "
              >
                <option value="">Select</option>
                {/* Add state options here if needed */}
              </select>
            </div>
            <div>
              <label className="helvetica-neue-bold text-lg">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg bg-white placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
              >
                <option value="">Select</option>
                {/* Add city options here if needed */}
              </select>
            </div>
            <div>
              <label className="helvetica-neue-bold text-lg">Zip Code</label>
              <input
                type="text"
                placeholder="Enter your zip code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
              />
            </div>
          </motion.div>

          {/* Address Lines */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="helvetica-neue-bold text-lg">Address Line 1</label>
              <input
                type="text"
                name="address1"
                placeholder="Enter your address line 1"
                value={formData.address1}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
              />
            </div>
            <div>
              <label className="helvetica-neue-bold text-lg">Address Line 2</label>
              <input
                type="text"
                name="address2"
                placeholder="Enter your address line 2"
                value={formData.address2}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700  "
              />
            </div>
          </motion.div>

          {/* Email and Phone */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
          >
            <div>
              <label className="helvetica-neue-bold text-lg">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
              />
            </div>
            <div>
              <label className="helvetica-neue-bold text-lg">Day Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg placeholder-[#000000] placeholder-helvetica-neue-regular text-gray-700 "
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Message & Buttons */}
        {message && <p className="text-center mt-4 text-red-500">{message}</p>}
        <motion.div className="flex flex-col sm:flex-row justify-end gap-5 mt-6">
          <motion.button
            type="button"
            className=" helvetica-neue-bold text-lg border border-orange-500 text-orange-500 px-20 py-3 rounded-lg hover:bg-orange-100 min-w-[120px] text-center" // Increased width with min-w
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Save
          </motion.button>
          <motion.button
            type="submit"
            className="grad1 text-white px-20 py-3 rounded-lg min-w-[120px] text-center helvetica-neue-bold text-lg" // Increased width with min-w
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Submitting..." : "Continue"}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
}

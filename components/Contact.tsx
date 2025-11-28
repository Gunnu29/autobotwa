"use client";

import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
     <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-20 items-center">


        {/* LEFT SIDE TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-1">
            <div className="p-3 rounded-full bg-blue-100">
              <Mail className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            Have a question, feedback, or collaboration idea?  
            Fill out the form and we’ll get back to you shortly.
          </p>

         <div className="flex flex-wrap gap-8 mt-6">

  {/* Location */}
  <div className="flex items-center gap-1">
    <div className="p-3 text-white rounded-xl">
      📍
    </div>
    <div>
      <p className="font-semibold text-gray-800">Our Location</p>
      <p className="text-gray-600">New Delhi, India</p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3">
    <div className="p-3 text-white rounded-xl">
      📞
    </div>
    <div>
      <p className="font-semibold text-gray-800">Call Us</p>
      <p className="text-gray-600">+91 99999 99999</p>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-center gap-3">
    <div className="p-3 text-white rounded-xl">
      ✉️
    </div>
    <div>
      <p className="font-semibold text-gray-800">Email</p>
      <p className="text-gray-600">xyz@gmail.com</p>
    </div>
  </div>

</div>

        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-xl shadow-sm border border-gray-200"
        >
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <User className="w-5 h-5 text-gray-500" />
                Name
              </label>
              <input
                type="text"
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 outline-none transition"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <Mail className="w-5 h-5 text-gray-500" />
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 outline-none transition"
                placeholder="Your email address"
              />
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <MessageSquare className="w-5 h-5 text-gray-500" />
                Message
              </label>
              <textarea
                rows={5}
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 resize-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800 outline-none transition"
                placeholder="Write your message..."
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition cursor-pointer"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}

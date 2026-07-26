"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  return (

        <div className="bg-gray-100 min-h-screen pt-28">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            Contact Us
          </motion.h1>

          <p className="mt-5 text-xl text-blue-100">
            We'd love to hear from you. Get in touch with the DriveEase team.
          </p>

        </div>
      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}

          <div className="bg-white p-10 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold mb-8">
              Send us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div>

            <div className="bg-white p-8 rounded-3xl shadow-lg space-y-8">

              <h2 className="text-3xl font-bold">
                Contact Information
              </h2>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />

                <div>

                  <h3 className="font-bold text-lg">
                    Office Address
                  </h3>

                  <p className="text-gray-600">
                    DriveEase Pvt. Ltd.
                    <br />
                    piplani
                    <br />
                    Bhopal, Madhya Pradesh 462011
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaPhoneAlt className="text-green-600 text-2xl mt-1" />

                <div>

                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +91 73520 37601
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-red-600 text-2xl mt-1" />

                <div>

                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    support@driveease.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaClock className="text-yellow-500 text-2xl mt-1" />

                <div>

                  <h3 className="font-bold text-lg">
                    Working Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday - Sunday
                    <br />
                    8:00 AM - 10:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="rounded-3xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Bhopal&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          ></iframe>

        </div>

      </section>

    </div>
  );
}
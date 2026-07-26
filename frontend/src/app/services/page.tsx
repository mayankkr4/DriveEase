"use client";

import { motion } from "framer-motion";
import {
  FaCar,
  FaPlane,
  FaBriefcase,
  FaUsers,
  FaGem,
  FaCalendarAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCar className="text-5xl text-blue-600" />,
    title: "Luxury Car Rental",
    desc: "Drive premium cars like Mercedes, BMW, Audi and Range Rover for business trips or special occasions.",
  },
  {
    icon: <FaUsers className="text-5xl text-green-600" />,
    title: "Family SUV Rental",
    desc: "Spacious SUVs perfect for family vacations, road trips and weekend getaways.",
  },
  {
    icon: <FaBriefcase className="text-5xl text-purple-600" />,
    title: "Business Travel",
    desc: "Reliable executive cars for meetings, office travel and corporate events.",
  },
  {
    icon: <FaPlane className="text-5xl text-red-500" />,
    title: "Airport Pickup & Drop",
    desc: "Book a comfortable ride to or from the airport with professional service.",
  },
  {
    icon: <FaGem className="text-5xl text-yellow-500" />,
    title: "Wedding Car Rental",
    desc: "Luxury wedding cars to make your special day even more memorable.",
  },
  {
    icon: <FaCalendarAlt className="text-5xl text-indigo-600" />,
    title: "Long-Term Rentals",
    desc: "Affordable weekly and monthly rental plans with flexible pricing.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24 text-white text-center">
        <h1 className="text-5xl font-bold">Our Services</h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto text-blue-100">
          DriveEase provides premium car rental solutions for every journey,
          whether it's business, family vacations, weddings or airport travel.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8"
            >
              <div className="mb-6">{service.icon}</div>

              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-7">
                {service.desc}
              </p>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                Learn More
              </button>
            </motion.div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-12">
            Why Choose DriveEase?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="mt-2 text-gray-600">Premium Cars</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">20+</h3>
              <p className="mt-2 text-gray-600">Cities Covered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
              <p className="mt-2 text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="mt-2 text-gray-600">Customer Support</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-700 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Start Your Journey?
        </h2>

        <p className="mt-5 text-lg text-blue-100">
          Book your dream car today and enjoy a premium driving experience.
        </p>

        <button className="mt-8 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition">
          Explore Cars
        </button>

      </section>

    </div>
  );
}
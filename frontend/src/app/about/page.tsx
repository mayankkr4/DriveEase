"use client";

import { motion } from "framer-motion";
import {
  FaCar,
  FaUsers,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

export default function AboutPage() {
  return (
        <div className="bg-gray-100 min-h-screen pt-28">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            About DriveEase
          </motion.h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner for premium, affordable and hassle-free car rentals.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000"
            alt="DriveEase"
            className="rounded-3xl shadow-2xl"
          />

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8">
              DriveEase is a modern car rental platform built to make travelling
              easier, safer and more affordable. Whether you need a luxury SUV,
              family sedan or budget hatchback, we connect you with the perfect
              vehicle in just a few clicks.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              We focus on verified vehicles, transparent pricing, easy booking
              and excellent customer support to provide a world-class rental
              experience.
            </p>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose DriveEase?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaCar className="text-5xl text-blue-600 mx-auto mb-5" />
              <h3 className="font-bold text-xl mb-3">
                Premium Cars
              </h3>
              <p className="text-gray-600">
                Luxury, SUVs and economy cars at affordable prices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-5" />
              <h3 className="font-bold text-xl mb-3">
                Safe & Secure
              </h3>
              <p className="text-gray-600">
                Every vehicle is verified and regularly maintained.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaMapMarkerAlt className="text-5xl text-red-600 mx-auto mb-5" />
              <h3 className="font-bold text-xl mb-3">
                Multiple Cities
              </h3>
              <p className="text-gray-600">
                Available across major cities with easy pickup locations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaAward className="text-5xl text-yellow-500 mx-auto mb-5" />
              <h3 className="font-bold text-xl mb-3">
                Best Service
              </h3>
              <p className="text-gray-600">
                24×7 customer support and quick booking process.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="py-20 bg-blue-700 text-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold">500+</h2>
            <p className="mt-3">Cars</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">20+</h2>
            <p className="mt-3">Cities</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">10K+</h2>
            <p className="mt-3">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">4.9★</h2>
            <p className="mt-3">Average Rating</p>
          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-8">
            Our Mission
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Our mission is to redefine mobility by offering reliable,
            affordable and premium car rental services that empower people to
            travel freely, comfortably and confidently.
          </p>

        </div>

      </section>

    </div>
  );
}
"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaStar, FaBolt, FaCrown, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80"
            alt="Luxury Car Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Premium Car <br/><span className="text-primary-500">Rental Experience</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-2xl"
            >
              Discover the perfect vehicle for your next journey. From luxury sedans to powerful SUVs, DriveEase offers an unmatched selection of premium cars.
            </motion.p>
          </div>

          {/* Search Box (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-6 md:p-8 mt-10 max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary-500" /> Location
                </label>
                <input
           type="text"
              placeholder="Enter Location"
                 value={location}
                  onChange={(e) => setLocation(e.target.value)}
             className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <FaCalendarAlt className="text-primary-500" /> Pick-up Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none text-slate-800 dark:text-slate-100"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <FaCalendarAlt className="text-primary-500" /> Drop-off Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none text-slate-800 dark:text-slate-100"
                />
              </div>
              <div>
              <Button
                  size="lg"
                    className="w-full h-[50px] text-lg flex items-center gap-2"
                    onClick={() => {
                      router.push(`/cars?location=${location}`);
                    }}
                      >
                      <FaSearch />
                           Search Cars
              </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cars Collection */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Premium Fleet</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Choose from our diverse collection of high-end vehicles tailored for comfort, performance, and style.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Card 1 */}
            <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Sedan" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 text-slate-800 dark:text-slate-200">
                  <FaStar className="text-yellow-500" /> 4.9
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mercedes S-Class</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Luxury Sedan</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">$250</p>
                    <p className="text-xs text-slate-500">/day</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-slate-800 my-4 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1"><FaCrown /> 4 Seats</span>
                  <span className="flex items-center gap-1"><FaBolt /> Automatic</span>
                </div>
                <Button className="w-full">Rent Now</Button>
              </div>
            </motion.div>

            {/* Example Card 2 */}
            <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" 
                  alt="Sports Car" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 text-slate-800 dark:text-slate-200">
                  <FaStar className="text-yellow-500" /> 5.0
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Porsche 911</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Sports Coupe</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">$450</p>
                    <p className="text-xs text-slate-500">/day</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-slate-800 my-4 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1"><FaCrown /> 2 Seats</span>
                  <span className="flex items-center gap-1"><FaBolt /> Automatic</span>
                </div>
                <Button className="w-full">Rent Now</Button>
              </div>
            </motion.div>

             {/* Example Card 3 */}
             <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80" 
                  alt="SUV" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 text-slate-800 dark:text-slate-200">
                  <FaStar className="text-yellow-500" /> 4.8
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Range Rover</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Premium SUV</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">$300</p>
                    <p className="text-xs text-slate-500">/day</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-slate-800 my-4 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1"><FaCrown /> 5 Seats</span>
                  <span className="flex items-center gap-1"><FaBolt /> Automatic</span>
                </div>
                <Button className="w-full">Rent Now</Button>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">View All Cars</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Why Choose DriveEase?</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">We provide a seamless and premium experience from booking to drop-off. Our carefully curated fleet ensures you always drive in style and comfort.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Verified Premium Vehicles</h4>
                    <p className="text-slate-600 dark:text-slate-400">Every car in our fleet is meticulously maintained, cleaned, and verified for maximum quality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Instant Booking</h4>
                    <p className="text-slate-600 dark:text-slate-400">Skip the lines. Book your dream car instantly with our streamlined digital process.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">24/7 Roadside Assistance</h4>
                    <p className="text-slate-600 dark:text-slate-400">Travel with peace of mind knowing our support team is always available if you need help.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" 
                alt="Happy customer driving" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
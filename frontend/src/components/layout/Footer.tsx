import React from 'react';
import Link from 'next/link';
import { FaCar, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <FaCar className="text-primary-500 text-3xl" />
              <span>DriveEase</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Experience the ultimate premium car rental service. Whether for business, pleasure, or everyday travel, we have the perfect vehicle waiting for you.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/cars" className="hover:text-primary-400 transition-colors">Our Fleet</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal Info</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-primary-400 transition-colors"> Cookie Policy</Link></li>
              <li><Link href="/insurance" className="hover:text-primary-400 transition-colors">Insurance Details</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-sm mb-4 text-slate-400">Subscribe to get the latest offers, news, and updates.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white rounded-md px-4 py-2 font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} DriveEase. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

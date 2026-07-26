import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DriveEase",
    template: "%s | DriveEase",
  },
  description:
    "Premium Car Rental Platform - Book Luxury, Economy, SUVs and Sports Cars Anytime, Anywhere.",
  keywords: [
    "DriveEase",
    "Car Rental",
    "Luxury Cars",
    "SUV Rental",
    "Premium Cars",
    "India Car Rental",
  ],
  authors: [{ name: "DriveEase Team" }],
  themeColor: "#2563EB",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        {/* Background Gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

        {/* Navbar */}
        <Navbar />

        {/* Toast */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
              background: "#111827",
              color: "#fff",
              padding: "14px 18px",
            },
          }}
        />

        {/* Main Content */}
        <main className="flex min-h-screen flex-col">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
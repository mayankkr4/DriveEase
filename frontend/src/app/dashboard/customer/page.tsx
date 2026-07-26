"use client"
import React from 'react';
import { useAuthStore } from '@/store/authStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaCalendarCheck, FaHeart, FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function CustomerDashboard() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back, {user?.firstName}!</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Manage your bookings, reviews, and profile from here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-primary-500 to-primary-700 text-white border-0">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-primary-100 mb-1">Active Bookings</p>
              <h3 className="text-4xl font-bold">1</h3>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <FaCalendarCheck className="text-3xl" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white border-0">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-indigo-100 mb-1">Wishlisted Cars</p>
              <h3 className="text-4xl font-bold">4</h3>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <FaHeart className="text-3xl" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white border-0">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-emerald-100 mb-1">Reviews Given</p>
              <h3 className="text-4xl font-bold">3</h3>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <FaStar className="text-3xl" />
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Upcoming Trip</h2>
      
      <Card className="border-l-4 border-l-primary-500 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-64 h-48 md:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80" 
                alt="Mercedes-Benz" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mercedes-Benz S-Class</h3>
                    <p className="text-sm text-slate-500">Booking ID: #BK-84729</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Confirmed</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Pick-up</p>
                    <p className="font-medium text-slate-900 dark:text-white">Aug 15, 2026</p>
                    <p className="text-sm text-slate-500">10:00 AM</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Drop-off</p>
                    <p className="font-medium text-slate-900 dark:text-white">Aug 18, 2026</p>
                    <p className="text-sm text-slate-500">10:00 AM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="font-bold text-lg text-slate-900 dark:text-white">Total: <span className="text-primary-600">$800</span></p>
                <div className="space-x-3">
                  <Button variant="outline">Modify</Button>
                  <Button>View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

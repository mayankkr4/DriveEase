"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaCar, FaMoneyBillWave, FaChartLine, FaStar } from 'react-icons/fa';

export default function OwnerDashboard() {
  return (
    <div className="space-y-8">
      
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Owner Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Here is a summary of your fleet and earnings.</p>
        </div>
        <Button>+ Add New Car</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 mb-1 text-sm font-medium">Total Cars</p>
              <h3 className="text-3xl font-bold">5</h3>
            </div>
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
              <FaCar className="text-2xl" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 mb-1 text-sm font-medium">Total Earnings</p>
              <h3 className="text-3xl font-bold">$12,450</h3>
            </div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
              <FaMoneyBillWave className="text-2xl" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 mb-1 text-sm font-medium">Active Bookings</p>
              <h3 className="text-3xl font-bold">3</h3>
            </div>
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
              <FaChartLine className="text-2xl" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 mb-1 text-sm font-medium">Average Rating</p>
              <h3 className="text-3xl font-bold">4.8</h3>
            </div>
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center">
              <FaStar className="text-2xl" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings Table */}
      <Card>
        <CardContent className="p-0">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-lg font-bold">Recent Bookings</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-sm">
                  <th className="p-4 font-medium">Car</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Dates</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="p-4 font-medium">Porsche 911</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">Alex Johnson</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">Aug 20 - Aug 22</td>
                  <td className="p-4 font-medium">$900</td>
                  <td className="p-4">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-bold">Pending</span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 h-8 text-xs">Accept</Button>
                      <Button size="sm" variant="outline" className="h-8 text-xs text-red-600 border-red-200 hover:bg-red-50">Reject</Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Range Rover</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">Sarah Williams</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">Aug 10 - Aug 12</td>
                  <td className="p-4 font-medium">$600</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">Confirmed</span>
                  </td>
                  <td className="p-4">
                    <Button size="sm" variant="ghost" className="h-8 text-xs">View</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaUsers, FaCar, FaMoneyCheckAlt, FaClipboardList } from 'react-icons/fa';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Platform overview and management.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 mb-1 text-sm font-medium">Total Users</p>
              <h3 className="text-3xl font-bold">1,245</h3>
            </div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <FaUsers className="text-2xl" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 mb-1 text-sm font-medium">Total Cars</p>
              <h3 className="text-3xl font-bold">156</h3>
            </div>
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
              <FaCar className="text-2xl" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 mb-1 text-sm font-medium">Platform Revenue</p>
              <h3 className="text-3xl font-bold">$45,200</h3>
            </div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
              <FaMoneyCheckAlt className="text-2xl" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 mb-1 text-sm font-medium">Active Bookings</p>
              <h3 className="text-3xl font-bold">42</h3>
            </div>
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
              <FaClipboardList className="text-2xl" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Approvals Pending */}
        <Card>
          <CardContent className="p-0">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="text-lg font-bold">Pending Car Approvals</h2>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Tesla Model S</p>
                  <p className="text-sm text-slate-500">Owner: James Wilson</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
                  <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Reject</Button>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Audi RS7</p>
                  <p className="text-sm text-slate-500">Owner: Emily Chen</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
                  <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Reject</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Platform Activity */}
        <Card>
          <CardContent className="p-0">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="text-lg font-bold">Recent Activity</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaUsers />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">New user registered</p>
                  <p className="text-sm text-slate-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                  <FaMoneyCheckAlt />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Payment received: $450.00</p>
                  <p className="text-sm text-slate-500">15 minutes ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <FaCar />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">New car listing created</p>
                  <p className="text-sm text-slate-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

    </div>
  );
}

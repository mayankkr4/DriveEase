"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { FaUser, FaCar, FaHistory, FaHeart, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (mounted && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, mounted, router]);

  if (!mounted || !isAuthenticated) return null; // Prevent hydration mismatch

  const navItems = [
    { name: 'Dashboard Overview', href: `/dashboard/${user?.role}`, icon: <FaUser /> },
    { name: 'My Bookings', href: `/dashboard/${user?.role}/bookings`, icon: <FaHistory /> },
    { name: 'Wishlist', href: `/dashboard/${user?.role}/wishlist`, icon: <FaHeart /> },
    ...(user?.role === 'owner' ? [
      { name: 'My Cars', href: '/dashboard/owner/cars', icon: <FaCar /> },
      { name: 'Earnings', href: '/dashboard/owner/earnings', icon: <FaUser /> },
    ] : []),
    { name: 'Settings', href: `/dashboard/${user?.role}/settings`, icon: <FaCog /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sticky top-28">
              
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xl font-bold">
                  {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{user?.firstName} {user?.lastName}</h3>
                  <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        isActive 
                          ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400 font-medium' 
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  );
                })}
                <button
                  onClick={() => { logout(); router.push('/'); }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-8"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </nav>

            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>

        </div>
      </div>
    </div>
  );
}

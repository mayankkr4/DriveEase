"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { FaCheckCircle, FaLock, FaCreditCard, FaPaypal } from 'react-icons/fa';

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock Data
  const bookingDetails = {
    car: {
      make: "Mercedes-Benz",
      model: "S-Class",
      year: 2023,
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=400&q=80"
    },
    dates: {
      pickup: "Aug 15, 2026",
      dropoff: "Aug 18, 2026",
      days: 3
    },
    price: {
      base: 750,
      tax: 50,
      total: 800
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call to Stripe/Backend
    setTimeout(() => {
      setIsProcessing(false);
      router.push('/checkout/success');
    }, 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Secure Checkout</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-2">
            <FaLock className="text-sm" /> All transactions are secure and encrypted.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Payment Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle>Driver Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">First Name</label>
                    <Input type="text" placeholder="John" defaultValue="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Last Name</label>
                    <Input type="text" placeholder="Doe" defaultValue="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email Address</label>
                  <Input type="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  
                  <div className="flex gap-4 mb-6">
                    <button 
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${paymentMethod === 'card' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}
                    >
                      <FaCreditCard className={`text-2xl ${paymentMethod === 'card' ? 'text-primary-600' : 'text-slate-400'}`} />
                      <span className="font-medium">Credit Card</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${paymentMethod === 'paypal' ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}
                    >
                      <FaPaypal className={`text-2xl ${paymentMethod === 'paypal' ? 'text-primary-600' : 'text-slate-400'}`} />
                      <span className="font-medium">PayPal</span>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Card Number</label>
                        <Input type="text" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Expiry Date</label>
                          <Input type="text" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">CVC</label>
                          <Input type="text" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Name on Card</label>
                        <Input type="text" placeholder="JOHN DOE" />
                      </div>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full h-12 text-lg mt-4" disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : `Pay $${bookingDetails.price.total}`}
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-primary-100 shadow-xl dark:border-primary-900/50">
              <CardHeader className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 rounded-t-xl">
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                
                <div className="flex gap-4 mb-6">
                  <div className="relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image src={bookingDetails.car.image} alt={bookingDetails.car.model} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{bookingDetails.car.make} {bookingDetails.car.model}</h4>
                    <p className="text-sm text-slate-500">{bookingDetails.car.year}</p>
                  </div>
                </div>

                <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Pick-up</span>
                    <span className="font-medium">{bookingDetails.dates.pickup}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Drop-off</span>
                    <span className="font-medium">{bookingDetails.dates.dropoff}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Base Rate ({bookingDetails.dates.days} days)</span>
                    <span>${bookingDetails.price.base}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Taxes & Fees</span>
                    <span>${bookingDetails.price.tax}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary-600">${bookingDetails.price.total}</span>
                </div>

              </CardContent>
            </Card>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Free cancellation up to 48 hours before pick-up.</span>
              </div>
              <div className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>24/7 Roadside Assistance included in the price.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAnalytics } from '../context/AnalyticsContext';
import CTAButton from '../components/CTAButton';

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { track } = useAnalytics();
  const [planType, setPlanType] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan) {
      setPlanType(plan);
      track('checkout_page_view', { plan });
    } else {
      router.push('/upgrade');
    }
  }, [searchParams, router, track]);

  const handleCheckout = async () => {
    setLoading(true);
    track('checkout_initiated', { plan: planType });
    
    // Simulate API call
    setTimeout(() => {
      router.push('/checkout/success');
      setLoading(false);
    }, 1500);
  };

  const planDetails = {
    basic: {
      name: 'Basic Plan',
      price: 'RM29',
      period: 'monthly'
    },
    pro: {
      name: 'Professional Plan',
      price: 'RM79',
      period: 'monthly'
    },
    business: {
      name: 'Business Plan',
      price: 'RM199',
      period: 'monthly'
    }
  };

  const selectedPlan = planDetails[planType] || {};

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Complete Your Purchase</h1>
        <p className="text-gray-600 mt-2">You're just one step away from upgrading your experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
              <input 
                type="text" 
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                <input 
                  type="text" 
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                <input 
                  type="text" 
                  placeholder="123"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address</label>
              <input 
                type="text" 
                placeholder="Street Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 mb-2"
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input 
                  type="text" 
                  placeholder="Postal Code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </form>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{selectedPlan.name}</span>
              <span>{selectedPlan.price}</span>
            </div>
            <div className="text-sm text-gray-600">
              Billed {selectedPlan.period}
            </div>
          </div>
          
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{selectedPlan.price}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>RM0</span>
            </div>
          </div>
          
          <div className="flex justify-between font-bold mb-6">
            <span>Total</span>
            <span>{selectedPlan.price}</span>
          </div>
          
          <CTAButton
            text={loading ? "Processing..." : "Complete Purchase"}
            variant="gradient"
            size="lg"
            onClick={handleCheckout}
            trackingId="checkout_complete_purchase"
            pulseEffect={!loading}
            withHaptics={true}
          />
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            By completing this purchase, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAnalytics } from '../../context/AnalyticsContext';
import CTAButton from '../../components/CTAButton';

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const { track } = useAnalytics();
  
  useEffect(() => {
    track('checkout_success_page_view');
  }, [track]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-green-100 p-4">
            <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your account has been upgraded successfully.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-medium mb-4">What's Next?</h2>
          <ul className="space-y-3 text-left">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Explore your new premium features</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Set up your vehicle profile for better diagnostics</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Connect with top-rated mechanics in your area</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            text="Go to Dashboard"
            href="/"
            variant="gradient"
            size="lg"
            trackingId="checkout_success_dashboard"
          />
          
          <CTAButton
            text="View Receipt"
            variant="secondary"
            size="lg"
            onClick={() => track('checkout_success_receipt_view')}
            trackingId="checkout_success_receipt"
          />
        </div>
      </div>
    </div>
  );
}
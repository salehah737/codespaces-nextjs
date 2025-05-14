'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAnalytics } from '../context/AnalyticsContext';
import CTAButton from './CTAButton';
import Image from 'next/image';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const { track } = useAnalytics();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    track('hero_view', { language });
  }, [track, language]);

  return (
    <div className="relative bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4">
          <div className="w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
          <div className="w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                {language === 'ms' ? 'Penyelesaian Kenderaan' : 'Vehicle Solutions'} 
              </span>
              <br />
              {language === 'ms' ? 'Diperkasakan oleh AI' : 'Powered by AI'}
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              {language === 'ms' 
                ? 'Hubungkan dengan mekanik terdekat, dapatkan diagnosis AI, dan akses pasaran alat ganti dalam satu platform.' 
                : 'Connect with nearby mechanics, get AI diagnostics, and access the parts marketplace all in one platform.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton 
                href="/mechanics" 
                text={language === 'ms' ? 'Cari Mekanik' : 'Find Mechanics'} 
                variant="gradient" 
                size="lg"
                trackingId="hero_mechanics_cta"
                pulseEffect={true}
              />
              
              <CTAButton 
                href="/diagnostics" 
                text={language === 'ms' ? 'Diagnosis Kenderaan' : 'Vehicle Diagnostics'} 
                variant="secondary" 
                size="lg"
                trackingId="hero_diagnostics_cta"
              />
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">JD</div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">MG</div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">AS</div>
              </div>
              <p className="ml-4 text-sm text-gray-600">
                {language === 'ms' 
                  ? 'Dipercayai oleh 10,000+ pengguna di Malaysia' 
                  : 'Trusted by 10,000+ users in Malaysia'}
              </p>
            </div>
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg blur-md opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 w-full h-80 relative">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">
                      {language === 'ms' ? 'Diagnosis AI' : 'AI Diagnostics'}
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {language === 'ms' ? 'Baru' : 'New'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'ms' 
                      ? 'Dapatkan diagnosis masalah kenderaan anda dalam masa nyata menggunakan teknologi AI terkini.' 
                      : 'Get real-time diagnosis of your vehicle issues using the latest AI technology.'}
                  </p>
                  <div className="flex justify-end">
                    <CTAButton 
                      href="/diagnostics" 
                      text={language === 'ms' ? 'Cuba Sekarang' : 'Try Now'} 
                      variant="ghost" 
                      size="sm"
                      trackingId="hero_diagnostics_card_cta"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
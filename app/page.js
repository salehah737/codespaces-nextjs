'use client';

import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';
import { useAnalytics } from './context/AnalyticsContext';
import CTAButton from './components/CTAButton';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import ScrollReveal from './components/ScrollReveal';
import { useEffect } from 'react';

export default function Home() {
  const { t } = useLanguage();
  const { track } = useAnalytics();
  
  useEffect(() => {
    track('page_view', { page: 'home' });
  }, [track]);
  
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t.home.featuredServices}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title={t.home.mechanicFinder}
              description={t.home.mechanicFinderDesc}
              ctaText={t.home.findMechanicsBtn}
              ctaHref="/mechanics"
              trackingId="home_mechanic_finder_card"
              variant="gradient"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            
            <FeatureCard
              title={t.home.aiDiagnostics}
              description={t.home.aiDiagnosticsDesc}
              ctaText={t.home.tryDiagnostics}
              ctaHref="/diagnostics"
              trackingId="home_diagnostics_card"
              variant="primary"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />
            
            <FeatureCard
              title={t.home.partsMarketplace}
              description={t.home.partsMarketplaceDesc}
              ctaText={t.home.marketplaceBtn}
              ctaHref="/marketplace"
              trackingId="home_marketplace_card"
              variant="secondary"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">{t.home.readyToStart}</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.home.readyToStartDesc}</p>
            <CTAButton 
              href="/auth/signin" 
              text={t.home.getStarted} 
              variant="gradient" 
              size="lg"
              trackingId="home_get_started_cta"
              pulseEffect={true}
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
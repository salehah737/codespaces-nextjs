'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAnalytics } from '../context/AnalyticsContext';
import CTAButton from './CTAButton';

export default function PremiumFeatureCard({
  title,
  description,
  icon,
  ctaText = 'Upgrade to Access',
  isPremium = true,
  previewImage,
  featureId
}) {
  const router = useRouter();
  const { track } = useAnalytics();
  const [isHovered, setIsHovered] = useState(false);

  const handleUpgradeClick = () => {
    track('premium_feature_upgrade_click', { feature: featureId || title });
    router.push('/upgrade');
  };

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        isPremium ? 'bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200' : 'bg-white border border-gray-200'
      } ${isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {previewImage && (
        <div className="relative h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{
              backgroundImage: `url(${previewImage})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          {isPremium && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="bg-amber-500 text-white px-4 py-2 rounded-full font-medium flex items-center">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Premium Feature
              </div>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start mb-4">
          {icon && (
            <div className={`mr-4 p-2 rounded-lg ${isPremium ? 'bg-amber-200 text-amber-700' : 'bg-gray-100 text-gray-600'}`}>
              {icon}
            </div>
          )}
          <h3 className={`text-xl font-semibold ${isPremium ? 'text-amber-800' : ''}`}>{title}</h3>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        {isPremium ? (
          <CTAButton
            text={ctaText}
            variant="gradient"
            size="sm"
            onClick={handleUpgradeClick}
            trackingId={`premium_feature_${featureId || 'unknown'}`}
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            }
          />
        ) : (
          <CTAButton
            text="Access Feature"
            variant="primary"
            size="sm"
            href={`/${featureId}`}
            trackingId={`feature_access_${featureId || 'unknown'}`}
          />
        )}
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { useAnalytics } from '../context/AnalyticsContext';
import CTAButton from './CTAButton';

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  ctaText, 
  ctaHref, 
  trackingId,
  variant = 'default',
  imageUrl
}) {
  const { track } = useAnalytics();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    track('feature_card_hover', { card: title, trackingId });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const variants = {
    default: 'bg-white',
    primary: 'bg-primary-50',
    secondary: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-white to-primary-50'
  };

  return (
    <div 
      className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ${variants[variant]} ${
        isHovered ? 'shadow-xl transform -translate-y-1' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {imageUrl && (
        <div className="h-48 bg-gray-200 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300" />
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start mb-4">
          {icon && (
            <div className={`mr-4 p-2 rounded-lg ${isHovered ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'} transition-colors duration-300`}>
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          <CTAButton 
            href={ctaHref} 
            text={ctaText} 
            variant={isHovered ? 'gradient' : 'primary'} 
            size="sm"
            trackingId={trackingId}
          />
        </div>
      </div>
    </div>
  );
}
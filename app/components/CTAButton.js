'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { useAnalytics } from '../context/AnalyticsContext';

export default function CTAButton({ 
  href, 
  text, 
  variant = 'primary', 
  size = 'md',
  icon,
  onClick,
  trackingId,
  pulseEffect = false,
  withHaptics = true
}) {
  const router = useRouter();
  const { language } = useLanguage();
  const { track } = useAnalytics();
  const [isPressed, setIsPressed] = useState(false);

  // Haptic feedback function (using the Vibration API)
  const triggerHaptics = () => {
    if (withHaptics && navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleClick = (e) => {
    // Prevent default if onClick handler is provided
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }

    // Track the click event
    if (trackingId) {
      track('cta_click', { 
        button_id: trackingId,
        language,
        path: window.location.pathname
      });
    }

    // Trigger haptic feedback
    triggerHaptics();

    // Visual feedback
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);

    // Navigate if href is provided and no onClick handler prevented it
    if (href && !onClick) {
      router.push(href);
    }
  };

  // Determine button styles based on variant and size
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-secondary-100 hover:bg-secondary-200 text-primary-700 border border-primary-300',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    ghost: 'bg-transparent hover:bg-gray-100 text-primary-600',
    gradient: 'bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${variantStyles[variant] || variantStyles.primary}
        ${sizeStyles[size] || sizeStyles.md}
        ${isPressed ? 'transform scale-95' : 'transform scale-100'}
        ${pulseEffect ? 'animate-pulse' : ''}
        rounded-md font-medium transition-all duration-200 flex items-center justify-center gap-2
      `}
      aria-label={text}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {text}
    </button>
  );
}
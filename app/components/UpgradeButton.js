'use client';

import { useRouter } from 'next/navigation';
import { useAnalytics } from '../context/AnalyticsContext';
import CTAButton from './CTAButton';

export default function UpgradeButton({ 
  text = 'Upgrade Now', 
  variant = 'primary', 
  size = 'md',
  pulseEffect = false,
  className = '',
  trackingId = 'upgrade_button'
}) {
  const router = useRouter();
  const { track } = useAnalytics();

  const handleClick = () => {
    track('upgrade_button_clicked', { location: window.location.pathname });
    router.push('/upgrade');
  };

  return (
    <CTAButton
      text={text}
      variant={variant}
      size={size}
      onClick={handleClick}
      trackingId={trackingId}
      pulseEffect={pulseEffect}
      withHaptics={true}
      icon={
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      }
    />
  );
}
'use client';

import { createContext, useContext, useEffect } from 'react';
import { pageView, trackEvent, identifyUser } from '../lib/analytics';

const AnalyticsContext = createContext();

export function AnalyticsProvider({ children }) {
  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.pathname + window.location.search;
      pageView(url);
    }
  }, []);

  const track = (action, params = {}) => {
    trackEvent(action, params);
  };

  const identify = (userId, traits = {}) => {
    identifyUser(userId, traits);
  };

  return (
    <AnalyticsContext.Provider value={{ track, identify }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}
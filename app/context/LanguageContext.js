'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// English translations
const en = {
  nav: {
    home: 'Home',
    mechanics: 'Find Mechanics',
    diagnostics: 'Diagnostics',
    marketplace: 'Parts',
    community: 'Community',
    signIn: 'Sign In',
    register: 'Register',
    upgrade: 'Upgrade'
  },
  home: {
    featuredServices: 'Featured Services',
    mechanicFinder: 'Mechanic Finder',
    mechanicFinderDesc: 'Find trusted mechanics near you with verified reviews and transparent pricing.',
    findMechanicsBtn: 'Find Mechanics',
    aiDiagnostics: 'AI Diagnostics',
    aiDiagnosticsDesc: 'Get instant vehicle diagnostics powered by our advanced AI technology.',
    tryDiagnostics: 'Try Diagnostics',
    partsMarketplace: 'Parts Marketplace',
    partsMarketplaceDesc: 'Shop for genuine and aftermarket parts with competitive pricing.',
    marketplaceBtn: 'Browse Parts',
    readyToStart: 'Ready to get started?',
    readyToStartDesc: 'Join thousands of vehicle owners who trust our platform for their automotive needs.',
    getStarted: 'Get Started'
  },
  upgrade: {
    title: 'Upgrade Your Experience',
    subtitle: 'Choose the plan that best fits your needs',
    monthly: 'Monthly',
    yearly: 'Yearly',
    savePercent: 'Save 20%',
    basic: 'Basic',
    pro: 'Professional',
    business: 'Business',
    mostPopular: 'Most Popular',
    perMonth: '/month',
    perYear: '/year',
    upgradeBtn: 'Upgrade Now',
    contactSales: 'Contact Sales',
    customSolution: 'Need a custom solution?',
    contactDesc: 'Contact our sales team for a tailored plan that meets your specific requirements.'
  }
};

// Malay translations
const ms = {
  nav: {
    home: 'Utama',
    mechanics: 'Cari Mekanik',
    diagnostics: 'Diagnostik',
    marketplace: 'Alat Ganti',
    community: 'Komuniti',
    signIn: 'Log Masuk',
    register: 'Daftar',
    upgrade: 'Naik Taraf'
  },
  home: {
    featuredServices: 'Perkhidmatan Pilihan',
    mechanicFinder: 'Pencari Mekanik',
    mechanicFinderDesc: 'Cari mekanik dipercayai berhampiran anda dengan ulasan yang disahkan dan harga telus.',
    findMechanicsBtn: 'Cari Mekanik',
    aiDiagnostics: 'Diagnostik AI',
    aiDiagnosticsDesc: 'Dapatkan diagnostik kenderaan segera yang dikuasakan oleh teknologi AI kami yang canggih.',
    tryDiagnostics: 'Cuba Diagnostik',
    partsMarketplace: 'Pasaran Alat Ganti',
    partsMarketplaceDesc: 'Beli alat ganti tulen dan pasaran dengan harga kompetitif.',
    marketplaceBtn: 'Lihat Alat Ganti',
    readyToStart: 'Bersedia untuk bermula?',
    readyToStartDesc: 'Sertai ribuan pemilik kenderaan yang mempercayai platform kami untuk keperluan automotif mereka.',
    getStarted: 'Mulakan'
  },
  upgrade: {
    title: 'Naik Taraf Pengalaman Anda',
    subtitle: 'Pilih pelan yang paling sesuai dengan keperluan anda',
    monthly: 'Bulanan',
    yearly: 'Tahunan',
    savePercent: 'Jimat 20%',
    basic: 'Asas',
    pro: 'Profesional',
    business: 'Perniagaan',
    mostPopular: 'Paling Popular',
    perMonth: '/bulan',
    perYear: '/tahun',
    upgradeBtn: 'Naik Taraf Sekarang',
    contactSales: 'Hubungi Jualan',
    customSolution: 'Perlukan penyelesaian khas?',
    contactDesc: 'Hubungi pasukan jualan kami untuk pelan yang disesuaikan dengan keperluan khusus anda.'
  }
};

const translations = { en, ms };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['en', 'ms'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
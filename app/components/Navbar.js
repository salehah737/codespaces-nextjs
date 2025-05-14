'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { useAnalytics } from '../context/AnalyticsContext';
import UpgradeButton from './UpgradeButton';

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { track } = useAnalytics();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in (mock implementation)
  useEffect(() => {
    // In a real app, this would check the authentication state
    const checkAuth = async () => {
      // Mock authentication check
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    
    checkAuth();
  }, []);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    track('language_changed', { language: lang });
  };

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.mechanics, href: '/mechanics' },
    { name: t.nav.diagnostics, href: '/diagnostics' },
    { name: t.nav.marketplace, href: '/marketplace' },
    { name: t.nav.community, href: '/community' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
              MatMoto-PomenPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => track('nav_link_click', { link: link.href })}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side - Auth & Language */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
                onClick={() => handleLanguageChange(language === 'en' ? 'ms' : 'en')}
              >
                <span>{language === 'en' ? '🇺🇸 EN' : '🇲🇾 MS'}</span>
              </button>
            </div>

            {/* Auth Buttons or User Menu */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <UpgradeButton 
                  text={t.nav.upgrade}
                  variant="primary"
                  size="sm"
                  trackingId="navbar_upgrade_button"
                />
                
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-primary-600"
                  onClick={() => track('nav_cart_click')}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </Link>
                
                <div className="relative">
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium">JD</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-gray-700 hover:text-primary-600"
                  onClick={() => track('nav_signin_click')}
                >
                  {t.nav.signIn}
                </Link>
                
                <Link
                  href="/auth/register"
                  className="text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => track('nav_register_click')}
                >
                  {t.nav.register}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  track('mobile_nav_link_click', { link: link.href });
                }}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 pt-4 mt-2">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-primary-600 mb-4"
                    onClick={() => {
                      setIsMenuOpen(false);
                      track('mobile_profile_click');
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium">JD</span>
                    </div>
                    <span>My Profile</span>
                  </Link>
                  
                  <UpgradeButton 
                    text={t.nav.upgrade}
                    variant="primary"
                    size="sm"
                    className="w-full mb-2"
                    trackingId="mobile_navbar_upgrade_button"
                  />
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="block text-sm font-medium text-gray-700 hover:text-primary-600 mb-4"
                    onClick={() => {
                      setIsMenuOpen(false);
                      track('mobile_signin_click');
                    }}
                  >
                    {t.nav.signIn}
                  </Link>
                  
                  <Link
                    href="/auth/register"
                    className="block text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors text-center"
                    onClick={() => {
                      setIsMenuOpen(false);
                      track('mobile_register_click');
                    }}
                  >
                    {t.nav.register}
                  </Link>
                </>
              )}
              
              <button
                className="mt-4 flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
                onClick={() => {
                  handleLanguageChange(language === 'en' ? 'ms' : 'en');
                  setIsMenuOpen(false);
                }}
              >
                <span>{language === 'en' ? '🇺🇸 Switch to Bahasa Malaysia' : '🇲🇾 Switch to English'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
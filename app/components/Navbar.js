'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              MatMoto-PomenPro
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/mechanics" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
              {t.nav.findMechanics}
            </Link>
            <Link href="/marketplace" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
              {t.nav.marketplace}
            </Link>
            <Link href="/diagnostics" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
              {t.nav.diagnostics}
            </Link>
            <Link href="/scanner" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
              {t.nav.scanner}
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md flex items-center">
                {t.nav.register}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/register/mechanic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t.nav.registerAsMechanic}
                </Link>
                <Link href="/register/seller" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t.nav.registerAsSeller}
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/auth/signin" className="text-primary-600 hover:text-primary-800 px-3 py-2">
              {t.nav.login}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/mechanics" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
            {t.nav.findMechanics}
          </Link>
          <Link href="/marketplace" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
            {t.nav.marketplace}
          </Link>
          <Link href="/diagnostics" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
            {t.nav.diagnostics}
          </Link>
          <Link href="/scanner" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
            {t.nav.scanner}
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link href="/register/mechanic" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
            {t.nav.registerAsMechanic}
          </Link>
          <Link href="/register/seller" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
            {t.nav.registerAsSeller}
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link href="/auth/signin" className="block text-primary-600 hover:text-primary-800 px-3 py-2 rounded-md">
            {t.nav.login}
          </Link>
        </div>
      </div>
    </nav>
  );
}
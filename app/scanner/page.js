'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAnalytics } from '../context/AnalyticsContext';
import PartScanner from '../components/scanner/PartScanner';
import ScrollReveal from '../components/ScrollReveal';
import CTAButton from '../components/CTAButton';
import Link from 'next/link';

export default function ScannerPage() {
  const { language } = useLanguage();
  const { track } = useAnalytics();
  const [scanResults, setScanResults] = useState([]);
  
  const handleScanResult = (results) => {
    setScanResults(results);
    track('part_scanned', { count: results.length });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold text-center mb-2">
            {language === 'ms' ? 'Pengimbas Alat Ganti' : 'Parts Scanner'}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {language === 'ms' 
              ? 'Imbas manual kenderaan atau alat ganti untuk mendapatkan maklumat terperinci' 
              : 'Scan vehicle manuals or parts to get detailed information'}
          </p>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          {/* Brand-specific scanners */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {language === 'ms' ? 'Pengimbas Khusus Jenama' : 'Brand-Specific Scanners'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'ms' 
                ? 'Pilih pengimbas khusus untuk jenama tertentu bagi mendapatkan hasil yang lebih tepat.' 
                : 'Choose a brand-specific scanner for more accurate results.'}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/scanner/yamaha" className="block">
                <div className="border rounded-lg p-4 hover:border-primary-500 hover:bg-primary-50 transition-colors h-full">
                  <div className="aspect-w-16 aspect-h-9 w-full h-32 bg-gray-100 rounded-md mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400">YAMAHA</span>
                  </div>
                  <h3 className="font-medium text-center">
                    {language === 'ms' ? 'Pengimbas Yamaha' : 'Yamaha Scanner'}
                  </h3>
                </div>
              </Link>
              
              <div className="border rounded-lg p-4 bg-gray-50 h-full opacity-60">
                <div className="aspect-w-16 aspect-h-9 w-full h-32 bg-gray-100 rounded-md mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">HONDA</span>
                </div>
                <h3 className="font-medium text-center text-gray-500">
                  {language === 'ms' ? 'Akan Datang' : 'Coming Soon'}
                </h3>
              </div>
              
              <div className="border rounded-lg p-4 bg-gray-50 h-full opacity-60">
                <div className="aspect-w-16 aspect-h-9 w-full h-32 bg-gray-100 rounded-md mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">PROTON</span>
                </div>
                <h3 className="font-medium text-center text-gray-500">
                  {language === 'ms' ? 'Akan Datang' : 'Coming Soon'}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Generic scanner */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                {language === 'ms' ? 'Pengimbas Umum' : 'Generic Scanner'}
              </h2>
              <PartScanner onScanResult={handleScanResult} />
            </div>
          </div>
          
          {scanResults.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">
                {language === 'ms' ? 'Alat Ganti Dikesan' : 'Parts Detected'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scanResults.map((part) => (
                  <div key={part.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-lg">{part.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${part.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {part.availability 
                          ? (language === 'ms' ? 'Tersedia' : 'Available') 
                          : (language === 'ms' ? 'Tiada Stok' : 'Out of Stock')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'ms' ? 'No. Bahagian: ' : 'Part Number: '} 
                      <span className="font-mono">{part.partNumber}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === 'ms' ? 'Keserasian: ' : 'Compatibility: '} 
                      {part.compatibility.join(', ')}
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="font-medium">{part.price}</span>
                      <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                        {language === 'ms' ? 'Lihat Butiran' : 'View Details'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              {language === 'ms' ? 'Cara Menggunakan Pengimbas' : 'How to Use the Scanner'}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>{language === 'ms' ? 'Pilih kamera anda' : 'Select your camera'}</li>
              <li>{language === 'ms' ? 'Klik butang "Mulakan Kamera"' : 'Click the "Start Camera" button'}</li>
              <li>{language === 'ms' ? 'Arahkan kamera ke manual kenderaan atau alat ganti' : 'Point the camera at the vehicle manual or part'}</li>
              <li>{language === 'ms' ? 'Klik butang "Imbas Alat Ganti"' : 'Click the "Scan Part" button'}</li>
              <li>{language === 'ms' ? 'Lihat maklumat alat ganti yang dikesan' : 'View the detected part information'}</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              {language === 'ms' 
                ? 'Pengimbas ini menyokong manual kenderaan Malaysia termasuk Proton, Perodua, Honda, Toyota, Yamaha dan lain-lain.' 
                : 'This scanner supports Malaysian vehicle manuals including Proton, Perodua, Honda, Toyota, Yamaha, and more.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
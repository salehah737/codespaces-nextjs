'use client';

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import ProtonPartScanner from '../../components/scanner/ProtonPartScanner';
import ScrollReveal from '../../components/ScrollReveal';
import CTAButton from '../../components/CTAButton';
import { protonModels } from '../../lib/proton-parts-data';

export default function ProtonScannerPage() {
  const { language } = useLanguage();
  const { track } = useAnalytics();
  const [scanResults, setScanResults] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  
  const handleScanResult = (results) => {
    setScanResults(results);
    track('proton_part_scanned', { count: results.length });
  };

  const handleModelSelect = (modelId) => {
    setSelectedModel(protonModels.find(m => m.id === modelId));
    track('proton_model_selected', { model: modelId });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold text-center mb-2">
            {language === 'ms' ? 'Pengimbas Alat Ganti Proton' : 'Proton Parts Scanner'}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {language === 'ms' 
              ? 'Imbas alat ganti atau manual Proton untuk mendapatkan maklumat terperinci' 
              : 'Scan Proton parts or manuals to get detailed information'}
          </p>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          {!selectedModel ? (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {language === 'ms' ? 'Pilih Model Proton' : 'Select Proton Model'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'ms' 
                  ? 'Pilih model untuk mendapatkan hasil imbasan yang lebih tepat, atau terus ke pengimbas untuk mengesan alat ganti secara automatik.' 
                  : 'Choose a model for more accurate scanning results, or proceed directly to the scanner for automatic part detection.'}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {protonModels.map((model) => (
                  <div 
                    key={model.id}
                    className="border rounded-lg p-4 cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-colors"
                    onClick={() => handleModelSelect(model.id)}
                  >
                    <div className="aspect-w-16 aspect-h-9 w-full h-32 bg-gray-100 rounded-md mb-3 overflow-hidden">
                      {model.imageUrl && (
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${model.imageUrl})` }}
                        ></div>
                      )}
                    </div>
                    <h3 className="font-medium text-center">{model.name}</h3>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <CTAButton
                  text={language === 'ms' ? 'Langkau ke Pengimbas' : 'Skip to Scanner'}
                  onClick={() => setSelectedModel({ id: 'generic', name: 'Generic' })}
                  variant="secondary"
                />
              </div>
            </div>
          ) : (
            <>
              {selectedModel.id !== 'generic' && (
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                      {selectedModel.imageUrl && (
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${selectedModel.imageUrl})` }}
                        ></div>
                      )}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{selectedModel.name}</h2>
                      <p className="text-gray-600">
                        {language === 'ms' ? 'Model dipilih' : 'Selected model'}
                      </p>
                      <button 
                        className="text-primary-600 text-sm hover:underline mt-1"
                        onClick={() => setSelectedModel(null)}
                      >
                        {language === 'ms' ? 'Tukar model' : 'Change model'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <ProtonPartScanner 
                    onScanResult={handleScanResult} 
                    preselectedModel={selectedModel.id !== 'generic' ? selectedModel.id : null}
                  />
                </div>
              </div>
            </>
          )}
          
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              {language === 'ms' ? 'Tentang Pengimbas Alat Ganti Proton' : 'About Proton Parts Scanner'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'ms' 
                ? 'Pengimbas ini direka untuk mengenal pasti alat ganti Proton Malaysia berdasarkan imej atau manual. Ia menyokong model-model berikut:' 
                : 'This scanner is designed to identify Proton Malaysia parts based on images or manuals. It supports the following models:'}
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              {protonModels.map((model) => (
                <li key={model.id}>{model.name}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600">
              {language === 'ms' 
                ? 'Data alat ganti diambil dari katalog rasmi Proton Malaysia.' 
                : 'Parts data is sourced from the official Proton Malaysia catalog.'}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <a 
                href="https://www.proton.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                https://www.proton.com/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
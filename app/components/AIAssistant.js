'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AIAssistant({ onSuggestion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState(null);
  const { t, language } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() || isProcessing) return;

    setIsProcessing(true);
    setResponse(null);

    try {
      const res = await fetch('/api/ai/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          language
        }),
      });

      if (!res.ok) throw new Error('Failed to get AI response');
      
      const data = await res.json();
      setResponse(data);
      
      if (onSuggestion && data.suggestion) {
        onSuggestion(data.suggestion);
      }
    } catch (error) {
      console.error('AI Assistant error:', error);
      setResponse({
        error: true,
        message: language === 'ms' ? 
          'Maaf, terdapat ralat semasa memproses permintaan anda.' : 
          'Sorry, there was an error processing your request.'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
          <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">
              {language === 'ms' ? 'Pembantu AI' : 'AI Assistant'}
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="p-4 max-h-80 overflow-y-auto">
            {response ? (
              <div className={`p-3 rounded-lg ${response.error ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>
                {response.message || response.suggestion || JSON.stringify(response)}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                {language === 'ms' ? 
                  'Tanya apa-apa tentang kenderaan, mekanik, atau alat ganti.' : 
                  'Ask anything about vehicles, mechanics, or parts.'}
              </p>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={language === 'ms' ? 'Taip soalan anda...' : 'Type your question...'}
                className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                disabled={isProcessing}
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-r-md ${
                  isProcessing ? 'bg-gray-400' : 'bg-primary-600 hover:bg-primary-700'
                } text-white`}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
          aria-label="Open AI Assistant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </button>
      )}
    </div>
  );
}
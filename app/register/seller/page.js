'use client';

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import CTAButton from '../../components/CTAButton';
import ScrollReveal from '../../components/ScrollReveal';
import SellerRegistrationForm from '../../components/registration/SellerRegistrationForm';

export default function SellerRegistrationPage() {
  const { t, language } = useLanguage();
  const { track } = useAnalytics();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      idNumber: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
    },
    businessInfo: {
      businessName: '',
      businessType: 'individual', // individual, company, workshop
      registrationNumber: '',
      businessAddress: '',
      businessPhone: '',
      website: '',
      socialMedia: {
        facebook: '',
        instagram: '',
        tiktok: '',
      },
      yearEstablished: '',
    },
    productInfo: {
      categories: [],
      brands: [],
      condition: [], // new, used, refurbished
      shippingOptions: [],
      returnPolicy: '',
      warranty: false,
      warrantyPeriod: '',
    },
    verificationDocuments: {
      idCard: null,
      businessRegistration: null,
      shopPhotos: [],
      productCatalogue: null,
    },
    bankInfo: {
      accountName: '',
      accountNumber: '',
      bankName: '',
      swiftCode: '',
    },
    subscription: 'basic', // basic, premium, enterprise
    termsAccepted: false,
  });

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNestedChange = (section, parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [parent]: {
          ...prev[section][parent],
          [field]: value
        }
      }
    }));
  };

  const handleFileUpload = (section, field, files) => {
    if (!files || files.length === 0) return;
    
    // In a real app, we would upload these to a server
    // For demo purposes, we'll just store the file object
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: files[0]
      }
    }));
  };

  const handleMultiFileUpload = (section, field, files) => {
    if (!files || files.length === 0) return;
    
    // Convert FileList to Array and append to existing files
    const newFiles = Array.from(files);
    
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...prev[section][field], ...newFiles]
      }
    }));
  };

  const nextStep = () => {
    track('seller_registration_step', { step: step + 1 });
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // In a real app, we would submit this to an API
    track('seller_registration_complete', { 
      business_type: formData.businessInfo.businessType,
      categories: formData.productInfo.categories.join(','),
      subscription: formData.subscription
    });
    
    // Simulate API call
    setStep(4); // Success step
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold text-center mb-2">
            {language === 'ms' ? 'Pendaftaran Penjual' : 'Seller Registration'}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {language === 'ms' 
              ? 'Jual alat ganti dan kenderaan anda di pasaran kami' 
              : 'Sell your parts and vehicles in our marketplace'}
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className={`flex-1 ${i < 3 ? 'relative' : ''}`}
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
                      step >= i ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > i ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      i
                    )}
                  </div>
                  {i < 3 && (
                    <div 
                      className={`absolute top-5 left-0 w-full h-0.5 ${
                        step > i ? 'bg-primary-600' : 'bg-gray-200'
                      }`}
                      style={{ left: '50%', width: '100%' }}
                    ></div>
                  )}
                  <div className="text-xs text-center mt-2">
                    {language === 'ms' 
                      ? ['Maklumat Peribadi', 'Maklumat Perniagaan', 'Pengesahan'][i-1]
                      : ['Personal Info', 'Business Info', 'Verification'][i-1]
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {step === 4 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  {language === 'ms' ? 'Pendaftaran Berjaya!' : 'Registration Successful!'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {language === 'ms' 
                    ? 'Terima kasih kerana mendaftar sebagai penjual di MatMoto-PomenPro. Kami akan menghubungi anda untuk pengesahan dalam masa 24-48 jam.'
                    : 'Thank you for registering as a seller with MatMoto-PomenPro. We will contact you for verification within 24-48 hours.'
                  }
                </p>
                <CTAButton
                  href="/dashboard"
                  text={language === 'ms' ? 'Pergi ke Papan Pemuka' : 'Go to Dashboard'}
                  variant="gradient"
                />
              </div>
            ) : (
              <SellerRegistrationForm
                step={step}
                formData={formData}
                handleChange={handleChange}
                handleNestedChange={handleNestedChange}
                handleFileUpload={handleFileUpload}
                handleMultiFileUpload={handleMultiFileUpload}
                nextStep={nextStep}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
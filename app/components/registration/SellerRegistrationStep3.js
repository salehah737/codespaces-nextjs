'use client';

import { useLanguage } from '../../context/LanguageContext';
import CTAButton from '../CTAButton';

export default function SellerRegistrationStep3({
  formData,
  handleChange,
  handleFileUpload,
  handleMultiFileUpload,
  prevStep,
  handleSubmit
}) {
  const { language } = useLanguage();
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">
        {language === 'ms' ? 'Pengesahan & Langganan' : 'Verification & Subscription'}
      </h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">
          {language === 'ms' ? 'Dokumen Pengesahan' : 'Verification Documents'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ms' ? 'Kad Pengenalan' : 'ID Card'}*
            </label>
            <input
              type="file"
              onChange={(e) => handleFileUpload('verificationDocuments', 'idCard', e.target.files)}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              accept="image/*,.pdf"
              required={!formData.verificationDocuments.idCard}
            />
            {formData.verificationDocuments.idCard && (
              <p className="text-xs text-green-600 mt-1">
                {language === 'ms' ? 'Fail dimuat naik' : 'File uploaded'}: {formData.verificationDocuments.idCard.name}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ms' ? 'Pendaftaran Perniagaan' : 'Business Registration'}
            </label>
            <input
              type="file"
              onChange={(e) => handleFileUpload('verificationDocuments', 'businessRegistration', e.target.files)}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              accept="image/*,.pdf"
            />
            {formData.verificationDocuments.businessRegistration && (
              <p className="text-xs text-green-600 mt-1">
                {language === 'ms' ? 'Fail dimuat naik' : 'File uploaded'}: {formData.verificationDocuments.businessRegistration.name}
              </p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Gambar Kedai/Produk (boleh pilih berbilang)' : 'Shop/Product Photos (can select multiple)'}
          </label>
          <input
            type="file"
            onChange={(e) => handleMultiFileUpload('verificationDocuments', 'shopPhotos', e.target.files)}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            accept="image/*"
            multiple
          />
          {formData.verificationDocuments.shopPhotos.length > 0 && (
            <p className="text-xs text-green-600 mt-1">
              {language === 'ms' ? 'Fail dimuat naik' : 'Files uploaded'}: {formData.verificationDocuments.shopPhotos.length}
            </p>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">
          {language === 'ms' ? 'Maklumat Bank' : 'Bank Information'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ms' ? 'Nama Akaun' : 'Account Name'}*
            </label>
            <input
              type="text"
              value={formData.bankInfo.accountName}
              onChange={(e) => handleChange('bankInfo', 'accountName', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ms' ? 'Nombor Akaun' : 'Account Number'}*
            </label>
            <input
              type="text"
              value={formData.bankInfo.accountNumber}
              onChange={(e) => handleChange('bankInfo', 'accountNumber', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ms' ? 'Nama Bank' : 'Bank Name'}*
            </label>
            <select
              value={formData.bankInfo.bankName}
              onChange={(e) => handleChange('bankInfo', 'bankName', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              required
            >
              <option value="">{language === 'ms' ? 'Pilih Bank' : 'Select Bank'}</option>
              {[
                'Maybank', 'CIMB Bank', 'Public Bank', 'RHB Bank', 'Hong Leong Bank',
                'AmBank', 'Bank Islam', 'Bank Rakyat', 'OCBC Bank', 'UOB Bank'
              ].map(bank => (
                <option key={bank} value={bank}>{bank}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">
          {language === 'ms' ? 'Pilih Langganan' : 'Choose Subscription'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              id: 'basic',
              title: language === 'ms' ? 'Asas' : 'Basic',
              price: 'RM 0',
              features: language === 'ms' 
                ? ['Profil asas', 'Sehingga 10 produk', 'Sokongan e-mel']
                : ['Basic profile', 'Up to 10 products', 'Email support']
            },
            {
              id: 'premium',
              title: language === 'ms' ? 'Premium' : 'Premium',
              price: 'RM 49/bulan',
              features: language === 'ms'
                ? ['Profil terperinci', 'Produk tanpa had', 'Keutamaan dalam carian', 'Sokongan telefon']
                : ['Detailed profile', 'Unlimited products', 'Priority in search', 'Phone support']
            },
            {
              id: 'enterprise',
              title: language === 'ms' ? 'Perusahaan' : 'Enterprise',
              price: 'RM 199/bulan',
              features: language === 'ms'
                ? ['Semua ciri Premium', 'Pengiklanan dalam aplikasi', 'Pengurus akaun khusus', 'API integrasi']
                : ['All Premium features', 'In-app advertising', 'Dedicated account manager', 'API integration']
            }
          ].map(plan => (
            <div 
              key={plan.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                formData.subscription === plan.id 
                  ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500 ring-opacity-50' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}
              onClick={() => handleChange('subscription', '', plan.id)}
            >
              <h4 className="font-semibold text-lg">{plan.title}</h4>
              <p className="text-xl font-bold text-primary-600 my-2">{plan.price}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms-accepted"
            checked={formData.termsAccepted}
            onChange={(e) => handleChange('termsAccepted', '', e.target.checked)}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="terms-accepted" className="ml-2 text-sm text-gray-700">
            {language === 'ms' 
              ? 'Saya bersetuju dengan Terma dan Syarat serta Dasar Privasi' 
              : 'I agree to the Terms and Conditions and Privacy Policy'}*
          </label>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between">
        <CTAButton
          text={language === 'ms' ? 'Kembali' : 'Back'}
          onClick={prevStep}
          variant="secondary"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          }
        />
        <CTAButton
          text={language === 'ms' ? 'Hantar Pendaftaran' : 'Submit Registration'}
          type="submit"
          variant="gradient"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          }
        />
      </div>
    </form>
  );
}
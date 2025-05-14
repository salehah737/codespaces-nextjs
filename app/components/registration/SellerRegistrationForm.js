'use client';

import { useLanguage } from '../../context/LanguageContext';
import CTAButton from '../CTAButton';

export default function SellerRegistrationForm({
  step,
  formData,
  handleChange,
  handleNestedChange,
  handleFileUpload,
  handleMultiFileUpload,
  nextStep,
  prevStep,
  handleSubmit
}) {
  const { language } = useLanguage();
  
  const renderStep1 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {language === 'ms' ? 'Maklumat Peribadi' : 'Personal Information'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Nama Penuh' : 'Full Name'}*
          </label>
          <input
            type="text"
            value={formData.personalInfo.name}
            onChange={(e) => handleChange('personalInfo', 'name', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'E-mel' : 'Email'}*
          </label>
          <input
            type="email"
            value={formData.personalInfo.email}
            onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Nombor Telefon' : 'Phone Number'}*
          </label>
          <input
            type="tel"
            value={formData.personalInfo.phone}
            onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Nombor Kad Pengenalan' : 'ID Number'}*
          </label>
          <input
            type="text"
            value={formData.personalInfo.idNumber}
            onChange={(e) => handleChange('personalInfo', 'idNumber', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
            placeholder={language === 'ms' ? 'cth: 880101-01-1234' : 'e.g., 880101-01-1234'}
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'ms' ? 'Alamat' : 'Address'}*
        </label>
        <input
          type="text"
          value={formData.personalInfo.address}
          onChange={(e) => handleChange('personalInfo', 'address', e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Bandar' : 'City'}*
          </label>
          <input
            type="text"
            value={formData.personalInfo.city}
            onChange={(e) => handleChange('personalInfo', 'city', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Negeri' : 'State'}*
          </label>
          <select
            value={formData.personalInfo.state}
            onChange={(e) => handleChange('personalInfo', 'state', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          >
            <option value="">{language === 'ms' ? 'Pilih Negeri' : 'Select State'}</option>
            {[
              'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 
              'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 
              'Sarawak', 'Selangor', 'Terengganu', 'Kuala Lumpur', 'Labuan', 'Putrajaya'
            ].map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Poskod' : 'Postal Code'}*
          </label>
          <input
            type="text"
            value={formData.personalInfo.postalCode}
            onChange={(e) => handleChange('personalInfo', 'postalCode', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <CTAButton
          text={language === 'ms' ? 'Seterusnya' : 'Next'}
          onClick={nextStep}
          variant="primary"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          }
        />
      </div>
    </div>
  );

  // Render the appropriate step
  switch (step) {
    case 1:
      return renderStep1();
    case 2:
      return <SellerRegistrationStep2 
        formData={formData} 
        handleChange={handleChange} 
        handleNestedChange={handleNestedChange}
        nextStep={nextStep}
        prevStep={prevStep}
      />;
    case 3:
      return <SellerRegistrationStep3
        formData={formData}
        handleChange={handleChange}
        handleFileUpload={handleFileUpload}
        handleMultiFileUpload={handleMultiFileUpload}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />;
    default:
      return null;
  }
}
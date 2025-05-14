'use client';

import { useLanguage } from '../../context/LanguageContext';
import CTAButton from '../CTAButton';

export default function MechanicRegistrationForm({
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
  
  const renderStep2 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {language === 'ms' ? 'Maklumat Profesional' : 'Professional Information'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Pengalaman (Tahun)' : 'Experience (Years)'}*
          </label>
          <input
            type="number"
            value={formData.professionalInfo.experience}
            onChange={(e) => handleChange('professionalInfo', 'experience', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            min="0"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Nama Bengkel' : 'Workshop Name'}
          </label>
          <input
            type="text"
            value={formData.professionalInfo.workshopName}
            onChange={(e) => handleChange('professionalInfo', 'workshopName', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'ms' ? 'Alamat Bengkel' : 'Workshop Address'}
        </label>
        <input
          type="text"
          value={formData.professionalInfo.workshopAddress}
          onChange={(e) => handleChange('professionalInfo', 'workshopAddress', e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'ms' ? 'Pengkhususan' : 'Specialization'}*
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            { id: 'engine', label: language === 'ms' ? 'Enjin' : 'Engine' },
            { id: 'transmission', label: language === 'ms' ? 'Transmisi' : 'Transmission' },
            { id: 'brakes', label: language === 'ms' ? 'Brek' : 'Brakes' },
            { id: 'suspension', label: language === 'ms' ? 'Suspensi' : 'Suspension' },
            { id: 'electrical', label: language === 'ms' ? 'Elektrikal' : 'Electrical' },
            { id: 'ac', label: language === 'ms' ? 'Penyaman Udara' : 'Air Conditioning' },
            { id: 'bodywork', label: language === 'ms' ? 'Badan Kenderaan' : 'Bodywork' },
            { id: 'diagnostics', label: language === 'ms' ? 'Diagnostik' : 'Diagnostics' },
            { id: 'tires', label: language === 'ms' ? 'Tayar' : 'Tires' }
          ].map(item => (
            <div key={item.id} className="flex items-center">
              <input
                type="checkbox"
                id={`specialization-${item.id}`}
                checked={formData.professionalInfo.specialization.includes(item.id)}
                onChange={(e) => {
                  const updatedSpecializations = e.target.checked
                    ? [...formData.professionalInfo.specialization, item.id]
                    : formData.professionalInfo.specialization.filter(s => s !== item.id);
                  handleChange('professionalInfo', 'specialization', updatedSpecializations);
                }}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor={`specialization-${item.id}`} className="ml-2 text-sm text-gray-700">
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'ms' ? 'Jenis Kenderaan' : 'Vehicle Types'}*
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            { id: 'car', label: language === 'ms' ? 'Kereta' : 'Car' },
            { id: 'motorcycle', label: language === 'ms' ? 'Motosikal' : 'Motorcycle' },
            { id: 'truck', label: language === 'ms' ? 'Trak' : 'Truck' },
            { id: 'van', label: language === 'ms' ? 'Van' : 'Van' },
            { id: 'bus', label: language === 'ms' ? 'Bas' : 'Bus' },
            { id: 'luxury', label: language === 'ms' ? 'Mewah' : 'Luxury' }
          ].map(item => (
            <div key={item.id} className="flex items-center">
              <input
                type="checkbox"
                id={`vehicle-${item.id}`}
                checked={formData.professionalInfo.vehicleTypes.includes(item.id)}
                onChange={(e) => {
                  const updatedVehicleTypes = e.target.checked
                    ? [...formData.professionalInfo.vehicleTypes, item.id]
                    : formData.professionalInfo.vehicleTypes.filter(v => v !== item.id);
                  handleChange('professionalInfo', 'vehicleTypes', updatedVehicleTypes);
                }}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor={`vehicle-${item.id}`} className="ml-2 text-sm text-gray-700">
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="emergency-service"
            checked={formData.professionalInfo.hasEmergencyService}
            onChange={(e) => handleChange('professionalInfo', 'hasEmergencyService', e.target.checked)}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="emergency-service" className="ml-2 text-sm text-gray-700">
            {language === 'ms' ? 'Menyediakan perkhidmatan kecemasan' : 'Provides emergency service'}
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
  
  const renderStep3 = () => (
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
              {language === 'ms' ? 'Lesen Perniagaan' : 'Business License'}
            </label>
            <input
              type="file"
              onChange={(e) => handleFileUpload('verificationDocuments', 'businessLicense', e.target.files)}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              accept="image/*,.pdf"
            />
            {formData.verificationDocuments.businessLicense && (
              <p className="text-xs text-green-600 mt-1">
                {language === 'ms' ? 'Fail dimuat naik' : 'File uploaded'}: {formData.verificationDocuments.businessLicense.name}
              </p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Sijil (boleh pilih berbilang)' : 'Certifications (can select multiple)'}
          </label>
          <input
            type="file"
            onChange={(e) => handleMultiFileUpload('verificationDocuments', 'certifications', e.target.files)}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            accept="image/*,.pdf"
            multiple
          />
          {formData.verificationDocuments.certifications.length > 0 && (
            <p className="text-xs text-green-600 mt-1">
              {language === 'ms' ? 'Fail dimuat naik' : 'Files uploaded'}: {formData.verificationDocuments.certifications.length}
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
                ? ['Profil asas', 'Sehingga 5 perkhidmatan', 'Sokongan e-mel']
                : ['Basic profile', 'Up to 5 services', 'Email support']
            },
            {
              id: 'premium',
              title: language === 'ms' ? 'Premium' : 'Premium',
              price: 'RM 99/bulan',
              features: language === 'ms'
                ? ['Profil terperinci', 'Perkhidmatan tanpa had', 'Keutamaan dalam carian', 'Sokongan telefon']
                : ['Detailed profile', 'Unlimited services', 'Priority in search', 'Phone support']
            },
            {
              id: 'enterprise',
              title: language === 'ms' ? 'Perusahaan' : 'Enterprise',
              price: 'RM 299/bulan',
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
  
  // Render the appropriate step
  switch (step) {
    case 1:
      return renderStep1();
    case 2:
      return renderStep2();
    case 3:
      return renderStep3();
    default:
      return null;
  }
}
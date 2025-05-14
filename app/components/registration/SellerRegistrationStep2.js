'use client';

import { useLanguage } from '../../context/LanguageContext';
import CTAButton from '../CTAButton';

export default function SellerRegistrationStep2({
  formData,
  handleChange,
  handleNestedChange,
  nextStep,
  prevStep
}) {
  const { language } = useLanguage();
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {language === 'ms' ? 'Maklumat Perniagaan' : 'Business Information'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Nama Perniagaan' : 'Business Name'}*
          </label>
          <input
            type="text"
            value={formData.businessInfo.businessName}
            onChange={(e) => handleChange('businessInfo', 'businessName', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Jenis Perniagaan' : 'Business Type'}*
          </label>
          <select
            value={formData.businessInfo.businessType}
            onChange={(e) => handleChange('businessInfo', 'businessType', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          >
            <option value="individual">{language === 'ms' ? 'Individu' : 'Individual'}</option>
            <option value="company">{language === 'ms' ? 'Syarikat' : 'Company'}</option>
            <option value="workshop">{language === 'ms' ? 'Bengkel' : 'Workshop'}</option>
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'ms' ? 'Alamat Perniagaan' : 'Business Address'}*
        </label>
        <input
          type="text"
          value={formData.businessInfo.businessAddress}
          onChange={(e) => handleChange('businessInfo', 'businessAddress', e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Nombor Telefon Perniagaan' : 'Business Phone'}*
          </label>
          <input
            type="tel"
            value={formData.businessInfo.businessPhone}
            onChange={(e) => handleChange('businessInfo', 'businessPhone', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Laman Web' : 'Website'}
          </label>
          <input
            type="url"
            value={formData.businessInfo.website}
            onChange={(e) => handleChange('businessInfo', 'website', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="https://"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">
          {language === 'ms' ? 'Maklumat Produk' : 'Product Information'}
        </h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Kategori Produk' : 'Product Categories'}*
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { id: 'engine', label: language === 'ms' ? 'Enjin' : 'Engine' },
              { id: 'transmission', label: language === 'ms' ? 'Transmisi' : 'Transmission' },
              { id: 'brakes', label: language === 'ms' ? 'Brek' : 'Brakes' },
              { id: 'suspension', label: language === 'ms' ? 'Suspensi' : 'Suspension' },
              { id: 'electrical', label: language === 'ms' ? 'Elektrikal' : 'Electrical' },
              { id: 'body', label: language === 'ms' ? 'Badan' : 'Body' },
              { id: 'wheels', label: language === 'ms' ? 'Roda & Tayar' : 'Wheels & Tires' },
              { id: 'accessories', label: language === 'ms' ? 'Aksesori' : 'Accessories' },
              { id: 'oil', label: language === 'ms' ? 'Minyak & Cecair' : 'Oil & Fluids' }
            ].map(item => (
              <div key={item.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${item.id}`}
                  checked={formData.productInfo.categories.includes(item.id)}
                  onChange={(e) => {
                    const updatedCategories = e.target.checked
                      ? [...formData.productInfo.categories, item.id]
                      : formData.productInfo.categories.filter(c => c !== item.id);
                    handleChange('productInfo', 'categories', updatedCategories);
                  }}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor={`category-${item.id}`} className="ml-2 text-sm text-gray-700">
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Jenama' : 'Brands'}*
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              'Proton', 'Perodua', 'Honda', 'Toyota', 'Nissan', 
              'Mitsubishi', 'Yamaha', 'Modenas', 'Kawasaki', 'Suzuki',
              'Bosch', 'Denso', 'NGK', 'Castrol', 'Shell'
            ].map(brand => (
              <div key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${brand}`}
                  checked={formData.productInfo.brands.includes(brand)}
                  onChange={(e) => {
                    const updatedBrands = e.target.checked
                      ? [...formData.productInfo.brands, brand]
                      : formData.productInfo.brands.filter(b => b !== brand);
                    handleChange('productInfo', 'brands', updatedBrands);
                  }}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'ms' ? 'Keadaan Produk' : 'Product Condition'}*
          </label>
          <div className="flex space-x-4">
            {[
              { id: 'new', label: language === 'ms' ? 'Baru' : 'New' },
              { id: 'used', label: language === 'ms' ? 'Terpakai' : 'Used' },
              { id: 'refurbished', label: language === 'ms' ? 'Diperbaharui' : 'Refurbished' }
            ].map(item => (
              <div key={item.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`condition-${item.id}`}
                  checked={formData.productInfo.condition.includes(item.id)}
                  onChange={(e) => {
                    const updatedConditions = e.target.checked
                      ? [...formData.productInfo.condition, item.id]
                      : formData.productInfo.condition.filter(c => c !== item.id);
                    handleChange('productInfo', 'condition', updatedConditions);
                  }}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor={`condition-${item.id}`} className="ml-2 text-sm text-gray-700">
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
              id="warranty"
              checked={formData.productInfo.warranty}
              onChange={(e) => handleChange('productInfo', 'warranty', e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="warranty" className="ml-2 text-sm text-gray-700">
              {language === 'ms' ? 'Menawarkan waranti' : 'Offers warranty'}
            </label>
          </div>
          
          {formData.productInfo.warranty && (
            <div className="mt-2 ml-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'ms' ? 'Tempoh Waranti' : 'Warranty Period'}
              </label>
              <input
                type="text"
                value={formData.productInfo.warrantyPeriod}
                onChange={(e) => handleChange('productInfo', 'warrantyPeriod', e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder={language === 'ms' ? 'cth: 3 bulan' : 'e.g., 3 months'}
              />
            </div>
          )}
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
}
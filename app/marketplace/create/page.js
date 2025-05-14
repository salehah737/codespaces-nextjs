'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CreateListingPage() {
  const [formData, setFormData] = useState({
    title: '',
    type: 'vehicle',
    price: '',
    condition: 'used',
    description: '',
    location: '',
    make: '',
    model: '',
    year: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const requestPriceSuggestion = () => {
    // Simulate AI price suggestion
    setIsSubmitting(true);
    setTimeout(() => {
      // Mock AI price suggestion based on the form data
      let suggestedPrice = 0;
      
      if (formData.type === 'vehicle') {
        // Base price for vehicles
        if (formData.make.toLowerCase().includes('honda')) {
          suggestedPrice = 4000;
        } else if (formData.make.toLowerCase().includes('bmw')) {
          suggestedPrice = 7500;
        } else if (formData.make.toLowerCase().includes('yamaha')) {
          suggestedPrice = 5500;
        } else {
          suggestedPrice = 6000;
        }
        
        // Adjust for year
        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(formData.year || currentYear);
        suggestedPrice = suggestedPrice - (age * 200);
        
        // Adjust for condition
        if (formData.condition === 'like-new') {
          suggestedPrice = suggestedPrice * 1.2;
        } else if (formData.condition === 'good') {
          suggestedPrice = suggestedPrice * 0.9;
        } else if (formData.condition === 'fair') {
          suggestedPrice = suggestedPrice * 0.7;
        }
      } else {
        // Base price for parts
        suggestedPrice = 250;
        
        // Adjust for condition
        if (formData.condition === 'like-new') {
          suggestedPrice = suggestedPrice * 1.5;
        } else if (formData.condition === 'good') {
          suggestedPrice = suggestedPrice * 1;
        } else if (formData.condition === 'fair') {
          suggestedPrice = suggestedPrice * 0.6;
        }
      }
      
      setAiSuggestion({
        suggestedPrice: Math.round(suggestedPrice),
        explanation: `Based on similar ${formData.make} ${formData.model} listings in ${formData.condition} condition`,
        confidence: 85
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Listing created successfully!');
      setIsSubmitting(false);
      // In a real app, we would redirect to the new listing page
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Create New Listing</h1>
          <Link
            href="/marketplace"
            className="text-primary-600 hover:text-primary-800"
          >
            Back to Marketplace
          </Link>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Listing Type
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="vehicle"
                    checked={formData.type === 'vehicle'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-2">Vehicle</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="part"
                    checked={formData.type === 'part'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-2">Part</span>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="E.g., Honda CB500X 2018"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                  {aiSuggestion && (
                    <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        AI: ${aiSuggestion.suggestedPrice}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                  Make
                </label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="E.g., Honda"
                  value={formData.make}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="E.g., CB500X"
                  value={formData.model}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="E.g., 2018"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                  Condition
                </label>
                <select
                  id="condition"
                  name="condition"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  value={formData.condition}
                  onChange={handleInputChange}
                  required
                >
                  <option value="like-new">Like New</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="E.g., Berlin"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Describe your vehicle or part in detail"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photos
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <input
                  type="file"
                  id="photos"
                  className="hidden"
                  multiple
                  accept="image/*"
                />
                <label
                  htmlFor="photos"
                  className="cursor-pointer text-primary-600 hover:text-primary-800"
                >
                  Click to upload photos
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Upload up to 10 photos (max 5MB each)
                </p>
              </div>
            </div>
            
            {aiSuggestion ? (
              <div className="mb-6 bg-green-50 p-4 rounded-md">
                <h3 className="text-sm font-medium text-green-800">AI Price Suggestion</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Suggested price: <strong>${aiSuggestion.suggestedPrice}</strong></p>
                  <p className="mt-1">{aiSuggestion.explanation}</p>
                  <div className="mt-2 flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-green-600 h-1.5 rounded-full" 
                        style={{ width: `${aiSuggestion.confidence}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs font-medium text-green-700">
                      {aiSuggestion.confidence}% confidence
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <button
                  type="button"
                  className="px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
                  onClick={requestPriceSuggestion}
                  disabled={!formData.make || !formData.model || !formData.year || !formData.condition || isSubmitting}
                >
                  {isSubmitting ? 'Analyzing...' : 'Get AI Price Suggestion'}
                </button>
                <p className="text-xs text-gray-500 mt-1">
                  Our AI will analyze similar listings to suggest a fair price
                </p>
              </div>
            )}
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors disabled:bg-gray-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create Listing'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';

export default function DiagnosticsPage() {
  const [vehicleInfo, setVehicleInfo] = useState({
    make: '',
    model: '',
    year: '',
    issue: ''
  });
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate AI analysis with timeout
    setTimeout(() => {
      // Mock diagnosis results based on the issue description
      let result = null;
      
      if (vehicleInfo.issue.toLowerCase().includes('brake') || vehicleInfo.issue.toLowerCase().includes('squeak')) {
        result = {
          problem: 'Worn brake pads',
          confidence: 87,
          description: 'The squeaking sound when braking is typically caused by worn brake pads. The wear indicators are making contact with the brake rotor.',
          recommendation: 'Replace the brake pads soon. If ignored, this could lead to more expensive rotor damage.',
          urgency: 'Medium',
          estimatedCost: '$150-300 depending on vehicle model'
        };
      } else if (vehicleInfo.issue.toLowerCase().includes('start') || vehicleInfo.issue.toLowerCase().includes('battery')) {
        result = {
          problem: 'Battery or starter issue',
          confidence: 82,
          description: 'Difficulty starting could indicate a weak battery, faulty starter, or alternator problems.',
          recommendation: 'Have your battery tested. If it's good, the starter or alternator may need inspection.',
          urgency: 'High',
          estimatedCost: '$100-500 depending on the component that needs replacement'
        };
      } else {
        result = {
          problem: 'Requires professional diagnosis',
          confidence: 60,
          description: 'Based on the description provided, we recommend a professional inspection to accurately diagnose the issue.',
          recommendation: 'Visit a certified mechanic for a complete diagnostic scan.',
          urgency: 'Unknown',
          estimatedCost: 'Diagnostic fee typically $50-150'
        };
      }
      
      setDiagnosisResult(result);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Vehicle Diagnostics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Describe Your Vehicle Issue</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                    Make
                  </label>
                  <input
                    type="text"
                    id="make"
                    name="make"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., Toyota"
                    value={vehicleInfo.make}
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
                    placeholder="e.g., Camry"
                    value={vehicleInfo.model}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g., 2018"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={vehicleInfo.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
                  Describe the Issue
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Describe what's happening with your vehicle. E.g., 'My brakes squeak when I press them'"
                  value={vehicleInfo.issue}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors disabled:bg-gray-400"
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Issue'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upload Engine Sound</h2>
            <p className="text-gray-600 mb-4">
              Our AI can analyze engine sounds to help diagnose issues. Record and upload an audio file of your engine.
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <input
                type="file"
                id="sound-upload"
                className="hidden"
                accept="audio/*"
              />
              <label
                htmlFor="sound-upload"
                className="cursor-pointer text-primary-600 hover:text-primary-800"
              >
                Click to upload audio file
              </label>
              <p className="text-xs text-gray-500 mt-2">
                Supported formats: MP3, WAV (max 10MB)
              </p>
            </div>
          </div>
        </div>
        
        <div>
          {diagnosisResult ? (
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Diagnostic Results</h2>
              
              <div className="mb-4 flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${diagnosisResult.confidence}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {diagnosisResult.confidence}% confidence
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Likely Problem</h3>
                  <p className="mt-1 text-gray-600">{diagnosisResult.problem}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Description</h3>
                  <p className="mt-1 text-gray-600">{diagnosisResult.description}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Recommendation</h3>
                  <p className="mt-1 text-gray-600">{diagnosisResult.recommendation}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Urgency</h3>
                    <p className={`mt-1 font-medium ${
                      diagnosisResult.urgency === 'High' ? 'text-red-600' : 
                      diagnosisResult.urgency === 'Medium' ? 'text-yellow-600' : 
                      'text-green-600'
                    }`}>
                      {diagnosisResult.urgency}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Est. Cost</h3>
                    <p className="mt-1 text-gray-600">{diagnosisResult.estimatedCost}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                    onClick={() => alert('Finding mechanics near you...')}
                  >
                    Find Mechanics for This Issue
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-xl font-semibold mb-2">AI Diagnostic Assistant</h2>
              <p className="text-gray-600">
                Fill out the form with your vehicle details and describe the issue you're experiencing. Our AI will analyze the information and provide a diagnostic assessment.
              </p>
            </div>
          )}
          
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Maintenance Reminder</h2>
            <p className="text-gray-600 mb-4">
              Set up maintenance reminders for your vehicle based on mileage or time intervals.
            </p>
            <button
              className="w-full border border-primary-600 text-primary-600 px-4 py-2 rounded-md hover:bg-primary-50 transition-colors"
              onClick={() => alert('Maintenance reminder feature coming soon!')}
            >
              Set Up Reminders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
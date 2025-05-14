'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import MapView from '../components/MapView';
import VoiceSearch from '../components/VoiceSearch';

export default function MechanicsPage() {
  const { t } = useLanguage();
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  
  // Mock data for mechanics
  const mechanics = [
    { 
      id: 1, 
      name: 'John Smith', 
      specialty: 'Tesla repair', 
      rating: 4.8, 
      distance: '2.3 km',
      location: { lat: 3.1390, lng: 101.6869 + 0.01 }
    },
    { 
      id: 2, 
      name: 'Maria Garcia', 
      specialty: 'Vintage motorcycle tuning', 
      rating: 4.9, 
      distance: '3.5 km',
      location: { lat: 3.1390 + 0.01, lng: 101.6869 }
    },
    { 
      id: 3, 
      name: 'David Lee', 
      specialty: 'Brake specialist', 
      rating: 4.7, 
      distance: '1.8 km',
      location: { lat: 3.1390 - 0.01, lng: 101.6869 }
    },
  ];

  // Get user's location
  const getUserLocation = () => {
    setIsLoading(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setLocation(t.mechanics.currentLocation);
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('');
          setIsLoading(false);
          alert(t.mechanics.locationError);
        }
      );
    } else {
      alert(t.mechanics.geolocationNotSupported);
      setIsLoading(false);
    }
  };

  // Handle voice search result
  const handleVoiceResult = (result) => {
    setSpecialty(result);
  };

  // Prepare map markers
  const mapMarkers = mechanics.map(mechanic => ({
    lat: mechanic.location.lat,
    lng: mechanic.location.lng,
    title: mechanic.name,
    description: `${mechanic.specialty} - ${mechanic.rating}★`
  }));

  // Add user location marker if available
  if (userLocation) {
    mapMarkers.push({
      lat: userLocation.lat,
      lng: userLocation.lng,
      title: t.mechanics.yourLocation,
      description: t.mechanics.currentPosition
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t.mechanics.title}</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              {t.mechanics.location}
            </label>
            <div className="flex">
              <input
                type="text"
                id="location"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-primary-500 focus:border-primary-500"
                placeholder={t.mechanics.locationPlaceholder}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-300"
                onClick={getUserLocation}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="inline-block animate-spin h-4 w-4 border-t-2 border-gray-500 rounded-full"></span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <div>
            <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
              {t.mechanics.specialty}
            </label>
            <div className="flex">
              <input
                type="text"
                id="specialty"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-primary-500 focus:border-primary-500"
                placeholder={t.mechanics.specialtyPlaceholder}
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              />
              <VoiceSearch onResult={handleVoiceResult} />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            onClick={() => alert('Searching for mechanics...')}
          >
            {t.mechanics.search}
          </button>
          <button
            className="text-primary-600 hover:text-primary-800"
            onClick={() => setShowMap(!showMap)}
          >
            {showMap ? t.mechanics.hideMap : t.mechanics.showMap}
          </button>
        </div>
        
        {showMap && (
          <div className="mt-6">
            <MapView 
              markers={mapMarkers} 
              center={userLocation ? [userLocation.lng, userLocation.lat] : [101.6869, 3.1390]}
            />
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mechanics.map((mechanic) => (
          <div key={mechanic.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{mechanic.name}</h2>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {mechanic.rating} ★
                </span>
              </div>
              <p className="text-gray-600 mt-1">{mechanic.specialty}</p>
              <p className="text-gray-500 text-sm mt-2">{mechanic.distance} away</p>
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                  onClick={() => alert(`Booking ${mechanic.name}...`)}
                >
                  {t.mechanics.bookNow}
                </button>
                <Link
                  href={`/mechanics/${mechanic.id}`}
                  className="text-primary-600 px-4 py-2 hover:text-primary-800"
                >
                  {t.mechanics.viewProfile}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{t.mechanics.emergency}</h2>
        <button
          className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
          onClick={() => alert('Requesting emergency assistance...')}
        >
          {t.mechanics.requestRoadside}
        </button>
      </div>
    </div>
  );
}
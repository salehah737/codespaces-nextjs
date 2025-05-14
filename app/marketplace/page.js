'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [distance, setDistance] = useState('50');
  
  // Mock data for listings
  const listings = [
    { 
      id: 1, 
      title: 'Honda CB500X 2018', 
      price: 4200, 
      type: 'vehicle', 
      condition: 'Good',
      location: 'Berlin',
      distance: '8 km',
      image: 'https://placehold.co/300x200?text=Honda+CB500X'
    },
    { 
      id: 2, 
      title: 'BMW R1200GS Exhaust Pipe', 
      price: 350, 
      type: 'part', 
      condition: 'Like New',
      location: 'Munich',
      distance: '12 km',
      image: 'https://placehold.co/300x200?text=BMW+Exhaust'
    },
    { 
      id: 3, 
      title: 'Yamaha R6 2019', 
      price: 7800, 
      type: 'vehicle', 
      condition: 'Excellent',
      location: 'Hamburg',
      distance: '15 km',
      image: 'https://placehold.co/300x200?text=Yamaha+R6'
    },
    { 
      id: 4, 
      title: 'Ducati Monster Fairing', 
      price: 280, 
      type: 'part', 
      condition: 'Used',
      location: 'Frankfurt',
      distance: '5 km',
      image: 'https://placehold.co/300x200?text=Ducati+Fairing'
    },
  ];

  const filteredListings = listings.filter(listing => {
    if (category !== 'all' && listing.type !== category) return false;
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Vehicle & Parts Marketplace</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              id="search"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search vehicles or parts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="vehicle">Vehicles</option>
              <option value="part">Parts</option>
            </select>
          </div>
          <div>
            <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">
              Distance (km)
            </label>
            <select
              id="distance"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            >
              <option value="10">Within 10 km</option>
              <option value="25">Within 25 km</option>
              <option value="50">Within 50 km</option>
              <option value="100">Within 100 km</option>
              <option value="any">Any distance</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={listing.image} 
                alt={listing.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold">{listing.title}</h2>
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                  {listing.type === 'vehicle' ? 'Vehicle' : 'Part'}
                </span>
              </div>
              <p className="text-gray-900 font-bold mt-1">${listing.price}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>{listing.condition}</span>
                <span>{listing.distance} away</span>
              </div>
              <div className="mt-4">
                <Link
                  href={`/marketplace/${listing.id}`}
                  className="block w-full bg-primary-600 text-white text-center px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link
          href="/marketplace/create"
          className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
        >
          + Create New Listing
        </Link>
      </div>
    </div>
  );
}
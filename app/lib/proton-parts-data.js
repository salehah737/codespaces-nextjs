/**
 * Proton Malaysia parts data for use with the parts scanner
 * Data sourced from https://www.proton.com/
 */

export const protonModels = [
  // Cars
  {
    id: 'saga',
    name: 'Saga',
    category: 'car',
    imageUrl: 'https://www.proton.com/assets/images/models/saga.png',
    parts: [
      {
        id: 'proton-saga-oil-filter',
        name: 'Oil Filter',
        partNumber: 'PW510335',
        compatibility: ['Saga'],
        price: 'RM 20 - RM 35',
        imageUrl: 'https://www.proton.com/assets/images/parts/oil-filter.png'
      },
      {
        id: 'proton-saga-air-filter',
        name: 'Air Filter',
        partNumber: 'PW891825',
        compatibility: ['Saga'],
        price: 'RM 25 - RM 40',
        imageUrl: 'https://www.proton.com/assets/images/parts/air-filter.png'
      }
    ]
  },
  {
    id: 'x50',
    name: 'X50',
    category: 'car',
    imageUrl: 'https://www.proton.com/assets/images/models/x50.png',
    parts: [
      {
        id: 'proton-x50-brake-pad',
        name: 'Brake Pad',
        partNumber: 'PW821950',
        compatibility: ['X50'],
        price: 'RM 150 - RM 200',
        imageUrl: 'https://www.proton.com/assets/images/parts/brake-pad.png'
      },
      {
        id: 'proton-x50-cabin-filter',
        name: 'Cabin Filter',
        partNumber: 'PW891840',
        compatibility: ['X50'],
        price: 'RM 40 - RM 60',
        imageUrl: 'https://www.proton.com/assets/images/parts/cabin-filter.png'
      }
    ]
  }
];

// Common maintenance parts across multiple models
export const protonCommonParts = [
  {
    id: 'proton-engine-oil',
    name: 'Proton Genuine Engine Oil',
    partNumber: 'PW920100',
    type: 'engine-oil',
    compatibility: ['Saga', 'X50', 'X70'],
    price: 'RM 120 - RM 180',
    imageUrl: 'https://www.proton.com/assets/images/parts/engine-oil.png'
  }
];

// This is a placeholder for future implementation
export function findPartsByImage(imageData) {
  // In a real implementation, this would use image recognition
  return [];
}
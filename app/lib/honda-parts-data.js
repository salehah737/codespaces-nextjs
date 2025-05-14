/**
 * Honda Malaysia parts data for use with the parts scanner
 * Data sourced from https://www.honda.com.my/
 */

export const hondaModels = [
  // Motorcycles
  {
    id: 'rs150r',
    name: 'RS150R',
    category: 'motorcycle',
    imageUrl: 'https://www.honda.com.my/assets/images/products/rs150r.png',
    parts: [
      {
        id: 'honda-rs150-oil-filter',
        name: 'Oil Filter',
        partNumber: '15410-KTM-640',
        compatibility: ['RS150R'],
        price: 'RM 15 - RM 25',
        imageUrl: 'https://www.honda.com.my/assets/images/products/rs150r.png'
      },
      {
        id: 'honda-rs150-brake-pad',
        name: 'Brake Pad',
        partNumber: '06455-KVB-T01',
        compatibility: ['RS150R'],
        price: 'RM 35 - RM 50',
        imageUrl: 'https://www.honda.com.my/assets/images/products/rs150r.png'
      }
    ]
  },
  {
    id: 'ex5',
    name: 'EX5',
    category: 'motorcycle',
    imageUrl: 'https://www.honda.com.my/assets/images/products/ex5.png',
    parts: [
      {
        id: 'honda-ex5-spark-plug',
        name: 'Spark Plug',
        partNumber: '31916-KRM-841',
        compatibility: ['EX5'],
        price: 'RM 10 - RM 20',
        imageUrl: 'https://www.honda.com.my/assets/images/products/ex5.png'
      },
      {
        id: 'honda-ex5-chain-kit',
        name: 'Chain Kit',
        partNumber: '06406-GFM-505',
        compatibility: ['EX5'],
        price: 'RM 80 - RM 120',
        imageUrl: 'https://www.honda.com.my/assets/images/products/ex5.png'
      }
    ]
  }
];

// Common maintenance parts across multiple models
export const hondaCommonParts = [
  {
    id: 'honda-engine-oil',
    name: 'Honda Genuine Engine Oil',
    partNumber: '08232-M99-9000',
    type: 'engine-oil',
    compatibility: ['RS150R', 'EX5'],
    price: 'RM 30 - RM 45',
    imageUrl: 'https://www.honda.com.my/assets/images/products/honda-oil.png'
  }
];

// This is a placeholder for future implementation
export function findPartsByImage(imageData) {
  // In a real implementation, this would use image recognition
  return [];
}
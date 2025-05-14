/**
 * Perodua Malaysia parts data for use with the parts scanner
 * Data sourced from https://www.perodua.com.my/
 */

export const peroduaModels = [
  // Cars
  {
    id: 'myvi',
    name: 'Myvi',
    category: 'car',
    imageUrl: 'https://www.perodua.com.my/assets/images/models/myvi.png',
    parts: [
      {
        id: 'perodua-myvi-oil-filter',
        name: 'Oil Filter',
        partNumber: 'PD15601-WZ010',
        compatibility: ['Myvi'],
        price: 'RM 15 - RM 25',
        imageUrl: 'https://www.perodua.com.my/assets/images/parts/oil-filter.png'
      },
      {
        id: 'perodua-myvi-air-filter',
        name: 'Air Filter',
        partNumber: 'PD17801-WZ010',
        compatibility: ['Myvi'],
        price: 'RM 25 - RM 40',
        imageUrl: 'https://www.perodua.com.my/assets/images/parts/air-filter.png'
      }
    ]
  },
  {
    id: 'axia',
    name: 'Axia',
    category: 'car',
    imageUrl: 'https://www.perodua.com.my/assets/images/models/axia.png',
    parts: [
      {
        id: 'perodua-axia-brake-pad',
        name: 'Brake Pad',
        partNumber: 'PD04465-WZ010',
        compatibility: ['Axia'],
        price: 'RM 80 - RM 120',
        imageUrl: 'https://www.perodua.com.my/assets/images/parts/brake-pad.png'
      },
      {
        id: 'perodua-axia-cabin-filter',
        name: 'Cabin Filter',
        partNumber: 'PD87139-WZ010',
        compatibility: ['Axia'],
        price: 'RM 30 - RM 50',
        imageUrl: 'https://www.perodua.com.my/assets/images/parts/cabin-filter.png'
      }
    ]
  },
  {
    id: 'bezza',
    name: 'Bezza',
    category: 'car',
    imageUrl: 'https://www.perodua.com.my/assets/images/models/bezza.png',
    parts: [
      {
        id: 'perodua-bezza-spark-plug',
        name: 'Spark Plug',
        partNumber: 'PD90048-WZ010',
        compatibility: ['Bezza'],
        price: 'RM 40 - RM 60',
        imageUrl: 'https://www.perodua.com.my/assets/images/parts/spark-plug.png'
      },
      {
        id: 'perodua-bezza-wiper-blade',
        name: 'Wiper Blade',
        partNumber: 'PD85222-WZ010',
        compatibility: ['Bezza'],
        price: 'RM 30 - RM 50',
        imageUrl: 'https://www.perodua.com.my/assets/images/parts/wiper-blade.png'
      }
    ]
  }
];

// Common maintenance parts across multiple models
export const peroduaCommonParts = [
  {
    id: 'perodua-engine-oil',
    name: 'Perodua Genuine Engine Oil',
    partNumber: 'PD08880-WZ010',
    type: 'engine-oil',
    compatibility: ['Myvi', 'Axia', 'Bezza', 'Aruz'],
    price: 'RM 90 - RM 120',
    imageUrl: 'https://www.perodua.com.my/assets/images/parts/engine-oil.png'
  },
  {
    id: 'perodua-coolant',
    name: 'Perodua Genuine Coolant',
    partNumber: 'PD08889-WZ010',
    type: 'coolant',
    compatibility: ['Myvi', 'Axia', 'Bezza', 'Aruz'],
    price: 'RM 25 - RM 40',
    imageUrl: 'https://www.perodua.com.my/assets/images/parts/coolant.png'
  }
];

// Function to search for parts by image similarity (simulated)
export function findPartsByImage(imageData) {
  // In a real implementation, this would use image recognition
  // For now, we'll return some sample parts
  return [
    peroduaModels[0].parts[0],
    peroduaCommonParts[0]
  ];
}

// Function to search for parts by model
export function findPartsByModel(modelId) {
  const model = peroduaModels.find(m => m.id === modelId);
  if (!model) return [];
  return model.parts;
}

// Function to search for parts by part number
export function findPartsByPartNumber(partNumber) {
  const results = [];
  
  // Search in model-specific parts
  peroduaModels.forEach(model => {
    model.parts.forEach(part => {
      if (part.partNumber.toLowerCase().includes(partNumber.toLowerCase())) {
        results.push(part);
      }
    });
  });
  
  // Search in common parts
  peroduaCommonParts.forEach(part => {
    if (part.partNumber.toLowerCase().includes(partNumber.toLowerCase())) {
      results.push(part);
    }
  });
  
  return results;
}
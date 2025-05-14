/**
 * Yamaha Malaysia parts data for use with the parts scanner
 * Data sourced from https://www.yamaha-motor.com.my/products/
 */

export const yamahaModels = [
  // Motorcycles
  {
    id: 'y15zr',
    name: 'Y15ZR',
    category: 'motorcycle',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/Y15ZR-V3-CYAN-METALLIC-STUDIO-SIDE.png',
    parts: [
      {
        id: 'ym-y15-oil-filter',
        name: 'Oil Filter',
        partNumber: '5TL-13440-00',
        compatibility: ['Y15ZR', 'Y16ZR', 'LC135'],
        price: 'RM 15 - RM 25',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/Y15ZR-V3-CYAN-METALLIC-STUDIO-SIDE.png'
      },
      {
        id: 'ym-y15-brake-pad',
        name: 'Brake Pad',
        partNumber: '5BP-F5805-10',
        compatibility: ['Y15ZR', 'Y16ZR', 'LC135'],
        price: 'RM 30 - RM 45',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/Y15ZR-V3-CYAN-METALLIC-STUDIO-SIDE.png'
      },
      {
        id: 'ym-y15-air-filter',
        name: 'Air Filter',
        partNumber: '5TL-E4451-00',
        compatibility: ['Y15ZR'],
        price: 'RM 25 - RM 40',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/Y15ZR-V3-CYAN-METALLIC-STUDIO-SIDE.png'
      }
    ]
  },
  {
    id: 'y16zr',
    name: 'Y16ZR',
    category: 'motorcycle',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/Y16ZR-RAGING-YELLOW-STUDIO-SIDE.png',
    parts: [
      {
        id: 'ym-y16-oil-filter',
        name: 'Oil Filter',
        partNumber: '5TL-13440-00',
        compatibility: ['Y15ZR', 'Y16ZR', 'LC135'],
        price: 'RM 15 - RM 25',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/Y16ZR-RAGING-YELLOW-STUDIO-SIDE.png'
      },
      {
        id: 'ym-y16-spark-plug',
        name: 'Spark Plug',
        partNumber: '90793-E0063',
        compatibility: ['Y16ZR'],
        price: 'RM 35 - RM 50',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/Y16ZR-RAGING-YELLOW-STUDIO-SIDE.png'
      }
    ]
  },
  {
    id: 'lc135',
    name: 'LC135',
    category: 'motorcycle',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/LC135-CYAN-METALLIC-STUDIO-SIDE.png',
    parts: [
      {
        id: 'ym-lc135-oil-filter',
        name: 'Oil Filter',
        partNumber: '5TL-13440-00',
        compatibility: ['Y15ZR', 'Y16ZR', 'LC135'],
        price: 'RM 15 - RM 25',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/LC135-CYAN-METALLIC-STUDIO-SIDE.png'
      },
      {
        id: 'ym-lc135-chain-kit',
        name: 'Chain Kit',
        partNumber: '5S9-F5415-00',
        compatibility: ['LC135'],
        price: 'RM 120 - RM 150',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/LC135-CYAN-METALLIC-STUDIO-SIDE.png'
      }
    ]
  },
  {
    id: 'nmax',
    name: 'NMAX',
    category: 'scooter',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/NMAX-MATTE-BLUE-STUDIO-SIDE.png',
    parts: [
      {
        id: 'ym-nmax-belt',
        name: 'V-Belt',
        partNumber: 'BDC-E7641-00',
        compatibility: ['NMAX'],
        price: 'RM 80 - RM 120',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/NMAX-MATTE-BLUE-STUDIO-SIDE.png'
      },
      {
        id: 'ym-nmax-air-filter',
        name: 'Air Filter',
        partNumber: '2DP-E4451-00',
        compatibility: ['NMAX'],
        price: 'RM 35 - RM 50',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/NMAX-MATTE-BLUE-STUDIO-SIDE.png'
      }
    ]
  },
  {
    id: 'r15',
    name: 'R15',
    category: 'motorcycle',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/R15M-MONSTER-ENERGY-YAMAHA-MOTOGP-EDITION-STUDIO-SIDE.png',
    parts: [
      {
        id: 'ym-r15-brake-pad',
        name: 'Brake Pad',
        partNumber: '1WD-F5805-00',
        compatibility: ['R15'],
        price: 'RM 45 - RM 65',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/R15M-MONSTER-ENERGY-YAMAHA-MOTOGP-EDITION-STUDIO-SIDE.png'
      },
      {
        id: 'ym-r15-oil-filter',
        name: 'Oil Filter',
        partNumber: '5GH-13440-70',
        compatibility: ['R15', 'MT-15'],
        price: 'RM 20 - RM 30',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/R15M-MONSTER-ENERGY-YAMAHA-MOTOGP-EDITION-STUDIO-SIDE.png'
      }
    ]
  },
  {
    id: 'mt15',
    name: 'MT-15',
    category: 'motorcycle',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/MT-15-CYAN-STORM-STUDIO-SIDE.png',
    parts: [
      {
        id: 'ym-mt15-oil-filter',
        name: 'Oil Filter',
        partNumber: '5GH-13440-70',
        compatibility: ['R15', 'MT-15'],
        price: 'RM 20 - RM 30',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/MT-15-CYAN-STORM-STUDIO-SIDE.png'
      },
      {
        id: 'ym-mt15-air-filter',
        name: 'Air Filter',
        partNumber: 'B3J-E4451-00',
        compatibility: ['MT-15'],
        price: 'RM 35 - RM 50',
        imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/MT-15-CYAN-STORM-STUDIO-SIDE.png'
      }
    ]
  }
];

// Common maintenance parts across multiple models
export const yamahaCommonParts = [
  {
    id: 'ym-yamalube-4t',
    name: 'Yamalube 4T Engine Oil',
    partNumber: 'YMD-63001-04',
    type: 'engine-oil',
    compatibility: ['Y15ZR', 'Y16ZR', 'LC135', 'R15', 'MT-15'],
    price: 'RM 30 - RM 45',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/yamalube-4t.png'
  },
  {
    id: 'ym-yamalube-scooter',
    name: 'Yamalube Scooter Engine Oil',
    partNumber: 'YMD-63001-SC',
    type: 'engine-oil',
    compatibility: ['NMAX', 'NVX'],
    price: 'RM 35 - RM 50',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/yamalube-scooter.png'
  },
  {
    id: 'ym-brake-fluid',
    name: 'Yamaha Brake Fluid',
    partNumber: 'YMD-65001-BF',
    type: 'brake-fluid',
    compatibility: ['Y15ZR', 'Y16ZR', 'LC135', 'NMAX', 'R15', 'MT-15'],
    price: 'RM 25 - RM 35',
    imageUrl: 'https://www.yamaha-motor.com.my/wp-content/uploads/2023/03/yamaha-brake-fluid.png'
  }
];

// Function to search for parts by image similarity (simulated)
export function findPartsByImage(imageData) {
  // In a real implementation, this would use image recognition
  // For now, we'll return some sample parts
  return [
    yamahaModels[0].parts[0],
    yamahaModels[1].parts[0],
    yamahaCommonParts[0]
  ];
}

// Function to search for parts by model
export function findPartsByModel(modelId) {
  const model = yamahaModels.find(m => m.id === modelId);
  if (!model) return [];
  return model.parts;
}

// Function to search for parts by part number
export function findPartsByPartNumber(partNumber) {
  const results = [];
  
  // Search in model-specific parts
  yamahaModels.forEach(model => {
    model.parts.forEach(part => {
      if (part.partNumber.toLowerCase().includes(partNumber.toLowerCase())) {
        results.push(part);
      }
    });
  });
  
  // Search in common parts
  yamahaCommonParts.forEach(part => {
    if (part.partNumber.toLowerCase().includes(partNumber.toLowerCase())) {
      results.push(part);
    }
  });
  
  return results;
}
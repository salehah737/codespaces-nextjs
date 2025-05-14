import { NextResponse } from 'next/server';

export async function GET() {
  // Return information about all supported brands
  const brands = [
    {
      id: 'yamaha',
      name: 'Yamaha',
      logo: 'https://www.yamaha-motor.com.my/wp-content/themes/yamaha/images/logo.png',
      website: 'https://www.yamaha-motor.com.my/',
      categories: ['motorcycle', 'scooter'],
      country: 'Japan',
      description: {
        en: 'Yamaha Motor Company is a Japanese manufacturer of motorcycles, marine products, and other motorized vehicles.',
        ms: 'Yamaha Motor Company adalah pengeluar Jepun untuk motosikal, produk marin, dan kenderaan bermotor lain.'
      }
    },
    {
      id: 'honda',
      name: 'Honda',
      logo: 'https://www.honda.com.my/assets/images/logo.png',
      website: 'https://www.honda.com.my/',
      categories: ['motorcycle', 'car'],
      country: 'Japan',
      description: {
        en: 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment.',
        ms: 'Honda Motor Co., Ltd. adalah konglomerat multinasional awam Jepun yang mengeluarkan automobil, motosikal, dan peralatan kuasa.'
      }
    },
    {
      id: 'proton',
      name: 'Proton',
      logo: 'https://www.proton.com/assets/images/logo.png',
      website: 'https://www.proton.com/',
      categories: ['car'],
      country: 'Malaysia',
      description: {
        en: 'Proton Holdings Berhad is a Malaysian automotive company and automobile manufacturer.',
        ms: 'Proton Holdings Berhad adalah syarikat automotif dan pengeluar automobil Malaysia.'
      }
    },
    {
      id: 'perodua',
      name: 'Perodua',
      logo: 'https://www.perodua.com.my/assets/images/logo.png',
      website: 'https://www.perodua.com.my/',
      categories: ['car'],
      country: 'Malaysia',
      description: {
        en: 'Perodua, short for Perusahaan Otomobil Kedua, is Malaysia\'s second largest automobile manufacturer.',
        ms: 'Perodua, singkatan untuk Perusahaan Otomobil Kedua, adalah pengeluar automobil kedua terbesar di Malaysia.'
      }
    }
  ];
  
  return NextResponse.json({
    brands,
    count: brands.length
  });
}
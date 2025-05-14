import { NextResponse } from 'next/server';
import { yamahaModels } from '../../lib/yamaha-parts-data';
import { hondaModels } from '../../lib/honda-parts-data';
import { protonModels } from '../../lib/proton-parts-data';
import { peroduaModels } from '../../lib/perodua-parts-data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get('brand')?.toLowerCase() || '';
  const category = searchParams.get('category')?.toLowerCase() || '';
  
  // Collect all models data with brand information
  let allModels = [
    ...yamahaModels.map(model => ({ ...model, brand: 'Yamaha' })),
    ...hondaModels.map(model => ({ ...model, brand: 'Honda' })),
    ...protonModels.map(model => ({ ...model, brand: 'Proton' })),
    ...peroduaModels.map(model => ({ ...model, brand: 'Perodua' }))
  ];
  
  // Filter models based on search parameters
  if (brand) {
    allModels = allModels.filter(model => model.brand.toLowerCase() === brand);
  }
  
  if (category) {
    allModels = allModels.filter(model => model.category.toLowerCase() === category);
  }
  
  // Group models by brand
  const groupedModels = allModels.reduce((acc, model) => {
    if (!acc[model.brand]) {
      acc[model.brand] = [];
    }
    acc[model.brand].push(model);
    return acc;
  }, {});
  
  return NextResponse.json({
    models: allModels,
    groupedModels,
    count: allModels.length,
    query: { brand, category }
  });
}
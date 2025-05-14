import { NextResponse } from 'next/server';
import { yamahaModels, yamahaCommonParts } from '../../../lib/yamaha-parts-data';
import { hondaModels, hondaCommonParts } from '../../../lib/honda-parts-data';
import { protonModels, protonCommonParts } from '../../../lib/proton-parts-data';
import { peroduaModels, peroduaCommonParts } from '../../../lib/perodua-parts-data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const brand = searchParams.get('brand')?.toLowerCase() || '';
  const model = searchParams.get('model')?.toLowerCase() || '';
  const category = searchParams.get('category')?.toLowerCase() || '';
  
  if (!query && !brand && !model && !category) {
    return NextResponse.json({ 
      error: 'Please provide at least one search parameter' 
    }, { status: 400 });
  }
  
  // Collect all parts data
  let allParts = [];
  let allModels = [];
  
  // Add Yamaha parts
  allModels = [...allModels, ...yamahaModels];
  yamahaModels.forEach(model => {
    model.parts.forEach(part => {
      allParts.push({
        ...part,
        brand: 'Yamaha',
        modelName: model.name
      });
    });
  });
  yamahaCommonParts.forEach(part => {
    allParts.push({
      ...part,
      brand: 'Yamaha'
    });
  });
  
  // Add Honda parts
  allModels = [...allModels, ...hondaModels];
  hondaModels.forEach(model => {
    model.parts.forEach(part => {
      allParts.push({
        ...part,
        brand: 'Honda',
        modelName: model.name
      });
    });
  });
  hondaCommonParts.forEach(part => {
    allParts.push({
      ...part,
      brand: 'Honda'
    });
  });
  
  // Add Proton parts
  allModels = [...allModels, ...protonModels];
  protonModels.forEach(model => {
    model.parts.forEach(part => {
      allParts.push({
        ...part,
        brand: 'Proton',
        modelName: model.name
      });
    });
  });
  protonCommonParts.forEach(part => {
    allParts.push({
      ...part,
      brand: 'Proton'
    });
  });
  
  // Add Perodua parts
  allModels = [...allModels, ...peroduaModels];
  peroduaModels.forEach(model => {
    model.parts.forEach(part => {
      allParts.push({
        ...part,
        brand: 'Perodua',
        modelName: model.name
      });
    });
  });
  peroduaCommonParts.forEach(part => {
    allParts.push({
      ...part,
      brand: 'Perodua'
    });
  });
  
  // Filter parts based on search parameters
  let results = allParts;
  
  if (query) {
    results = results.filter(part => 
      part.name.toLowerCase().includes(query) || 
      part.partNumber.toLowerCase().includes(query) ||
      (part.compatibility && part.compatibility.some(c => c.toLowerCase().includes(query)))
    );
  }
  
  if (brand) {
    results = results.filter(part => part.brand.toLowerCase() === brand);
  }
  
  if (model) {
    results = results.filter(part => 
      (part.modelName && part.modelName.toLowerCase().includes(model)) ||
      (part.compatibility && part.compatibility.some(c => c.toLowerCase().includes(model)))
    );
  }
  
  if (category) {
    results = results.filter(part => 
      (part.type && part.type.toLowerCase().includes(category))
    );
  }
  
  return NextResponse.json({
    results,
    count: results.length,
    query: { query, brand, model, category }
  });
}
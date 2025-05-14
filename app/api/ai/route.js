import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { query, vehicleInfo } = await request.json();
    
    // In a real app, this would call an AI service API
    // This is a mock implementation for demonstration
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let response = {};
    
    if (query === 'diagnose') {
      response = mockDiagnostics(vehicleInfo);
    } else if (query === 'price-suggestion') {
      response = mockPriceSuggestion(vehicleInfo);
    } else if (query === 'compatibility-check') {
      response = mockCompatibilityCheck(vehicleInfo);
    } else {
      return NextResponse.json(
        { error: 'Invalid query type' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('AI API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function mockDiagnostics(vehicleInfo) {
  const { issue } = vehicleInfo;
  
  if (issue.toLowerCase().includes('brake') || issue.toLowerCase().includes('squeak')) {
    return {
      problem: 'Worn brake pads',
      confidence: 87,
      description: 'The squeaking sound when braking is typically caused by worn brake pads. The wear indicators are making contact with the brake rotor.',
      recommendation: 'Replace the brake pads soon. If ignored, this could lead to more expensive rotor damage.',
      urgency: 'Medium',
      estimatedCost: '$150-300 depending on vehicle model'
    };
  } else if (issue.toLowerCase().includes('start') || issue.toLowerCase().includes('battery')) {
    return {
      problem: 'Battery or starter issue',
      confidence: 82,
      description: 'Difficulty starting could indicate a weak battery, faulty starter, or alternator problems.',
      recommendation: 'Have your battery tested. If it is good, the starter or alternator may need inspection.',
      urgency: 'High',
      estimatedCost: '$100-500 depending on the component that needs replacement'
    };
  } else {
    return {
      problem: 'Requires professional diagnosis',
      confidence: 60,
      description: 'Based on the description provided, we recommend a professional inspection to accurately diagnose the issue.',
      recommendation: 'Visit a certified mechanic for a complete diagnostic scan.',
      urgency: 'Unknown',
      estimatedCost: 'Diagnostic fee typically $50-150'
    };
  }
}

function mockPriceSuggestion(vehicleInfo) {
  const { type, make, model, year, condition } = vehicleInfo;
  
  let basePrice = 0;
  let explanation = '';
  let confidence = 85;
  
  if (type === 'vehicle') {
    // Base price for vehicles based on make
    if (make.toLowerCase().includes('honda')) {
      basePrice = 4000;
    } else if (make.toLowerCase().includes('bmw')) {
      basePrice = 7500;
    } else if (make.toLowerCase().includes('yamaha')) {
      basePrice = 5500;
    } else {
      basePrice = 6000;
    }
    
    // Adjust for year
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year || currentYear);
    basePrice = basePrice - (age * 200);
    
    // Adjust for condition
    if (condition === 'like-new') {
      basePrice = basePrice * 1.2;
    } else if (condition === 'good') {
      basePrice = basePrice * 0.9;
    } else if (condition === 'fair') {
      basePrice = basePrice * 0.7;
    }
    
    explanation = `Based on ${make} ${model} ${year} in ${condition} condition. Analysis of 24 similar listings in your area.`;
  } else {
    // Base price for parts
    basePrice = 250;
    
    // Adjust for condition
    if (condition === 'like-new') {
      basePrice = basePrice * 1.5;
    } else if (condition === 'good') {
      basePrice = basePrice * 1;
    } else if (condition === 'fair') {
      basePrice = basePrice * 0.6;
    }
    
    explanation = `Based on ${make} ${model} parts in ${condition} condition. Analysis of 18 similar listings in your area.`;
  }
  
  return {
    suggestedPrice: Math.round(basePrice),
    explanation,
    confidence
  };
}

function mockCompatibilityCheck(vehicleInfo) {
  const { partMake, partModel, partYear, vehicleMake, vehicleModel, vehicleYear } = vehicleInfo;
  
  const sameManufacturer = partMake.toLowerCase() === vehicleMake.toLowerCase();
  const sameModel = partModel.toLowerCase().includes(vehicleModel.toLowerCase()) || 
                    vehicleModel.toLowerCase().includes(partModel.toLowerCase());
  const yearDiff = Math.abs(parseInt(partYear) - parseInt(vehicleYear));
  
  let compatible = false;
  let confidence = 0;
  let explanation = '';
  
  if (sameManufacturer && sameModel && yearDiff <= 2) {
    compatible = true;
    confidence = 90;
    explanation = `This ${partMake} ${partModel} part is likely compatible with your ${vehicleYear} ${vehicleMake} ${vehicleModel}. Parts from ${partYear} typically fit models within 2 years.`;
  } else if (sameManufacturer && sameModel && yearDiff <= 5) {
    compatible = true;
    confidence = 70;
    explanation = `This part may be compatible, but there could be minor differences between the ${partYear} and ${vehicleYear} models. Verify specific fitment details.`;
  } else {
    compatible = false;
    confidence = 85;
    explanation = `This ${partMake} part is not compatible with your ${vehicleMake} ${vehicleModel}. Different manufacturers use different specifications and mounting points.`;
  }
  
  return {
    compatible,
    confidence,
    explanation
  };
}
// Mock database for MatMoto-PomenPro app
// In a real application, this would be replaced with a proper database connection

export const mechanics = [
  { 
    id: 1, 
    name: 'John Smith', 
    specialty: 'Tesla repair', 
    rating: 4.8, 
    distance: '2.3 km',
    location: { lat: 52.520008, lng: 13.404954 },
    availability: 'Available now',
    hourlyRate: 75,
    reviews: [
      { id: 1, user: 'Alex M.', rating: 5, comment: 'Fixed my Tesla Model 3 quickly and efficiently.' },
      { id: 2, user: 'Sarah K.', rating: 4, comment: 'Good service but a bit expensive.' }
    ]
  },
  { 
    id: 2, 
    name: 'Maria Garcia', 
    specialty: 'Vintage motorcycle tuning', 
    rating: 4.9, 
    distance: '3.5 km',
    location: { lat: 52.530008, lng: 13.414954 },
    availability: 'Available in 2 hours',
    hourlyRate: 85,
    reviews: [
      { id: 1, user: 'Mike T.', rating: 5, comment: 'Amazing work on my vintage Triumph!' },
      { id: 2, user: 'Jessica L.', rating: 5, comment: 'Best motorcycle mechanic in the city.' }
    ]
  },
  { 
    id: 3, 
    name: 'David Lee', 
    specialty: 'Brake specialist', 
    rating: 4.7, 
    distance: '1.8 km',
    location: { lat: 52.510008, lng: 13.394954 },
    availability: 'Available tomorrow',
    hourlyRate: 65,
    reviews: [
      { id: 1, user: 'Robert J.', rating: 5, comment: 'Fixed my squeaky brakes perfectly.' },
      { id: 2, user: 'Emma W.', rating: 4, comment: 'Good service, fair price.' }
    ]
  },
];

export const listings = [
  { 
    id: 1, 
    title: 'Honda CB500X 2018', 
    price: 4200, 
    type: 'vehicle', 
    condition: 'Good',
    location: 'Berlin',
    distance: '8 km',
    image: 'https://placehold.co/300x200?text=Honda+CB500X',
    description: 'Well-maintained Honda CB500X with 15,000 km. New tires, recent service. Perfect for commuting and weekend trips.',
    seller: {
      id: 101,
      name: 'Thomas B.',
      rating: 4.8,
      verified: true
    },
    details: {
      make: 'Honda',
      model: 'CB500X',
      year: 2018,
      mileage: 15000,
      engineSize: '500cc',
      color: 'Red'
    }
  },
  { 
    id: 2, 
    title: 'BMW R1200GS Exhaust Pipe', 
    price: 350, 
    type: 'part', 
    condition: 'Like New',
    location: 'Munich',
    distance: '12 km',
    image: 'https://placehold.co/300x200?text=BMW+Exhaust',
    description: 'Original BMW R1200GS exhaust pipe. Removed from a 2019 model with only 5,000 km. Perfect condition, no scratches or dents.',
    seller: {
      id: 102,
      name: 'Anna M.',
      rating: 4.9,
      verified: true
    },
    details: {
      make: 'BMW',
      model: 'R1200GS',
      year: 2019,
      condition: 'Like New',
      compatibility: '2017-2020 R1200GS models'
    }
  },
  { 
    id: 3, 
    title: 'Yamaha R6 2019', 
    price: 7800, 
    type: 'vehicle', 
    condition: 'Excellent',
    location: 'Hamburg',
    distance: '15 km',
    image: 'https://placehold.co/300x200?text=Yamaha+R6',
    description: 'Yamaha R6 in excellent condition. Only 8,000 km, garage kept. Includes frame sliders, tail tidy, and aftermarket exhaust.',
    seller: {
      id: 103,
      name: 'Mark S.',
      rating: 4.7,
      verified: true
    },
    details: {
      make: 'Yamaha',
      model: 'R6',
      year: 2019,
      mileage: 8000,
      engineSize: '600cc',
      color: 'Blue'
    }
  },
  { 
    id: 4, 
    title: 'Ducati Monster Fairing', 
    price: 280, 
    type: 'part', 
    condition: 'Used',
    location: 'Frankfurt',
    distance: '5 km',
    image: 'https://placehold.co/300x200?text=Ducati+Fairing',
    description: 'Original Ducati Monster fairing. Minor scratches but overall good condition. Fits 2015-2018 models.',
    seller: {
      id: 104,
      name: 'Julia K.',
      rating: 4.5,
      verified: false
    },
    details: {
      make: 'Ducati',
      model: 'Monster',
      year: '2015-2018',
      condition: 'Used',
      color: 'Red'
    }
  },
];

export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    vehicles: [
      {
        make: 'Honda',
        model: 'Civic',
        year: 2018,
        mileage: 45000,
        nextService: '2023-12-15'
      }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'mechanic',
    specialty: 'Engine repair',
    hourlyRate: 70,
    availability: 'Weekdays 9am-5pm'
  }
];

// Mock functions to interact with the data
export async function getMechanics(filters = {}) {
  // In a real app, this would query a database with filters
  return mechanics;
}

export async function getMechanicById(id) {
  return mechanics.find(mechanic => mechanic.id === parseInt(id));
}

export async function getListings(filters = {}) {
  // In a real app, this would query a database with filters
  return listings;
}

export async function getListingById(id) {
  return listings.find(listing => listing.id === parseInt(id));
}

export async function getUserById(id) {
  return users.find(user => user.id === parseInt(id));
}

export async function createListing(listingData) {
  // In a real app, this would insert into a database
  const newId = listings.length + 1;
  const newListing = {
    id: newId,
    ...listingData,
    seller: {
      id: 101, // Mock user ID
      name: 'Current User',
      rating: 4.5,
      verified: true
    }
  };
  
  listings.push(newListing);
  return newListing;
}

export async function updateListing(id, listingData) {
  // In a real app, this would update a database record
  const index = listings.findIndex(listing => listing.id === parseInt(id));
  if (index === -1) return null;
  
  listings[index] = { ...listings[index], ...listingData };
  return listings[index];
}

export async function deleteListing(id) {
  // In a real app, this would delete from a database
  const index = listings.findIndex(listing => listing.id === parseInt(id));
  if (index === -1) return false;
  
  listings.splice(index, 1);
  return true;
}
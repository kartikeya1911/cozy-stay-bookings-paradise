
import { Room } from "@/types/hotel";

export const rooms: Room[] = [
  {
    id: "1",
    name: "Deluxe King Room",
    description: "Our Deluxe King Room offers spacious comfort with elegant furnishings. The room features a king-size bed with premium linens, a work desk, and a comfortable seating area. The marble bathroom includes a deep-soaking tub and separate rain shower.",
    price: 299,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&q=80&w=2070", 
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2025"
    ],
    capacity: 2,
    size: 400,
    type: "double",
    amenities: [
      "Free Wi-Fi", 
      "Flat-screen TV", 
      "Mini-bar", 
      "Coffee machine", 
      "Safe", 
      "Air conditioning", 
      "Room service"
    ],
    rating: 4.8,
    featured: true,
    numberOfBeds: 1,
    bedType: "King",
    breakfast: true,
    pets: false
  },
  {
    id: "2",
    name: "Superior Twin Room",
    description: "Perfect for friends or colleagues traveling together, our Superior Twin Room features two comfortable queen beds with premium linens. The room includes a spacious work area and a cozy seating corner to relax after a busy day.",
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2074",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1974",
      "https://images.unsplash.com/photo-1551776235-dde6c3615a40?auto=format&fit=crop&q=80&w=2070"
    ],
    capacity: 2,
    size: 350,
    type: "double",
    amenities: [
      "Free Wi-Fi", 
      "Flat-screen TV", 
      "Mini-bar", 
      "Coffee machine", 
      "Safe", 
      "Air conditioning"
    ],
    rating: 4.6,
    featured: false,
    numberOfBeds: 2,
    bedType: "Queen",
    breakfast: true,
    pets: false
  },
  {
    id: "3",
    name: "Family Suite",
    description: "Our spacious Family Suite is ideal for families, with a separate living area, a master bedroom with a king-size bed, and a second bedroom with twin beds. The suite features two bathrooms, a dining area, and impressive city views.",
    price: 499,
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1576675784201-0e142b423952?auto=format&fit=crop&q=80&w=2067",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2070"
    ],
    capacity: 4,
    size: 750,
    type: "family",
    amenities: [
      "Free Wi-Fi",
      "2 Flat-screen TVs",
      "Mini-bar",
      "Coffee machine",
      "Safe",
      "Air conditioning",
      "Room service",
      "Kitchenette",
      "Dining area"
    ],
    rating: 4.9,
    featured: true,
    numberOfBeds: 3,
    bedType: "1 King, 2 Twin",
    breakfast: true,
    pets: true
  },
  {
    id: "4",
    name: "Standard Queen Room",
    description: "Our Standard Queen Room offers comfort and value with a plush queen-size bed, work desk, and modern amenities. Perfect for the solo traveler or couples on a budget.",
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&q=80&w=2070"
    ],
    capacity: 2,
    size: 280,
    type: "single",
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Coffee maker",
      "Safe",
      "Air conditioning"
    ],
    rating: 4.3,
    featured: false,
    numberOfBeds: 1,
    bedType: "Queen",
    breakfast: false,
    pets: false
  },
  {
    id: "5",
    name: "Executive Suite",
    description: "Our Executive Suite offers sophisticated luxury with a separate living room, dining area, and master bedroom. The marble bathroom features a deep-soaking tub and separate rain shower. Enjoy premium amenities and personalized service.",
    price: 599,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=2067",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2070"
    ],
    capacity: 2,
    size: 650,
    type: "double",
    amenities: [
      "Free high-speed Wi-Fi",
      "55-inch Flat-screen TV",
      "Premium mini-bar",
      "Espresso machine",
      "Safe",
      "Climate control",
      "24-hour room service",
      "Lounge access",
      "Turn-down service",
      "Bathrobe and slippers"
    ],
    rating: 5.0,
    featured: true,
    numberOfBeds: 1,
    bedType: "King",
    breakfast: true,
    pets: false
  },
  {
    id: "6",
    name: "Presidential Suite",
    description: "Our flagship Presidential Suite offers unparalleled luxury with a grand living room, formal dining room, and master bedroom with a king-size bed. Enjoy panoramic city views, a private terrace, and exclusive amenities for the discerning traveler.",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2025",
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1601565415267-938f7af3686a?auto=format&fit=crop&q=80&w=2070"
    ],
    capacity: 4,
    size: 1200,
    type: "presidential",
    amenities: [
      "Free premium Wi-Fi",
      "Multiple flat-screen TVs",
      "Full bar",
      "Espresso machine",
      "Safe",
      "Climate control",
      "24-hour butler service",
      "Lounge access",
      "Dining room",
      "Kitchenette",
      "Private terrace",
      "Steam room",
      "Bathrobe and slippers",
      "Premium toiletries"
    ],
    rating: 5.0,
    featured: true,
    numberOfBeds: 1,
    bedType: "King",
    breakfast: true,
    pets: true
  },
  {
    id: "7",
    name: "Deluxe Ocean View",
    description: "Our Deluxe Ocean View Room offers breathtaking views of the ocean and luxurious amenities for a relaxing stay. The room features a king-size bed with premium linens and a private balcony overlooking the water.",
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=2064",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2070"
    ],
    capacity: 2,
    size: 420,
    type: "double",
    amenities: [
      "Ocean view",
      "Private balcony",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Mini-bar",
      "Coffee machine",
      "Safe",
      "Air conditioning",
      "Room service"
    ],
    rating: 4.9,
    featured: true,
    numberOfBeds: 1,
    bedType: "King",
    breakfast: true,
    pets: false
  },
  {
    id: "8",
    name: "Economy Single",
    description: "Our Economy Single Room is perfect for solo travelers seeking comfort on a budget. The room features a comfortable single bed, work desk, and all the essential amenities for a pleasant stay.",
    price: 149,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2070"
    ],
    capacity: 1,
    size: 200,
    type: "single",
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Coffee maker",
      "Safe",
      "Air conditioning"
    ],
    rating: 4.0,
    featured: false,
    numberOfBeds: 1,
    bedType: "Single",
    breakfast: false,
    pets: false
  }
];

export const getRoom = (id: string): Room | undefined => {
  return rooms.find(room => room.id === id);
};

export const getFeaturedRooms = (): Room[] => {
  return rooms.filter(room => room.featured);
};

export const filterRooms = (options: {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  capacity?: number;
  breakfast?: boolean;
  pets?: boolean;
}): Room[] => {
  return rooms.filter(room => {
    if (options.type && options.type !== 'all' && room.type !== options.type) {
      return false;
    }
    if (options.minPrice && room.price < options.minPrice) {
      return false;
    }
    if (options.maxPrice && room.price > options.maxPrice) {
      return false;
    }
    if (options.capacity && room.capacity < options.capacity) {
      return false;
    }
    if (options.breakfast && !room.breakfast) {
      return false;
    }
    if (options.pets && !room.pets) {
      return false;
    }
    return true;
  });
};

export const sortRooms = (rooms: Room[], sortBy: string): Room[] => {
  const sortedRooms = [...rooms];
  
  switch (sortBy) {
    case 'price-asc':
      return sortedRooms.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sortedRooms.sort((a, b) => b.price - a.price);
    case 'capacity':
      return sortedRooms.sort((a, b) => b.capacity - a.capacity);
    case 'size':
      return sortedRooms.sort((a, b) => b.size - a.size);
    case 'rating':
      return sortedRooms.sort((a, b) => b.rating - a.rating);
    default:
      return sortedRooms;
  }
};

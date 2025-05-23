
export type Room = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  capacity: number;
  size: number; // in square feet/meters
  type: RoomType;
  amenities: string[];
  rating: number;
  featured: boolean;
  numberOfBeds: number;
  bedType: string;
  breakfast: boolean;
  pets: boolean;
};

export type RoomType = 'single' | 'double' | 'family' | 'presidential';

export type CartItem = {
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
};

export type Booking = {
  id: string;
  userId: string;
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  paymentId?: string;
  createdAt: Date;
};

export type User = {
  id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
  bookings?: Booking[];
};

export type FilterOptions = {
  type?: RoomType | 'all';
  minPrice?: number;
  maxPrice?: number;
  capacity?: number;
  breakfast?: boolean;
  pets?: boolean;
};

export type SortOption = 'price-asc' | 'price-desc' | 'capacity' | 'size' | 'rating';

export type PropertyListing = {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  amenities: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  roomCount: number;
  images: string[];
  status: 'pending' | 'approved' | 'rejected';
  userId: string;
  createdAt: Date;
};

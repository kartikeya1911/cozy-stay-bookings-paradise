
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import RoomCard from '@/components/rooms/RoomCard';
import RoomFilters from '@/components/rooms/RoomFilters';
import { Room, FilterOptions, SortOption } from '@/types/hotel';
import { rooms, filterRooms, sortRooms } from '@/data/rooms';

const RoomsPage = () => {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Calculate min and max price from all rooms
  const minPrice = Math.min(...rooms.map(room => room.price));
  const maxPrice = Math.max(...rooms.map(room => room.price));
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setFilteredRooms(rooms);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleFilterChange = (filters: FilterOptions) => {
    const filtered = filterRooms(filters);
    setFilteredRooms(filtered);
  };
  
  const handleSortChange = (sort: SortOption) => {
    const sorted = sortRooms(filteredRooms, sort);
    setFilteredRooms([...sorted]);
  };
  
  return (
    <Layout>
      {/* Room Header */}
      <div className="relative bg-black h-[300px] md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2025"
            alt="Luxury hotel room"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="hotel-container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
                Our Luxurious Rooms
              </h1>
              <p className="text-lg text-white">
                Find your perfect accommodation from our wide selection of rooms and suites.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Room Content */}
      <section className="hotel-section bg-gray-50">
        <div className="hotel-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <RoomFilters 
                  onFilterChange={handleFilterChange}
                  onSortChange={handleSortChange}
                  totalRooms={rooms.length}
                  filteredCount={filteredRooms.length}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                />
              </div>
            </div>
            
            {/* Room Grid */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="flex justify-center items-center min-h-[400px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hotel-purple"></div>
                </div>
              ) : filteredRooms.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">No Rooms Found</h3>
                  <p className="text-gray-600">
                    No rooms match your current filters. Please try adjusting your search criteria.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredRooms.map(room => (
                    <div key={room.id} className="h-full">
                      <RoomCard room={room} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RoomsPage;

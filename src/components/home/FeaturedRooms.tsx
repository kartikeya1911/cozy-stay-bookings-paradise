
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Room } from '@/types/hotel';
import { getFeaturedRooms } from '@/data/rooms';
import RoomCard from '../rooms/RoomCard';

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const featured = getFeaturedRooms();
    setRooms(featured);
  }, []);
  
  return (
    <section className="hotel-section bg-gray-50">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hotel-heading">
            Featured Rooms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of luxury accommodations, designed for comfort and relaxation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="h-full">
              <RoomCard room={room} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/rooms">
            <button className="hotel-button-secondary">
              View All Rooms
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;

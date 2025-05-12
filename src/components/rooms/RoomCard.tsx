
import { Link } from 'react-router-dom';
import { Room } from '@/types/hotel';
import { Badge } from '@/components/ui/badge';

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Link to={`/rooms/${room.id}`}>
      <div className="hotel-card group h-full flex flex-col">
        {/* Room Image */}
        <div className="relative overflow-hidden h-64">
          <img 
            src={room.images[0]} 
            alt={room.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Price Badge */}
          <div className="absolute top-0 right-0 bg-hotel-purple text-white py-1 px-3 rounded-bl-md">
            ${room.price} <span className="text-sm">/ night</span>
          </div>
          
          {/* Featured Badge */}
          {room.featured && (
            <Badge className="absolute bottom-4 left-4 bg-hotel-accent text-white border-0">
              Featured
            </Badge>
          )}
        </div>
        
        {/* Room Info */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="hotel-heading text-xl">{room.name}</h3>
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-yellow-400" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-gray-700">{room.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-3">{room.description}</p>
          
          <div className="mt-auto flex flex-wrap gap-2">
            <span className="inline-flex items-center text-sm text-gray-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-1 text-hotel-purple" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {room.capacity} {room.capacity > 1 ? 'Guests' : 'Guest'}
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-1 text-hotel-purple" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
              {room.size} sq ft
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-1 text-hotel-purple" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              {room.bedType}
            </span>
          </div>
          
          <div className="mt-4">
            <span className="hotel-button-primary w-full block text-center">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;

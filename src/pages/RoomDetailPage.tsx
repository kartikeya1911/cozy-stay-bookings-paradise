
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RoomBookingForm from '@/components/rooms/RoomBookingForm';
import { getRoom } from '@/data/rooms';
import { Room } from '@/types/hotel';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      if (id) {
        const foundRoom = getRoom(id);
        if (foundRoom) {
          setRoom(foundRoom);
        } else {
          navigate('/rooms', { replace: true });
        }
      }
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id, navigate]);
  
  if (isLoading) {
    return (
      <Layout>
        <div className="hotel-container py-24 flex justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-hotel-purple"></div>
        </div>
      </Layout>
    );
  }
  
  if (!room) {
    return (
      <Layout>
        <div className="hotel-container py-24">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Room Not Found</h2>
            <p className="mb-8">The room you're looking for doesn't exist or has been removed.</p>
            <Button
              onClick={() => navigate('/rooms')}
              className="hotel-button-primary"
            >
              Back to Rooms
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Room Header */}
      <div className="relative bg-black h-[300px] md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src={room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="hotel-container">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
                {room.name}
              </h1>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < Math.floor(room.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white ml-2">{room.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Room Content */}
      <section className="hotel-section bg-white">
        <div className="hotel-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Room Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8 -mx-4 sm:mx-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {room.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="aspect-[16/9] overflow-hidden rounded-lg">
                            <img
                              src={image}
                              alt={`${room.name} - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              
              {/* Room Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-semibold mb-4">Room Description</h2>
                <p className="text-gray-700 mb-6">{room.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mx-auto text-hotel-purple mb-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="block text-gray-700 font-medium">{room.capacity} Guests</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mx-auto text-hotel-purple mb-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span className="block text-gray-700 font-medium">{room.size} sq ft</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mx-auto text-hotel-purple mb-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="block text-gray-700 font-medium">{room.bedType}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mx-auto text-hotel-purple mb-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="block text-gray-700 font-medium">${room.price}/night</span>
                  </div>
                </div>
              </div>
              
              {/* Room Amenities */}
              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">Room Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-hotel-purple mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="lg:col-span-1 lg:mt-0">
              <RoomBookingForm room={room} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RoomDetailPage;


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { getRoom } from '@/data/rooms';
import { Booking } from '@/types/hotel';
import { format } from 'date-fns';

const BookingsPage = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/bookings' } });
      return;
    }
    
    // Simulate API call to fetch bookings
    const timer = setTimeout(() => {
      // Mock bookings data
      const mockBookings: Booking[] = [
        {
          id: '1',
          userId: user?.id || '',
          roomId: '1', // Deluxe King Room
          checkIn: new Date('2023-12-15'),
          checkOut: new Date('2023-12-18'),
          guests: 2,
          totalPrice: 897, // $299 * 3 nights
          status: 'confirmed',
          paymentId: 'pay_123456',
          createdAt: new Date('2023-11-01'),
        },
        {
          id: '2',
          userId: user?.id || '',
          roomId: '3', // Family Suite
          checkIn: new Date('2024-01-10'),
          checkOut: new Date('2024-01-15'),
          guests: 4,
          totalPrice: 2495, // $499 * 5 nights
          status: 'confirmed',
          paymentId: 'pay_234567',
          createdAt: new Date('2023-11-15'),
        }
      ];
      
      setBookings(mockBookings);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate, user]);
  
  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <Layout>
      <div className="hotel-container py-12">
        <h1 className="text-3xl font-bold mb-6 hotel-heading">My Bookings</h1>
        
        {isLoading ? (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hotel-purple"></div>
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 mx-auto text-gray-400 mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <h2 className="text-2xl font-semibold mb-4">No Bookings Found</h2>
            <p className="text-gray-600 mb-6">
              You haven't made any bookings yet. Start exploring our rooms and suites.
            </p>
            <Button onClick={() => navigate('/rooms')} className="hotel-button-primary">
              Browse Rooms
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => {
              const room = getRoom(booking.roomId);
              if (!room) return null;
              
              return (
                <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Room Image */}
                    <div className="md:w-1/4 h-48 md:h-auto">
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Booking Details */}
                    <div className="p-6 md:w-3/4">
                      <div className="flex flex-col md:flex-row md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-playfair font-semibold mb-2">{room.name}</h3>
                          <p className="text-sm text-gray-500 mb-3">
                            Booking ID: {booking.id}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : booking.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Check-in</p>
                          <p className="font-medium">{format(booking.checkIn, 'MMM d, yyyy')}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Check-out</p>
                          <p className="font-medium">{format(booking.checkOut, 'MMM d, yyyy')}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Guests</p>
                          <p className="font-medium">{booking.guests}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:justify-between pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-sm text-gray-600">Total Paid</p>
                          <p className="text-lg font-semibold">${booking.totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-2">
                          <Button variant="outline" size="sm">
                            View Receipt
                          </Button>
                          <Button variant="secondary" size="sm">
                            Contact Support
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingsPage;

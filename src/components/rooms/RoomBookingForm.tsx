
import { useState } from 'react';
import { Room } from '@/types/hotel';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import { 
  differenceInDays, 
  addDays, 
  isBefore,
  startOfDay,
  format 
} from 'date-fns';
import { toast } from '@/components/ui/use-toast';

interface RoomBookingFormProps {
  room: Room;
}

const RoomBookingForm = ({ room }: RoomBookingFormProps) => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(addDays(new Date(), 1));
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(new Date(), 3));
  const [guests, setGuests] = useState(1);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarType, setCalendarType] = useState<'checkIn' | 'checkOut'>('checkIn');
  
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const totalPrice = nights * room.price;
  
  const handleCalendarOpen = (type: 'checkIn' | 'checkOut') => {
    setCalendarType(type);
    setIsCalendarOpen(true);
  };
  
  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    const selectedDate = startOfDay(date);
    
    if (calendarType === 'checkIn') {
      setCheckIn(selectedDate);
      
      // If check-out date is before new check-in date, update it
      if (checkOut && isBefore(checkOut, addDays(selectedDate, 1))) {
        setCheckOut(addDays(selectedDate, 1));
      }
    } else {
      setCheckOut(selectedDate);
    }
    
    setIsCalendarOpen(false);
  };
  
  const handleGuestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuests(parseInt(e.target.value));
  };
  
  const handleAddToCart = () => {
    if (!checkIn || !checkOut) {
      toast({
        title: 'Error',
        description: 'Please select check-in and check-out dates',
        variant: 'destructive',
      });
      return;
    }
    
    if (nights <= 0) {
      toast({
        title: 'Error',
        description: 'Check-out date must be after check-in date',
        variant: 'destructive',
      });
      return;
    }
    
    if (guests < 1 || guests > room.capacity) {
      toast({
        title: 'Error',
        description: `Number of guests must be between 1 and ${room.capacity}`,
        variant: 'destructive',
      });
      return;
    }
    
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please login to book this room',
      });
      navigate('/login', { state: { from: `/rooms/${room.id}` } });
      return;
    }
    
    addToCart({
      roomId: room.id,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
      totalPrice: totalPrice,
    });
    
    toast({
      title: 'Room added to cart',
      description: `${room.name} has been added to your cart.`,
    });
    
    navigate('/cart');
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-playfair font-semibold mb-4">Book This Room</h3>
      
      <div className="space-y-4">
        {/* Check-in Date */}
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
            Check-in Date
          </label>
          <div
            onClick={() => handleCalendarOpen('checkIn')}
            className="hotel-input flex items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
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
            {checkIn ? format(checkIn, 'PPP') : 'Select check-in date'}
          </div>
        </div>
        
        {/* Check-out Date */}
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
            Check-out Date
          </label>
          <div
            onClick={() => handleCalendarOpen('checkOut')}
            className="hotel-input flex items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
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
            {checkOut ? format(checkOut, 'PPP') : 'Select check-out date'}
          </div>
        </div>
        
        {/* Number of Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Guests
          </label>
          <select
            id="guests"
            value={guests}
            onChange={handleGuestChange}
            className="hotel-input"
          >
            {Array.from({ length: room.capacity }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
        
        {/* Booking Details Summary */}
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Room Price:</span>
            <span className="font-semibold">${room.price} / night</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Nights:</span>
            <span className="font-semibold">{nights}</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
            <span className="text-gray-700 font-medium">Total:</span>
            <span className="text-xl font-bold">${totalPrice}</span>
          </div>
        </div>
        
        {/* Book Now Button */}
        <Button 
          className="w-full hotel-button-primary" 
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
      
      {/* Calendar Dialog */}
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {calendarType === 'checkIn' ? 'Select Check-in Date' : 'Select Check-out Date'}
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center p-4">
            <Calendar
              mode="single"
              selected={calendarType === 'checkIn' ? checkIn : checkOut}
              onSelect={handleDateSelect}
              disabled={(date) => {
                const today = startOfDay(new Date());
                if (calendarType === 'checkIn') {
                  return isBefore(date, today);
                } else {
                  return checkIn ? isBefore(date, addDays(checkIn, 1)) : isBefore(date, addDays(today, 1));
                }
              }}
              className="pointer-events-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RoomBookingForm;

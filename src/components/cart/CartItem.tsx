
import { useState } from 'react';
import { CartItem as CartItemType } from '@/types/hotel';
import { useCart } from '@/contexts/CartContext';
import { getRoom } from '@/data/rooms';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart } = useCart();
  const room = getRoom(item.roomId);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!room) {
    return null;
  }

  const handleRemove = () => {
    removeFromCart(item.roomId);
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="flex flex-col md:flex-row">
        {/* Room Image */}
        <div className="md:w-1/4 h-48 md:h-auto">
          <img
            src={room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Room Details */}
        <div className="p-4 md:p-6 md:w-3/4">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-2">{room.name}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{room.description}</p>
            </div>
            <div className="mt-2 md:mt-0 md:text-right">
              <p className="text-lg font-semibold">${item.totalPrice}</p>
              <p className="text-sm text-gray-500">
                ${room.price} x {Math.round(item.totalPrice / room.price)} nights
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-hotel-purple"
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
                  Check-in: {format(item.checkIn, 'MMMM d, yyyy')}
                </p>
                <p className="flex items-center text-sm text-gray-600 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-hotel-purple"
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
                  Check-out: {format(item.checkOut, 'MMMM d, yyyy')}
                </p>
              </div>
              <div>
                <p className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-hotel-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {item.guests} {item.guests === 1 ? 'Guest' : 'Guests'}
                </p>
                <p className="flex items-center text-sm text-gray-600 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-hotel-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  {room.bedType}, {room.numberOfBeds} {room.numberOfBeds === 1 ? 'Bed' : 'Beds'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  Remove
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will remove {room.name} from your cart. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleRemove}>
                    Remove
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

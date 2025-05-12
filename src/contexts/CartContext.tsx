
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '@/types/hotel';
import { getRoom } from '@/data/rooms';
import { toast } from '@/components/ui/use-toast';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (roomId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Load cart from localStorage on mount
    const storedCart = localStorage.getItem('hotelCart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        
        // Convert string dates back to Date objects
        const formattedCart = parsedCart.map((item: any) => ({
          ...item,
          checkIn: new Date(item.checkIn),
          checkOut: new Date(item.checkOut)
        }));
        
        setItems(formattedCart);
        setItemCount(formattedCart.length);
      } catch (e) {
        console.error('Failed to parse stored cart', e);
        localStorage.removeItem('hotelCart');
      }
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('hotelCart', JSON.stringify(items));
    setItemCount(items.length);
  }, [items]);

  const addToCart = (item: CartItem) => {
    // Check if this room is already in cart
    const existingItem = items.find((cartItem) => cartItem.roomId === item.roomId);
    
    if (existingItem) {
      // Update the existing item instead of adding a new one
      setItems(items.map((cartItem) => 
        cartItem.roomId === item.roomId ? item : cartItem
      ));
      toast({
        title: "Cart updated",
        description: `Your booking has been updated.`,
      });
    } else {
      setItems([...items, item]);
      toast({
        title: "Added to cart",
        description: `Room has been added to your cart.`,
      });
    }
  };

  const removeFromCart = (roomId: string) => {
    setItems(items.filter((item) => item.roomId !== roomId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const OrderSummary = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.10; // 10% tax
  const total = subtotal + tax;
  
  const handleCheckout = async () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add rooms to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear cart and redirect to success page
      clearCart();
      
      toast({
        title: "Payment Successful!",
        description: "Your booking has been confirmed.",
      });
      
      navigate('/booking-success');
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-playfair font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-lg">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button 
        className="w-full mt-6 hotel-button-primary"
        onClick={handleCheckout}
        disabled={isProcessing || items.length === 0}
      >
        {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
      </Button>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        Secure payment processing. Your credit card information is encrypted.
      </p>
      
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        <img src="https://res.cloudinary.com/dj5mowcjs/image/upload/v1621180162/visa_fxhnng.svg" alt="Visa" className="h-6" />
        <img src="https://res.cloudinary.com/dj5mowcjs/image/upload/v1621180162/mastercard_r7kykz.svg" alt="Mastercard" className="h-6" />
        <img src="https://res.cloudinary.com/dj5mowcjs/image/upload/v1621180162/amex_wdnxjt.svg" alt="American Express" className="h-6" />
        <img src="https://res.cloudinary.com/dj5mowcjs/image/upload/v1621180162/paypal_jnvzjp.svg" alt="PayPal" className="h-6" />
      </div>
    </div>
  );
};

export default OrderSummary;

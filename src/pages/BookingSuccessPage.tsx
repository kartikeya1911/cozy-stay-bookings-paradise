
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const BookingSuccessPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const bookingNumber = Math.floor(100000000 + Math.random() * 900000000);
  
  return (
    <Layout>
      <div className="hotel-container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-green-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 hotel-heading">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your reservation has been successfully processed. We look forward to welcoming you to our hotel.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
            <div className="flex justify-between border-b border-gray-200 pb-3 mb-3">
              <span className="text-gray-600">Booking Number:</span>
              <span className="font-semibold">{bookingNumber}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3 mb-3">
              <span className="text-gray-600">Status:</span>
              <span className="font-semibold text-green-600">Confirmed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Status:</span>
              <span className="font-semibold text-green-600">Paid</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            A confirmation email with all the details has been sent to your registered email address.
            If you have any questions, please don't hesitate to contact our customer service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="hotel-button-primary">
                Back to Home
              </Button>
            </Link>
            <Link to="/bookings">
              <Button variant="outline">
                View My Bookings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingSuccessPage;

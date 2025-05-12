
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-black h-[600px]">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury hotel poolside"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="hotel-container">
          <div className="max-w-xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair">
              Luxury Stays for Unforgettable Experiences
            </h1>
            <p className="text-lg text-white mb-8 max-w-lg">
              Experience exceptional service, stunning accommodations, and world-class amenities at our award-winning luxury hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/rooms">
                <Button className="hotel-button-primary text-lg">
                  Explore Rooms
                </Button>
              </Link>
              <Link to="/about">
                <Button className="border-2 border-white bg-transparent hover:bg-white hover:text-black text-white transition-colors px-6 py-3 rounded-md font-medium">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

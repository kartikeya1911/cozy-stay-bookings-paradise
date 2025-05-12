
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Menu, ShoppingCart, User, X } from 'lucide-react';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="hotel-container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-playfair text-hotel-purple">LuxStay</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-hotel-purple transition-colors">
            Home
          </Link>
          <Link to="/rooms" className="text-gray-700 hover:text-hotel-purple transition-colors">
            Rooms
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-hotel-purple transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-hotel-purple transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* User Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="text-gray-700 hover:text-hotel-purple relative">
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-hotel-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="relative group">
              <Button variant="outline" className="flex items-center space-x-2">
                <User size={18} />
                <span className="max-w-[100px] truncate">{user?.name}</span>
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Bookings
                  </Link>
                  <button 
                    onClick={logout} 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-hotel-purple hover:bg-hotel-purple-dark">Login / Register</Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="text-gray-700 hover:text-hotel-purple relative">
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-hotel-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-lg font-semibold">Menu</h2>
                </div>
                <nav className="flex flex-col space-y-4">
                  <Link to="/" className="py-2 text-lg hover:text-hotel-purple">
                    Home
                  </Link>
                  <Link to="/rooms" className="py-2 text-lg hover:text-hotel-purple">
                    Rooms
                  </Link>
                  <Link to="/about" className="py-2 text-lg hover:text-hotel-purple">
                    About
                  </Link>
                  <Link to="/contact" className="py-2 text-lg hover:text-hotel-purple">
                    Contact
                  </Link>
                  
                  {isAuthenticated ? (
                    <>
                      <hr className="my-2" />
                      <Link to="/profile" className="py-2 text-lg hover:text-hotel-purple">
                        Profile
                      </Link>
                      <Link to="/bookings" className="py-2 text-lg hover:text-hotel-purple">
                        My Bookings
                      </Link>
                      <button 
                        onClick={logout} 
                        className="py-2 text-lg text-left hover:text-hotel-purple"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link to="/login" className="py-2 text-lg hover:text-hotel-purple">
                      Login / Register
                    </Link>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

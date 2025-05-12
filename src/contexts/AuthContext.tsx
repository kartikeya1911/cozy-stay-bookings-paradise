
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User } from '@/types/hotel';
import { toast } from '@/components/ui/use-toast';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('hotelUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (e) {
        console.error('Failed to parse stored user', e);
        localStorage.removeItem('hotelUser');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would be an API call
    // For now, we'll simulate authentication
    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation (in a real app, this would be verified by the server)
      if (email === 'user@example.com' && password === 'password') {
        const mockUser: User = {
          id: '1',
          name: 'John Doe',
          email: 'user@example.com',
          bookings: []
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('hotelUser', JSON.stringify(mockUser));
        toast({
          title: "Success!",
          description: "You have successfully logged in.",
        });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to login';
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would be an API call to create a user
    try {
      if (!name || !email || !password) {
        throw new Error('All fields are required');
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock registration (in a real app, this would be handled by the server)
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9), // Generate random ID
        name,
        email,
        bookings: []
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('hotelUser', JSON.stringify(mockUser));
      toast({
        title: "Success!",
        description: "Your account has been created.",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to register';
      toast({
        title: "Registration Failed",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('hotelUser');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

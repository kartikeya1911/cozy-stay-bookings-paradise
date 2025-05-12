
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import AuthForm from '@/components/auth/AuthForm';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // If user is already authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <Layout>
      <div className="min-h-[600px] bg-gray-50 py-12 flex items-center">
        <div className="hotel-container">
          <div className="max-w-md mx-auto">
            <AuthForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;

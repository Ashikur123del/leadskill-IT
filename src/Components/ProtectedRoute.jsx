import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const loginTime = localStorage.getItem('loginTime');
  
  const now = new Date().getTime();

  const sessionDuration = 7 * 24 * 60 * 60 * 1000; 


  if (!isLoggedIn || !loginTime || (now - parseInt(loginTime) > sessionDuration)) {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginTime');
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
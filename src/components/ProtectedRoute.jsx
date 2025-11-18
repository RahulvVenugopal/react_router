import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../auth';

export default function ProtectedRoute() {
  // Render children routes if authenticated, otherwise redirect to /login
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}

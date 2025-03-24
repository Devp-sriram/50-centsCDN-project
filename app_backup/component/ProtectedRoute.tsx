'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { LoadingSpinner } from './LoadingSpinner'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
   const token = localStorage.getItem("token");

    if (!isAuthenticated && !token) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <LoadingSpinner className="h-20 w-20 animate-spin" />

  }
  return <>{children}</>;
}

// utils/withAuth.js
"use client"; // Ensure this file runs on the client side
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './auth';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if the user is authenticated
      if (!isAuthenticated()) {
        // If not authenticated, redirect to the login page
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  // Set a display name for better debugging
  AuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthComponent;
};

export default withAuth;

// utils/withAuth.jsx
"use client"; // Ensure this file runs on the client side
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './auth';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Check if the user is authenticated
      if (!isAuthenticated()) {
        // If not authenticated, redirect to the login page
        router.push('/login');
      } else {
        setIsLoading(false); // Authentication is successful, show the component
      }
    }, [router]);

    if (isLoading) {
      // Optionally return a loading indicator or null while checking authentication
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  // Set a display name for better debugging
  AuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthComponent;
};

export default withAuth;

"use client"
import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const Logout = ({ translations }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from cookies
    Cookies.remove('authToken');

    // Redirect to the login page
    router.push('/login');
  };

  return (
    <button onClick={handleLogout} className="flex items-center gap-1 text-white rounded-lg hover:bg-sky-500 text-medium mb-[25px] bg-sky-400 py-2 px-5">
      <FaChevronLeft />Logout
    </button>
  );
};

export default Logout;

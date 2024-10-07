"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaRegCheckCircle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = 'ali.dev@gmail.com';
    const validPassword = 'ali123';

    if (email === validEmail && password === validPassword) {
      const token = 'sample-token-12345'; // Normally from backend

      Cookies.set('authToken', token, { expires: 1 / 24 });
      localStorage.setItem('authEmail', email);
      localStorage.setItem('authToken', token);

      setShowSuccess(true);
      setShowForm(false);

      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      {showForm && (
        <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-4 text-center">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3"
              type="email"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3"
              type="password"
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
            Login
          </button>
        </form>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="success-msg flex items-center flex-col gap-2 mt-4">
          <span className='text-green-400 text-7xl'><FaRegCheckCircle /></span>
          <div className="text-center">
            <h1 className='text-green-400 text-3xl font-bold'>Success</h1>
            <p className='text-gray-800'>wait a moment! You are being directed to your dashboard...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;

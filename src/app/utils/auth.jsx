// utils/auth.jsx
import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  // Check if the token exists in cookies or localStorage
  const token = Cookies.get('authToken') || localStorage.getItem('authToken');
  return !!token; // Return true if the token exists, otherwise false
};

export const logout = () => {
  // Remove token from both Cookies and localStorage
  Cookies.remove('authToken');
  localStorage.removeItem('authToken');
};

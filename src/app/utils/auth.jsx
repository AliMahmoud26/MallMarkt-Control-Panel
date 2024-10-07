// utils/auth.js
import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  // Check if the token exists in cookies
  return !!Cookies.get('authToken');
};

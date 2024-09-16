import React from 'react';
import { useDispatch } from 'react-redux'; // Use Redux dispatch to handle logout state
import { useRouter } from 'next/router'; // Using Next.js router for redirection

const Logout = () => {
  const dispatch = useDispatch(); // Dispatch for logging the user out from Redux store
  const router = useRouter(); // Next.js router for redirection

  // Function to handle the logout process
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); // Dispatch the LOGOUT action to clear authentication state
    localStorage.removeItem('token'); // Remove the JWT token from localStorage
    router.push('/login'); // Redirect the user to the login page
  };

  return <button onClick={handleLogout}>Logout</button>; // Button to trigger logout
};

export default Logout;

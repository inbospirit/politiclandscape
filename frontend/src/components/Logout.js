import React from 'react';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.href = '/login'; // Redirect to login after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;

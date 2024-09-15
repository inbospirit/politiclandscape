import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';

const Dashboard = () => <h2>Dashboard (Protected)</h2>;

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated ?? false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { token } });
    }
  }, [dispatch]);

  return (
    <Router>
      <div>
        {isAuthenticated && <Logout />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

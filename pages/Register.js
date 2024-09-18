import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUser } from '../redux/actions/authActions';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');

    try {
      // Adjust the URL to match your backend API
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setLoading(false);

      // Check if the registration was successful
      if (result.status === 'success') {
        // Auto-login after registration
        dispatch(loginUser(data.username, data.password));
        // Store the token in localStorage
        localStorage.setItem('token', result.token);
        // Redirect to the DreamTeam page
        router.push('/dreamteam');
      } else {
        // Handle any errors returned by the backend
        setError(result.error || 'Error al registrar usuario');
      }
    } catch (err) {
      setLoading(false);
      setError('Error de servidor. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <RegisterForm onSubmit={handleSubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Registrando...</p>}
    </div>
  );
};

export default Register;




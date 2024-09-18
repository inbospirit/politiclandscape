import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Next.js router for navigation

const Login = () => {
  // State to manage input values for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // State to manage loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Use Next.js router for redirection
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Set loading state to true while processing
    setError(''); // Reset any previous error message

    // Make the login request to the backend
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      setLoading(false); // Stop loading once response is received

      // If login is successful, store the token and redirect to the dreamteam page
      if (data.status === 'ok') {
        localStorage.setItem('token', data.token); // Save JWT token in localStorage
        router.push('/dreamteam'); // Redirect to dreamteam page
      } else {
        setError(data.error || 'Error iniciando sesión.'); // Display error message
      }
    } catch (err) {
      setLoading(false);
      setError('Error de servidor. Inténtalo de nuevo más tarde.'); // Handle server error
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for username */}
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {/* Input field for password */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Submit button, disabled while loading */}
        <button type="submit" disabled={loading}>
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>

      {/* Display error message if login fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;



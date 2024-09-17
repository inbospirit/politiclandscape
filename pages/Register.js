import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Redux dispatch for login action
import { loginUser } from '../redux/actions/authActions'; // Updated path for the login action
import { useRouter } from 'next/router'; // Next.js router for navigation

const Register = () => {
  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Manage loading state
  const [error, setError] = useState(''); // State to manage error messages

  const dispatch = useDispatch(); // Redux dispatch
  const router = useRouter(); // Next.js router for navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission refresh
    setLoading(true); // Set loading to true while processing
    setError(''); // Clear any previous errors

    try {
      // Send registration request to backend
      const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Pass username and password
      });

      const data = await response.json();
      setLoading(false); // Stop loading once the response is received

      // If registration is successful
      if (data.status === 'Usuario registrado') {
        // Show success message
        alert('Usuario registrado con éxito');
        dispatch(loginUser(username, password)); // Auto-login after registration
        localStorage.setItem('token', data.token); // Store the token in localStorage
        router.push('/dreamteam'); // Redirect to DreamTeam page
      } else {
        // If registration fails, show error
        setError(data.error || 'Error al registrar usuario');
      }
    } catch (err) {
      // Catch any errors from the fetch call
      setLoading(false);
      setError('Error de servidor. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for username */}
        <input
          type="text"
          placeholder="Nombre de usuario"
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
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>

      {/* Display error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;




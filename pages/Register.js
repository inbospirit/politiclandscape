import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Dispatch from Redux for handling user state
import { loginUser } from '../frontend/src/actions/authActions'; // Action to log the user in after registration
import { useRouter } from 'next/router'; // Using Next.js router for redirection

const Register = () => {
  // State to manage input values for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Optional: State to manage loading while registration request is being processed
  const [loading, setLoading] = useState(false);
  
  // Use Redux dispatch to handle login actions
  const dispatch = useDispatch();
  
  // Use Next.js router for navigation
  const router = useRouter();

  // Function to handle form submission for registration
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading to true while waiting for response

    // Make a POST request to the backend for user registration
    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), // Send username and password in the body
    });

    const data = await response.json();
    setLoading(false); // Stop loading once response is received

    // If registration is successful, log the user in and redirect them
    if (data.status === 'Usuario registrado') {
      alert('Usuario registrado con éxito'); // Show success alert
      dispatch(loginUser(username, password)); // Dispatch login action for auto-login
      localStorage.setItem('token', data.token); // Save the JWT token in localStorage
      router.push('/dreamteam'); // Redirect to the dream team page
    } else {
      alert(data.error); // Show error alert if registration fails
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
        />
        {/* Input field for password */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Submit button, disabled while loading */}
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
    </div>
  );
};

export default Register;



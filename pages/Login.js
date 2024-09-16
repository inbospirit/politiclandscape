import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Using Next.js router for redirection

const Login = () => {
  // State to manage the input values for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Optional: State to manage loading while login request is being processed
  const [loading, setLoading] = useState(false);
  
  // Use Next.js router for navigation without full page reloads
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading to true when submitting

    // Make a POST request to the backend to attempt login
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

    // If login is successful, store the JWT token and redirect the user
    if (data.status === 'ok') {
      alert('Inicio de sesión exitoso'); // Show a success alert
      localStorage.setItem('token', data.token); // Save the JWT token in localStorage
      router.push('/dreamteam'); // Redirect to the dream team page
    } else {
      alert(data.error); // Show an error alert if login fails
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
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
};

export default Login;


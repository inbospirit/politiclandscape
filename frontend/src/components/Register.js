import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions'; // You can log the user in after registration

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.status === 'Usuario registrado') {
      alert('Usuario registrado con éxito');
      dispatch(loginUser(username, password)); // Automatically login after registration
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

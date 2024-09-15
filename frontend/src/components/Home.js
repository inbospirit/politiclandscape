import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <p>This is the home page of your site where you can add more content later.</p>
      <Link to="/login">Inicia Sesion</Link>
    </div>
  );
};

export default Home;

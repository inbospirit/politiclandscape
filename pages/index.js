import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <p>This is the home page of your site where you can add more content later.</p>

      {/* Link to the login page */}
      <p><Link href="/login">Inicia Sesion</Link></p>

      {/* Link to the registration page */}
      <p><Link href="/register">Regístrate aquí</Link></p>
    </div>
  );
};

export default HomePage;

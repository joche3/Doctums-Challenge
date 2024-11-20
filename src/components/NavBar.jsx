import React from 'react';
import { Link } from 'react-router-dom'; // Para navegar entre rutas

const Navbar = () => {
  return (
    <nav className="bg-customSecondary-900 text-white p-4 rounded-lg flex items-center justify-between  max-w-screen-xl mx-auto">
      {/* Opciones de navegación a la izquierda */}
      <div className="flex gap-4 mx-24">
        <Link to="/" className="hover:underline font">Home</Link>
        <Link to="/introduction" className="hover:underline">Introduction</Link>
      </div>

      {/* Logo en el centro */}
      <div className="flex justify-center flex-grow">
        <img src="./src/assets/other-assets/logoFix.svg" alt="Logo" className="h-8 m-4" />
      </div>

      {/* Opciones de navegación a la derecha  */}
      <div className="flex gap-4 mx-24">
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/products" className="hover:underline">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
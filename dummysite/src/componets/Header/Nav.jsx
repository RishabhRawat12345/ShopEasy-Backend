import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="flex justify-between items-center bg-white shadow-md w-full p-4 h-24">
      {/* Logo */}
      <img 
        className="h-24" 
        src="https://img.freepik.com/free-vector/flat-design-mobile-store-logo-template_23-2149728782.jpg?semt=ais_hybrid" 
        alt="Mobile Store Logo" 
      />

      {/* Desktop Navigation Links */}
      <div className="flex  space-x-8">
        <Link to="/Shop" href="" className="text-purple-400 hover:text-purple-600">Shop</Link>
        <Link to="/Men" className="text-purple-400 hover:text-purple-600">Men</Link>
        <Link to="/Women" className="text-purple-400 hover:text-purple-600">Women</Link >
        <Link to="/Kids" className="text-purple-400 hover:text-purple-600">Kids</Link>
      </div>

      {/* Mobile Hamburger Menu */}
      

     

      {/* Login Button */}
      <div className='flex gap-5'>
        <button className="bg-transparent border-2 border-gray-400 text-gray-400 px-6 py-2 rounded-md hover:bg-gray-100 h-10">
          Login
        </button>
        <img  className="h-10"src="https://cdn-icons-png.freepik.com/256/401/401944.png?semt=ais_hybrid" alt="" />
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import './Navbar.css';

function Navbar(){
  return (
    <div className = "Navbar">
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  )
}

export default Navbar;

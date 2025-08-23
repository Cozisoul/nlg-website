// Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">NLG_</div>
      <nav className="site-nav">
        <a href="#projects">Projects</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
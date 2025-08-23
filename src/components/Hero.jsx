// Hero.jsx
import React from 'react';
import './Hero.css';

function Hero({ content }) {
  return (
    <div className="hero-text-sticky">
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
    </div>
  );
}
export default Hero;
import React from 'react';
import { AppData } from '../content/data';

function Hero() {
  return (
    <header className="hero-section section">
      <div className="hero-content">
        <h1 className="hero-title">{AppData.HERO_DATA.title}</h1>
        <p className="hero-subtitle">{AppData.HERO_DATA.subtitle}</p>
      </div>
      <div className="hero-visual"></div>
    </header>
  );
}
export default Hero;
import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import { siteData } from './content/siteContent.js';
import './index.css';

function App() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    // 2. Initialize Intersection Observer for Reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections (assuming components render elements with .section class)
    // We might need to ensure components actually have this class.
    // For now, let's target generic block elements inside main
    const sections = document.querySelectorAll('.right-column > div, .right-column section');
    sections.forEach(section => {
      section.classList.add('section'); // Ensure they have the class
      observer.observe(section);
    });

  }, []);

  return (
    <div className="site-container">
      
      <aside className="left-column">
        <Header />
        <Hero content={siteData.hero} />
        <Footer content={siteData.footer} />
      </aside>

      <main className="right-column">
        {/* Each of these is a full, self-contained section */}
        <Projects content={siteData.projects} />
        <Process content={siteData.process} />
        <About content={siteData.about} />
      </main>
      
    </div>
  );
}

export default App;
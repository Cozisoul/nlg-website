import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

function About({ content }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="about" className={`section ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="section-title">{content.title}</h2>
      
      <div className="about-grid">
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
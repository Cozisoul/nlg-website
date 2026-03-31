import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Process.css';

function Process({ content }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="process" className={`section ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="section-title">{content.title}</h2>
      <div className="process-grid">
        {content.items.map(item => (
          <div key={item.id} className="process-item">
            <span className="process-number">{item.id}</span>
            <h3 className="process-item-title">{item.title}</h3>
            {/* CORRECTED: Now uses item.description */}
            <p className="process-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Process;
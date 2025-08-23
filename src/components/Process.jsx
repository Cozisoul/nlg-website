import React from 'react';
import { AppData } from '../content/data';

function Process() {
  return (
    <section id="process" className="section">
      <h2 className="section-title">Process</h2>
      <div className="process-grid">
        {AppData.PROCESS_DATA.map((item) => (
          <div className="process-item" key={item.number}>
            <span className="process-number">{item.number}</span>
            <h3 className="process-title">{item.title}</h3>
            <p className="process-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Process;
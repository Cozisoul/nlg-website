import React from 'react';
import { AppData } from '../content/data';

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">The Office</h2>
      <div className="office-grid">
        <div className="office-bio">
          <p>{AppData.ABOUT_DATA.summary}</p>
        </div>
        <div className="office-members">
          {AppData.ABOUT_DATA.members.map(member => (
            <p key={member.name}><strong>{member.name}</strong> — {member.role}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;
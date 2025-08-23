import React from 'react';
import { AppData } from '../content/data';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Selected Work</h2>
      <div className="casestudies-grid">
        {AppData.PROJECTS_DATA.map((project) => (
          <div className="case-study-card" key={project.title}>
            <a href="#" className="card-link">
              <img src={project.image} alt={`A promotional image for the ${project.client} project.`} className="card-image" />
              <div className="card-body">
                <h3 className="card-title">{project.client}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map(tag => <span className="card-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
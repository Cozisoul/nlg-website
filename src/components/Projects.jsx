import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Projects.css';

function Projects({ content }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="projects" className={`section ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="section-title">{content.title}</h2>
      <div className="projects-grid">
        {content.items.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={`Architectural render for ${project.title}`} className="project-image" />
            <div className="project-text">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-meta">{project.meta}</p>
              {/* CORRECTED: Now uses project.description */}
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
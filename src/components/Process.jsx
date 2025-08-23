import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Projects.css';

function Projects({ content }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="projects" className={`section ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="section-title">{content.title}</h2>
      {/* ... the rest of your projects grid ... */}
    </section>
  );
}
export default Projects;
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

function Projects({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  if (!data) return null;

  const projects = Array.isArray(data.project) ? data.project : [data.project];

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.div>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div
              className={`project-card${proj.featured === 'true' ? ' featured' : ''}`}
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 * i + 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: '0 16px 40px var(--glow)', transition: { duration: 0.2 } }}
            >
              <div className="project-top">
                <span className="project-icon">◈</span>
                <div className="project-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      GH
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" title="Live">
                      ↗
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tech">
                {proj.tech.split(', ').map((t, ti) => (
                  <span key={ti} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

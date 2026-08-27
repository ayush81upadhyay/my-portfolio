import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

function Skills({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  if (!data) return null;

  const categories = Array.isArray(data.category) ? data.category : [data.category];

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.div>
        <div className="skills-grid">
          {categories.map((cat, ci) => {
            const skillList = Array.isArray(cat.skill) ? cat.skill : [cat.skill];
            return (
              <motion.div
                className="skill-card"
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * ci + 0.2 }}
              >
                <h4 className="skill-category">{cat['@_name']}</h4>
                <div className="skill-bars">
                  {skillList.map((skill, si) => {
                    const name = typeof skill === 'object' ? skill['#text'] : skill;
                    const level = typeof skill === 'object' ? skill['@_level'] : 80;
                    return (
                      <div className="skill-bar-item" key={si}>
                        <div className="skill-bar-label">
                          <span>{name}</span>
                          <span>{level}%</span>
                        </div>
                        <div className="skill-bar-track">
                          <motion.div
                            className="skill-bar-fill"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${level}%` } : { width: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 * si + 0.3 * ci + 0.3, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

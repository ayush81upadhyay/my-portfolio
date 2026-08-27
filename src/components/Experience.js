import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';

function Experience({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  if (!data) return null;

  const jobs = Array.isArray(data.job) ? data.job : [data.job];

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.div>
        <div className="exp-layout">
          <motion.ul
            className="exp-tabs"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {jobs.map((job, i) => (
              <li
                key={job.id}
                className={`exp-tab${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                {job.company}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="exp-detail"
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="exp-role">
              {jobs[active].role} <span>@ {jobs[active].company}</span>
            </h3>
            <p className="exp-meta">{jobs[active].period} · {jobs[active].location}</p>
            {jobs[active].project && (
              <p className="exp-project">Project: {jobs[active].project}</p>
            )}
            <ul className="exp-points">
              {(Array.isArray(jobs[active].points.point)
                ? jobs[active].points.point
                : [jobs[active].points.point]
              ).map((pt, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                >
                  <span className="highlight-arrow">▹</span> {pt}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

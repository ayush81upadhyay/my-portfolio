import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Education.css';

const statusColors = { Ongoing: '#f59e0b', Completed: '#10b981' };

function Education({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState(null);

  if (!data) return null;
  const entries = Array.isArray(data.entry) ? data.entry : [data.entry];

  return (
    <section className="education section" id="education" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.div>

        <div className="edu-timeline">
          {entries.map((entry, i) => {
            const highlights = Array.isArray(entry.highlights?.point)
              ? entry.highlights.point
              : [entry.highlights?.point].filter(Boolean);
            const isOpen = expanded === i;

            return (
              <motion.div
                className="edu-card"
                key={entry.id}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 * i + 0.2 }}
              >
                <div className="edu-dot" />
                <div className="edu-card-inner">
                  <div className="edu-header" onClick={() => setExpanded(isOpen ? null : i)}>
                    <div className="edu-header-left">
                      <span
                        className="edu-status-badge"
                        style={{ background: statusColors[entry.status] || '#6366f1' }}
                      >
                        {entry.status}
                      </span>
                      <div>
                        <h3 className="edu-institution">{entry.institution}</h3>
                        <p className="edu-degree">{entry.degree} · <span>{entry.field}</span></p>
                      </div>
                    </div>
                    <div className="edu-header-right">
                      <p className="edu-period">{entry.period}</p>
                      <p className="edu-grade">{entry.grade}</p>
                      <motion.span
                        className="edu-chevron"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        ▾
                      </motion.span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        className="edu-points"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        {highlights.map((pt, pi) => (
                          <motion.li
                            key={pi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * pi }}
                          >
                            <span className="highlight-arrow">▹</span> {pt}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;

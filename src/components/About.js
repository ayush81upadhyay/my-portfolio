import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

function About({ data }) {
  const [portraitLoaded, setPortraitLoaded] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  if (!data) return null;

  const highlights = Array.isArray(data.highlights?.highlight)
    ? data.highlights.highlight
    : [data.highlights?.highlight];

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.div>
        <div className={`about-grid${portraitLoaded ? ' has-portrait' : ''}`}>
          {data.portrait && !portraitFailed && (
            <motion.div
              className={`about-portrait${portraitLoaded ? ' loaded' : ''}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: portraitLoaded ? 1 : 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={`${process.env.PUBLIC_URL}${data.portrait}`}
                alt="Portrait of Ayush Upadhyay"
                onLoad={() => setPortraitLoaded(true)}
                onError={() => setPortraitFailed(true)}
              />
            </motion.div>
          )}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>{data.summary}</p>
          </motion.div>
          <motion.ul
            className="about-highlights"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <span className="highlight-arrow">▹</span> {h}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default About;

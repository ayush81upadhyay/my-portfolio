import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

function Contact({ email }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="section-container contact-inner">
        <motion.div
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.div>
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="contact-sub"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open.
        </motion.p>
        <motion.a
          href={`mailto:${email}`}
          className="contact-btn"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.04 }}
        >
          Say Hello ✉
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;

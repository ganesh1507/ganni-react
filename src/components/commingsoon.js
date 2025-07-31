import React from 'react';
import { motion } from 'framer-motion';
import './commingsoon.css';

export default function ComingSoon() {
  return (
    <section className="coming-soon-container">
      <motion.div
        className="coming-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>🚀 Coming Soon</h1>
        <p>
          We're working hard to bring you something amazing. This page will be live very soon!
        </p>
        <span className="soon-badge">ETA: Fall 2025</span>
      </motion.div>
    </section>
  );
}

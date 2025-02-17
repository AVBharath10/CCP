import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Career Path</h1>
        <p>
          Get AI-driven career guidance tailored to your skills and aspirations.
        </p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button primary">Get Started</Link>
          <Link to="/resources" className="cta-button secondary">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
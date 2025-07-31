// FILE: src/components/Hero.js
import React from 'react';
import './Hero.css';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section id='home'  className="hero-section">
      <h1 className="hero-title">Hello, I'm Ruzzel</h1>
      <p className="hero-description">A passionate web developer building modern UIs</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn-filled">View Projects</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>

      <div className="hero-image">
        <img src="/pic.jpg" alt="Profile" />
      </div>

      <div className="hero-social">
        <a href="https://www.instagram.com/shet_iee?igsh=MWlrYmN6NGtlOXl2MA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/share/19bPHU88G9/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="icon" />
        </a>
        <a href="mailto:your@email.com">
          <FaEnvelope className="icon" />
        </a>
      </div>

      
    </section>
  );
}

export default Hero;

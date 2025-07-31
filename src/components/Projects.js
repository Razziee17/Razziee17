import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <button href="" target="_blank" rel="noopener noreferrer" className="project-card">
          <img src="/project1.jpg" alt="Project 1" className="project-image" />
          <h3 className="project-title">Second Year (1st sem) Project </h3>
          <p className="project-description">It is a localhost website. This project is for data Recodings.</p>
        </button>
        <a href="https://alerthero.south.it.com" target="_blank" rel="noopener noreferrer" className="project-card">
          <img src="/project2.png" alt="Project 2" className="project-image" />
          <h3 className="project-title">Second Year (2nd sem) Project </h3>
          <p className="project-description">Alert Hero. A risk management system for monitoring calamities and easy access for reporting incidents.</p>
        </a>
        
      </div>
    </section>
  );
}

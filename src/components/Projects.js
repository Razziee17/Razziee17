import React from 'react';
import './Projects.css';
import profilePic from '../assets/project1.jpg';
import profilePic2 from '../assets/project2.png';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <button href="" target="_blank" rel="noopener noreferrer" className="project-card">
          <img src={profilePic} alt="Profile" className="project-image"/>
          <h3 className="project-title">Second Year (1st sem) Project </h3>
          <p className="project-description">It is a localhost website. This project is for data Recodings.</p>
        </button>
        <a href="https://alerthero.south.it.com" target="_blank" rel="noopener noreferrer" className="project-card">
          <img src={profilePic2} alt="Profile" className="project-image"/>
          <h3 className="project-title">Second Year (2nd sem) Project </h3>
          <p className="project-description">Alert Hero. 
            This is a risk management system.</p>
        </a>
        
      </div>
    </section>
  );
}

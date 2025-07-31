import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyPortfolio</div>
      <div className="navbar-links">
        <a className="nav-link" onClick={() => {
            const section = document.getElementById('home');
            section?.scrollIntoView({ behavior: 'smooth' });
            }}>
            Home
        </a>
        <a className="nav-link" onClick={() => {
            const section = document.getElementById('about');
            section?.scrollIntoView({ behavior: 'smooth' });
            }}>
            About
        </a>
        <a className="nav-link" onClick={() => {
            const section = document.getElementById('projects');
            section?.scrollIntoView({ behavior: 'smooth' });
            }}>
            Projects
        </a>
        <a className="nav-link" onClick={() => {
            const section = document.getElementById('contact');
            section?.scrollIntoView({ behavior: 'smooth' });
            }}>
            Contact
        </a>
        
      </div>
    </nav>
  );
}
import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="contact-description">Feel free to reach out via email!</p>
      <a href="mailto:you@example.com" className="btn-filled">
        Send Email
      </a>
    </section>
  );
}
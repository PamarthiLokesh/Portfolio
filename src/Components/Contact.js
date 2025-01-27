import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <p><strong>Email:</strong> lokeshpamarthi022@gmail.com</p>
        <p><strong>Phone:</strong> (+91) 9989212859</p>
        <p><strong>Location:</strong> HYDERABAD, INDIA</p>
      </div>
      <div className="social-links">
        <p>Connect with me:</p>
        <a href="https://www.linkedin.com/in/lokesh-pamarthi-778076248" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/PamarthiLokesh" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;

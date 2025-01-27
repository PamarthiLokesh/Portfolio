import React from 'react';
import '../Styles/Hero.css';
import profileImage from '../images/Lokesh-2.jpg'; // Replace this with the path to your profile image

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="profile-photo-container">
          <img src={profileImage} alt="Profile" className="profile-photo" />
        </div>
        <div className="text-content">
          <h1>
            Hello, I'm <span className="highlight">LOKESH PAMARTHI</span>
          </h1>
          <p className="description">
            "A Web Developer with a passion for creating stunning applications. I strive to build intuitive, user-friendly, and visually appealing digital experiences that solve real-world problems. With a strong foundation in the MERN stack and a love for learning emerging technologies, I am committed to delivering high-quality, responsive, and scalable solutions. Whether it's crafting seamless user interfaces or optimizing back-end functionality, I aim to leave a lasting impact through every project I undertake."
          </p>
          <a
            href="/Lokesh P Resume.pdf" // Path to your resume file
            download="Lokesh_Pamarthi_Resume.pdf" // Suggested name for downloaded file
            className="cta-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

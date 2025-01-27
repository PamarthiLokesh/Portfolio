import React from 'react';
import '../Styles/Project.css';

const projects = [
  { 
    id: 1, 
    title: 'Pulse LMS', 
    description: `Developed key components for Pulse LMS, an institute-specific Learning 
      Management System. Designed a user-friendly interface and implemented 
      robust backend functionality, enhancing course management and content 
      delivery.`,
    technologies: `HTML, CSS, JavaScript, React.js, TypeScript, Node.js, 
      Express.js, MongoDB, React Bootstrap or other SCSS frameworks for responsive design, Version control using Git and GitHub for project collaboration and 
management.`,
    link: 'https://pulse.brninfotech.com' // Replace '#' with the actual link to the project demo or repository
  },
  { 
    id: 2, 
    title: 'Bike Application', 
    description: `Developed a React Native mobile application for buying and selling bikes and spare parts. 
      The app includes location-based filtering for users to view and list items based on their proximity.`,
    technologies: `React Native Expo-cli, Redux, AWS for Image Storing, Firebase (for authentication and database), Google Maps API (for location services).`,
    link: '#' // Replace '#' with the actual link to the project demo or repository
  },
  // { 
  //   id: 3, 
  //   title: 'Project 3', 
  //   description: 'E-commerce site built with React.', 
  //   link: '#' 
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.technologies && (
              <p className="technologies">
                <strong>{project.technologies}</strong>
              </p>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import jrn from './Journal.png'
import lib from './lib.png'

const projects = [
  {
    title: "Online Journal",
    image: jrn,
    description: "A website created using Node.js, expess.js and EJS to add,edit or delete journal entries."
  },
  {
    title: "Library Management System",
    image: lib,
    description: "A personal library desktop application created using Python and Tkinter."
  },
  
];

const Projects = () => {
    return (
      <section className='project' id='project'>
          <h2 className="heading">Projects</h2>
          <div className="project-container">
          {projects.map((project, index) => (
              <a
              key={index}
              href={project.description}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
          >
              <div className="project-icon">
                  <img src={project.image} size="3x" />
              </div>
              <div className="project-details">
                  <h3>{project.title}</h3>
              </div>
              <div className="project-details">
                  <h4>{project.description}</h4>
              </div>
              </a>
          ))}
          </div>
      </section>
    );
  }
  
  export default Projects;
  
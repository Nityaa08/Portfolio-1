import React from 'react';
import '../App.css';
import profilePic from './photos.jpg';

const About = () => {
  return (
    <section className="about" id="about"> 
    <h2 className='heading'>About Me</h2>
      <div className="about-box">
        <img src={profilePic} alt="Profile" className="profile-photo" />
        <div className="about-text">
         
          <p>
            Hi, I’m Nityashree. I’m a third-year BTech student specializing in Computer Science Engineering with a focus on Artificial Intelligence and Data Science. 
            I’ve developed a keen interest in web development and have completed courses in full-stack development, covering both frontend and backend. 
            I’m also passionate about AI and ML and am eager to gain hands-on experience through various projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

// Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const contacts = [
  {
    platform: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/i_nitya08shree?igsh=Mzk0dDZoaWJqem9l",
  },
  {
    platform: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/nityashree-s-b34b1b291",
  },
  {
    platform: "Email",
    icon: faEnvelope,
    link: "mailto:nitya08shree@gmail.com",
  },
];

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h2 className="heading">Contact Me</h2>
      <div className="contact-container">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">
              <FontAwesomeIcon icon={contact.icon} />
            </div>
            <div className="contact-details">
              <h3>{contact.platform}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;

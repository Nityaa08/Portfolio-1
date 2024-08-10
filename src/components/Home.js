import React from 'react';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>
                    <br/>
                     DEVELOP <br/>
                    DEBUG <br/>
                     DESIGN
                </h1>

                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/nityashree-s-b34b1b291"> <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:nitya08shree@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="https://www.instagram.com/i_nitya08shree?igsh=Mzk0dDZoaWJqem9l"><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
            </div>
        </section> 
    );
}

export default Home;

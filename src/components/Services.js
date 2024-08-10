import React from 'react';
import '../App.css';
import logo1 from './logo1.png'; 
import logo2 from './logo2.png'; 
import logo3 from './logo3.png'; 

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading">Services</h2>
            <div className="services-container">
                <div className="service-box">
                    <img src={logo1} alt="Company Logo 1" className="service-logo" />
                    <div className="service-info">
                        <h4>Kuruksastra</h4>
                        <h5>Team Member at TechnoInformals</h5>
                        <p>
                            Kuruksastra is the cultural extravaganza of SASTRA Deemed University. It is a cultural bonanza consisting of arts, music, literary events. These events help in the enhancement of event management skills, crowd control skills and provide the opportunity for students to participate in extracuricular activities. TechnoInformals conducts such events for people to participate in, the events ranging from treasure hunts to open mic events. The team often provides emcees for the events conducted during KS.
                        </p>
                    </div>
                </div>
                <div className="service-box">
                    <img src={logo2} alt="Company Logo 2" className="service-logo" />
                    <div className="service-info">
                        <h4>DAKSH</h4>
                        <h5>Team Member at Technotainment</h5>
                        <p>
                            DAKSH is the techno-management festival of SASTRA University. It is an annual event comprising of a myriad of events involving all trades of engineering. It attempts to cross boundaries of knowledge beyond textbooks and classrooms. DAKSH presents an opportunity to students to display their techno-managerial skills while participating in a plethora of exciting events. Technotainment conducts management events for DAKSH to help students enjoy learning more about the ascpects of the business world.
                        </p>
                    </div>
                </div>
                <div className="service-box">
                    <img src={logo3} alt="Company Logo 3" className="service-logo" />
                    <div className="service-info">
                        <h4>Jankalyan Multipurpose Education Society</h4>
                        <h5>Fund Raising and Strategies Development Intern</h5>
                        <p>
                            JMES is a non-profit prganisation for the education sector of India. Their mission is to build a platform for vulnerable and oppressed children, living in poverty. Thus, they work to empower them with a well-equipped education system and gaining knowledge to alleviate poverty. The organisation collects funds for the underprivileged and helps in providing education and food in the rural areas. As an intern, the goal was to raise funds for the people who had lost their livelihood and the children who lost the access to education due to the pandemic.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

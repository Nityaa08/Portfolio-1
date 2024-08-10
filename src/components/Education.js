import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="heading">
                My <span>Education</span>
            </h2>
            <div className="timeline">
                <div className="container left">
                    
                    <div className="content">
                        <div className="tag">
                            <h2>University</h2>
                        </div>
                        <div className="decs">
                            <p>
                                SASTRA University<br />
                                Thanjavur<br />
                                2022-present
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container right">
                    
                    <div className="content">
                        <div className="tag">
                            <h2>Higher Secondary School</h2>
                        </div>
                        <div className="decs">
                            <p>
                                Convent of Jesus & Mary<br />
                                New Delhi<br />
                                Grade 12
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container left">
                    
                    <div className="content">
                        <div className="tag">
                            <h2>Secondary School</h2>
                        </div>
                        <div className="decs">
                            <p>
                            Convent of Jesus & Mary<br />
                                New Delhi<br />
                                Grade 10
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;

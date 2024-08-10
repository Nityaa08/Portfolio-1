import React from 'react';
import '../App.css';
import c from './c.png';
import cpp from './c++.png';
import java from './java.png';
import python from './python.png';
import html from './html.png';
import css from './css.png';
import js from './js.png';
import rjs from './react.png';

const Skills = () => {
    const skills = [
        { src: c, alt: "C", name: "C Program" },
        { src: cpp, alt: "C++", name: "C++" },
        { src: java, alt: "Java", name: "Java" },
        { src: python, alt: "Python", name: "Python" },
        { src: html, alt: "HTML", name: "HTML" },
        { src: css, alt: "CSS", name: "CSS" },
        { src: js, alt: "JavaScript", name: "JavaScript" },
        { src: rjs, alt: "ReactJS", name: "ReactJS" }
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="heading">Skills</h2>
            <div className="container">
                <div className="row">
                    {skills.map(skill => (
                        <div className="bar" key={skill.name}>
                            <div className="info">
                                <img src={skill.src} alt={skill.alt} />
                                <span>{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

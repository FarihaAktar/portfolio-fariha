import React from 'react';
import './AboutMe.css';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'
    ;
import ProgressBar from './ProgressBar/ProgressBar';

const AboutMe = () => {
    const bars = [
        {
            path: "#ffe227",
            end: 90,
            tool: "HTML"
        },
        {
            path: "#f21170",
            end: 80,
            tool: "CSS"
        },
        {
            path: "#72147e",
            end: 50,
            tool: "JavaScript"
        },
        {
            path: "#eb5e0b",
            end: 70,
            tool: "React"
        },
    ]
    return (
        <div className='about-section'>
            <SideBar></SideBar>
            <div className='about-me'>
                <h2>Who Am I ?</h2>
                <div className='about-me-detail'>
                    <p> <strong>Hi, I am FARIHA AKTAR.</strong> I want to be a front-end developer. Though i have just  started in this field, i believe i have potentials and skills to start my career. I have done many personal projects that you can see in my project section in detail. As a junior front end developer, now my goal is to work in a team so i can share my skill set and also learn from my team members. </p>
                </div>
                <div className='skills'>
                    <div>
                        <div className='about-skill'>
                            <FontAwesomeIcon className='design-icon' icon={faLayerGroup} />
                            <h3 style={{ fontWeight: 500, }}>WEB DESIGN</h3>
                        </div>
                        <div className='line1'></div>
                    </div>
                    <div>
                        <div className='about-skill'>
                            <FontAwesomeIcon className='react' icon={faReact} />
                            <h3 style={{ fontWeight: 500, }}>React</h3>
                        </div>
                        <div className='line2'></div>
                    </div>
                    <div>
                        <div className='about-skill'>
                            <FontAwesomeIcon className='javascript' icon={faJsSquare} />
                            <h3 style={{ fontWeight: 500, }}>JavaScript</h3>
                        </div>
                        <div className='line3'></div>
                    </div>
                    <div>
                        <div className='about-skill'>
                            <FontAwesomeIcon className='code' icon={faCode} />
                            <h3 style={{ fontWeight: 500, }}>HTML/CSS</h3>
                        </div>
                        <div className='line4'></div>
                    </div>
                </div>
                <div className='button-section'>
                    <a href="https://drive.google.com/uc?export=download&id=1dGv0vCzSjL5yCdD_iEopDjtRYd504l_k" className='button'>HIRE ME</a>
                </div>
                <h2 className='skill'>Skills</h2>
                <div className='progress-section'>
                    {
                        bars.map(bar => 
                        <div style={{ width: "15%", marginLeft: 50 }} bar={bar}> 
                            <ProgressBar bar={bar}></ProgressBar>
                        </div>
                        )
                    }
                    {/* <div  style={{ width: "10%" }}>
                        {
                            bars.map(bar => <ProgressBar bar={bar}></ProgressBar>)
                        }
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
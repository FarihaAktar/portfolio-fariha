import React from 'react';
import SideBar from '../../../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectThree = () => {
    return (
        <div className='project-one-section'>
            <SideBar></SideBar>
            <div className='project-one'>
                <h2>Rescue Riders</h2>
                <p>It's a riding service website similar to UBER. clients can choose a ride. It's also use google Sign-In method using firebase authentication. It's also responsive for mobile. And i also include google map in this project. It's another of my personal project that i create in two days. It was my assignment that i did in programming-hero-course.</p>
                <p>I made this project using react, javascript, customize css, google map. </p>
                <div>
                    <h3>Website: <a className='website-link' href="https://eager-poitras-54f586.netlify.app">https://eager-poitras-54f586.netlify.app</a></h3>
                    <h3>Source Code: <a className='website-link' href="https://github.com/Farihaakter/rescue-riders"><FontAwesomeIcon icon={faGithub} /> Github</a></h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectThree;
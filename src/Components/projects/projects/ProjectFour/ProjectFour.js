import React from 'react';
import SideBar from '../../../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectFour = () => {
    return (
        <div className='project-one-section'>
            <SideBar></SideBar>
            <div className='project-one'>
                <h2>Rock-Paper-Scissors</h2>
                <p>It's one of my fun project that i made. Because you can play rock paper scissors in here. You can see your results. Trust me you can win too. The most amazing part is -- this site only includes JavaScript, HTML and CSS. YAY.. LET'S PLAY</p>
                <div>
                    <h3>Website: <a className='website-link' href="https://sleepy-panini-22ce3e.netlify.app/">https://sleepy-panini-22ce3e.netlify.app</a></h3>
                    <h3>Source Code: <a className='website-link' href="https://github.com/Farihaakter/rock-paper-scissors-game"><FontAwesomeIcon icon={faGithub} /> Github</a></h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectFour;
import React from 'react';
import './Projects.css'
import SideBar from '../SideBar/SideBar';
import project1 from '../../image/project1.jpg';
import project2 from '../../image/projectTwo.jpg';
import project3 from '../../image/project3.png';
import project4 from '../../image/projectFour.jpg';
import Project from './project/Project';

const Projects = () => {
    const projects = [
        {
            projectImg: project1,
            project: "projectOne"
        },
        {
            projectImg: project2,
            project: "projectTwo"
        },
        {
            projectImg: project3,
            project: "projectThree"
        },
        {
            projectImg: project4,
            project: "projectFour"
        },
    ]
    return (
        <div className='project-section'>
            <SideBar></SideBar>
            <div className='projects'>
                <h2>My Latest Projects</h2>
                <div className='project-info'>
                        {
                            projects.map(project => <Project project={project}></Project>)
                        }
                </div>

            </div>
        </div>
    );
};

export default Projects;
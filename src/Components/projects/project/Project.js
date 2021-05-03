import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    return (
        <div className='single-project'>
            <Link to={project.project}>
                <div className='project-img'>
                    <img className='project1' src={project.projectImg} alt="" />
                    <div className='project-link'>
                        <h3 className='link' >Learn More</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Project;
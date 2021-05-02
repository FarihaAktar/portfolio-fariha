import React from 'react';
import './Projects.css'
import SideBar from '../SideBar/SideBar';
import project1 from '../../image/localhost_3001_.png';
import project2 from '../../image/project2.png';
import project3 from '../../image/project3.png';
import project4 from '../../image/project4.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='project-section'>
            <SideBar></SideBar>
            <div className='projects'>
                <h2>My Latest Projects</h2>
                <div className='project-info'>
                    <div className='single-project'>
                        <Link to='/projectOne'>
                            <div className='project-img'>
                                <img className='project1' src={project1} alt="" />
                                <div className='project-link'>
                                    <h3 className='link' >Learn More</h3>
                                    {/* <a href="https://splash-44b4f.web.app/" className='link'>Learn More</a> */}
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className='single-project'>
                        <Link to='projectTwo'>
                            <div className='project-img'>
                                <img className='project1' src={project2} alt="" />
                                <div className='project-link'>
                                    <h3 className='link' >Learn More</h3>
                                    {/* <a href="https://shopaholic-ae91f.web.app/" className='link'>Learn More</a> */}
                                </div>
                            </div>

                        </Link>
                    </div>
                    <div className='single-project'>
                        <Link to='/projectThree'>
                            <div className='project-img'>
                                <img className='project1' src={project3} alt="" />
                                <div className='project-link'>
                                    <h3 className='link' >Learn More</h3>
                                    {/* <a href="https://eager-poitras-54f586.netlify.app" className='link'>Learn More</a> */}
                                </div>
                            </div>

                        </Link>
                    </div>
                    <div className='single-project'>
                        <Link to='projectFour'>
                            <div className='project-img'>
                                <img className='project1' src={project4} alt="" />
                                <div className='project-link'>
                                    <h3 className='link' >Learn More</h3>
                                    {/* <a href="https://sleepy-panini-22ce3e.netlify.app/" className='link'>Learn More</a> */}
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Projects;
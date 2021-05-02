import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <ul className='sidebar-link'>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='projects'>Projects</Link>
                </li>
                <li>
                    <Link>Blogs</Link>
                </li>
                <li>
                    <Link to='aboutMe'>About Me</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
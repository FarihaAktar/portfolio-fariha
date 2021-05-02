import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-section'>
            <div className='header-content'>
                <div className='avatar'>
                    <div className='image' ></div>
                </div>
                <div className='avatar-detail'>
                    <h1>Fariha Aktar</h1>
                    <h4>Front End Developer</h4>
                    <p>I am an enthusiastic self-driven individual who loves programming and wants to establish a career in this field. </p>
                </div>
            </div>
            <div className='header'>
                <ul className='navbar'>
                    <li><Link className='navbar-link' to='/home'>Home</Link></li>
                    <li><Link className='navbar-link' to='/projects'>Projects</Link></li>
                    <li><a  className='navbar-link' href="">Blogs</a></li>
                    <li><Link className='navbar-link' to='/aboutMe'>About Me</Link></li>
                    <li><Link className='navbar-link' to='/contact'>Contact</Link></li>
                    <li>
                        <a href="https://drive.google.com/uc?export=download&id=1dGv0vCzSjL5yCdD_iEopDjtRYd504l_k" className='cv-btn'>Download CV</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;
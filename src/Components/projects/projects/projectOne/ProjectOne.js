import React from 'react';
import './ProjectOne.css'
import SideBar from '../../../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const ProjectOne = () => {
    return (
        <div className='project-one-section'>
            <SideBar></SideBar>
            <div className='project-one'>
                <h2>Splash Photography Studio</h2>
                <p>This is a service site website where users can choose a service according to there preferences. Users can add services and they have to login with gmail account to add services. It's a firebase authentication system. Users can check their previous orders and add reviews if they want. Client's reviews will show in the home page. This website also have admin panel where admin can add, update and delete a service using CRUD operations. Only authorized admin can see this panel.</p>
                <p>React Js, React-Router-Dom, React-Hook-Form, CSS, Context API, MongoDB, Firebase Authentication system, JavaScript are used in this project. </p>
                <div>
                    <h3>Website: <a className='website-link' href="https://splash-44b4f.web.app/">https://splash-44b4f.web.app/</a></h3>
                    <h3>Source Code: <a className='website-link' href="https://github.com/Farihaakter/splash-photography-studio"><FontAwesomeIcon icon={faGithub} /> Github</a></h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectOne;
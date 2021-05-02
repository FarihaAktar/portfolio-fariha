import React from 'react';
import SideBar from '../../../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectTwo = () => {
    return (
        <div className='project-one-section'>
            <SideBar></SideBar>
            <div className='project-one'>
                <h2>Shopaholic</h2>
                <p><strong>SHOPAHOLIC</strong> is an E-Commerce website. clients can shop here. They can check their orders. This project also include google sign-in method. Admin panel is used in this project where admin can update a product using CRUD operations.</p>
                <p>Database CRUD operation, React js, JS, React-Router-Dom, Font-awesome, Firebase, mongoDB are used while making this project.</p>
                <div>
                    <h3>Website: <a className='website-link' href="https://shopaholic-ae91f.web.app/">https://shopaholic-ae91f.web.app/</a></h3>
                    <h3>Source Code: <a className='website-link' href="https://github.com/Farihaakter/shopaholic-shopping-site"><FontAwesomeIcon icon={faGithub} /> Github</a></h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectTwo;
import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {

    const handleBlur = (e) => {
        let isTextValid = true;

        if (e.target.name === '_replyto') {
            const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            isTextValid = re.test(e.target.value);
            console.log(isTextValid)
            if (isTextValid === false) {
                alert("Enter a valid email!")
            }
        }
        if (e.target.name === 'phone') {
            const re = /^[0-9\-\+]{9,15}$/;
            isTextValid = re.test(e.target.value);
            console.log(isTextValid)
        }
    }
    return (
        <div className='contact-section'>
            <SideBar></SideBar>
            <div className='form-div'>
                <div className='contact-info'>
                    <h3>Contact Info </h3>
                    <p>Email: <span>farihaaktar258@gmail.com</span> </p>
                    <div>
                        <a href="https://www.linkedin.com/feed/"> <FontAwesomeIcon className='contact-icon' icon={faLinkedin} /></a>
                        <a href="https://github.com/Farihaakter"><FontAwesomeIcon className='contact-icon' icon={faGithubSquare} /></a>
                    </div>
                </div>

                <div className='contact-form'>
                    <h2 className='get-in-touch'>Get In Touch</h2>
                    <form className='form' action="https://formspree.io/f/xzbydvrk" method="POST">
                        <input className='text' id="fname" type="text" name="name" placeholder='Your Name' required></input>
                        <br />
                        <br />
                        <input className='text' id="user-email" onBlur={handleBlur} type="email" name="_replyto" placeholder='Your Email' required></input>
                        <br />
                        <br />
                        <input className='text' id="user-phone" type="text" name="phone" placeholder='Phone Number' required></input>
                        <br />
                        <br />
                        <textarea className='text-msg' id="massage" type="text" name="massage" placeholder='Enter Massage' required></textarea>
                        <br />
                        <br />
                        <input className='submit-btn' type="submit" value="SEND"></input>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;
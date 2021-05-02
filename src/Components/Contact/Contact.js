import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Contact.css'

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
                <h2 className='get-in-touch'>Get In Touch</h2>
                <form className='form' action="https://formspree.io/f/xzbydvrk" method="POST">
                    <label for="fname">First Name</label>
                    <br />
                    <input className='text' id="fname" type="text" name="name" placeholder='Enter Your Name' required></input>
                    <br />
                    <br />
                    <label for="user-email">Email</label>
                    <br />
                    <input className='text' id="user-email" onBlur={handleBlur} type="email" name="_replyto" placeholder='Enter Your Email' required></input>
                    <br />
                    <br />
                    <label for="user-phone">Phone</label>
                    <br />
                    <input className='text' id="user-phone" type="text" name="phone" placeholder='+880' required></input>
                    <br />
                    <br />
                    <label for="massage">Massage</label>
                    <br />
                    <textarea className='text-msg' id="massage" type="text" name="massage" placeholder='Enter Massage' required></textarea>
                    <br />
                    <br />
                    <input className='submit-btn' type="submit" value="SEND"></input>

                </form>
            </div>

        </div>
    );
};

export default Contact;
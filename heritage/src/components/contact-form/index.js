import React from "react";

import { IconContext } from "react-icons";

import { RiFacebookBoxLine } from 'react-icons/ri'
import { CiInstagram } from 'react-icons/ci'

// import { SiFacebook, SiInstagram } from "react-icons/si";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import './contact-form.css';

function ContactForm() {
    return (
        <div id="contact-form-wrapper">
            <form> <h2>We would love to hear from you!</h2>
                <input className="half" placeholder="First Name" type="text" maxlength="20" minlength="2" required></input>
                <input className="half" placeholder="Last Name" type="text" maxlength="20" minlength="2" required></input><br></br>
                <input className="half" placeholder="Phone Number" type="tel" maxlength="15" minlength="7" required></input>
                <input className="half" placeholder="Company (optional)" type="text"></input><br></br>
                <input className="full" placeholder="Email Address" type="email" maxlength="40" minlength="4" required></input><br></br>
                <textarea placeholder="Your message here..." className="full" required></textarea><br></br>
                {/* <button className="half">Reset</button> */}
                <button type="submit" className="full">Send Message</button>
                <ul id="contact-link-list">

                <IconContext.Provider value={{ color: "white", className: "contact-social-icons" , hoverColor: "red"}}>
                    <li><a href="#"></a><FaFacebookSquare /></li>
                    <li><a href="#"><FaInstagram /></a></li>
                </IconContext.Provider>


                    
                </ul>
                
            </form>
        </div>
    )
}

export default ContactForm;


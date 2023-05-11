import React from "react";

import './footer.css';

function Footer() {
    return (
        <>
            <div id="footer-wrapper">
                
                <div id="footer-address-wrapper">
                <img src="https://static.wixstatic.com/media/0526d4_de2400d754a44210bbf0bab650c6fa9c~mv2.png/v1/fill/w_384,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0526d4_de2400d754a44210bbf0bab650c6fa9c~mv2.png"></img>
                    <address>
                        <b>Wild Heritage Gardens</b><br />
                        <a href="tel:+17207053151">720.705.3151</a><br />
                        <p>Louisville, Colorado</p>
                    </address>
                   
                </div>
                <div id="email-signup-form-wrapper">
                <form id="email-signup-form">
                    
                        <p>Join our email list for news & events!</p>
                        <input type="email" placeholder="Email Address"></input>
                        <button>Sign Up</button>
                    </form>
                </div>
                {/* <div id="footer-social-links-wrapper">
                    <ul>
                        <li><a href="http://www.google.com">FB</a></li>
                        <li><a href="http://www.google.com">IG</a></li>
                    </ul>

                </div> */}
                <div id="bottom-footer">
                    <p>© {new Date().getFullYear()}. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
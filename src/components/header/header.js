import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";


// logo link "https://static.wixstatic.com/media/0526d4_88084aae6f2b4b7ebb250a128bc3d414~mv2.png/v1/fill/w_1422,h_394,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0526d4_88084aae6f2b4b7ebb250a128bc3d414~mv2.png" id="header-logo"

function Header() {

    const [menuExpanded, setMenuExpanded] = useState(false);


function toggleMenu() {
    setMenuExpanded(!menuExpanded)
}


    return (
        <header>
            
            <nav>
                <Link to='/' className='logo' id='header-logo'><img src="https://static.wixstatic.com/media/0526d4_88084aae6f2b4b7ebb250a128bc3d414~mv2.png/v1/fill/w_1422,h_394,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0526d4_88084aae6f2b4b7ebb250a128bc3d414~mv2.png" id="header-logo" alt="logo"></img></Link>
                <div id='menu-wrapper' style={{height: menuExpanded ? '80vh' : 0, width: menuExpanded ? '50vw' : 0}} onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                <button id='open-menu-btn' className={menuExpanded ? 'white-border' : ''}>
                    ME<br></br>NU
                </button>
                {
                    menuExpanded ? <div id='menu-content-wrapper'>
                        <ul id='menu-list'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/our-work'>About</NavLink></li>
                            <li><NavLink to='/services'>Design</NavLink></li>
                            <li><NavLink to='/gallery'>Gallery</NavLink></li>
                            <li><NavLink to='/contact'>Garden Maintenance</NavLink></li>
                            <li><NavLink to='/contact'>Learning Resources</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>

                        </ul>
                        <ul id='menu-social-list'>
                            <li>
                                <a href='http://www.apple.com'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                            </li>
                            <li>
                                <a href='http://www.apple.com'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                            </li>
                            <li>
                                <a href='http://www.apple.com'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                            </li>
                            <li>
                                <a href='http://www.apple.com'><FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon></a>
                            </li>
                        </ul>
                    </div> : <></>
                }
                </div>
            </nav>
        </header>
        
      );
    
}

export default Header
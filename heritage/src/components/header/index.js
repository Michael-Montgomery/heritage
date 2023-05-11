import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";

import './header.css'

function Header() {
    return (
        <header>
            <nav>
                <Link to="/"><img src="https://static.wixstatic.com/media/0526d4_88084aae6f2b4b7ebb250a128bc3d414~mv2.png/v1/fill/w_1422,h_394,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0526d4_88084aae6f2b4b7ebb250a128bc3d414~mv2.png" id="header-logo"></img></Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/gallery">Design</Link>
                <Link to="/gallery">Learning Resources</Link>
                <Link><button id="header-btn">Call us Now!</button></Link>
            </nav>
        </header>
        
      );
    
}

export default Header
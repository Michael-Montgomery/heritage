import React from "react";

import './whatwedo.css';

import { IconContext } from "react-icons";

import { GiOlive, GiFireFlower } from 'react-icons/gi';
import { SiAltiumdesigner } from 'react-icons/si';

import { RiOrganizationChart } from 'react-icons/ri'


function WhatWeDo() {
    return (
        <>

<IconContext.Provider value={{ color: "#B5BE32", className: "what-do-icons" , hoverColor: "red"}}>
                    
               



        <div id="what-do-wrapper">
        <h2>What We Do</h2>
        <ul id="what-do-list">
            <li>
                <div className="service-wrapper">
                    <div className="icon-wrapper">
                    <GiOlive></GiOlive>
                    </div>
                    <div className="service-content">
                        <a href="#">Installations</a>
                        <ul className="service-list">
                            <li>Flower Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Garden Restoration</li>
                            <li>Weeding, Pruning, and Maintenance</li>
                            <li>Flower Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Garden Restoration</li>
                            <li>Weeding, Pruning, and Maintenance</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div className="service-wrapper">
                    <div className="icon-wrapper">
                        <GiFireFlower></GiFireFlower>
                    </div>
                    <div className="service-content">
                        <a href="#">Outdoor Sanctuaries</a>
                        <ul className="service-list">
                            <li>Flower Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Garden Restoration</li>
                            <li>Weeding, Pruning, and Maintenance</li>
                            <li>Flower Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Garden Restoration</li>
                            <li>Weeding, Pruning, and Maintenance</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div className="service-wrapper">
                    <div className="icon-wrapper">
                    <SiAltiumdesigner></SiAltiumdesigner>
                    </div>
                    <div className="service-content">
                        <a href="#">Design</a>
                        <ul className="service-list">
                            <li>Flower Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Garden Restoration</li>
                            <li>Weeding, Pruning, and Maintenance</li>
                            <li>Flower Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Garden Restoration</li>
                            <li>Weeding, Pruning, and Maintenance</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div className="service-wrapper">
                    <div className="icon-wrapper">
                        <RiOrganizationChart></RiOrganizationChart>
                    </div>
                    <div className="service-content">
                        <a href="#">Management</a>
                        <ul className="service-list">
                            <li>Flower Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Garden Restoration</li>
                            <li>Weeding, Pruning, and Maintenance</li>
                            <li>Flower Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Garden Restoration</li>
                            <li>Weeding, Pruning, and Maintenance</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default WhatWeDo;
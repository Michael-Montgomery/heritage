import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

import "./carousel.css"


function ImageSlider() {

    const [url, setUrl] = useState('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')

    let imgIdx = 0;
    const images = [
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ];

    setInterval(() => {
        imgIdx ++;
        if(imgIdx >= images.length) {
            imgIdx = 0;
        }
        setUrl(images[imgIdx])
    }, 5000)

    return (
        <>
        <div id="carousel-div"></div>
        </>
    )
    
}

export default ImageSlider;
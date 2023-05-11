import React from 'react';
import Header from '../components/header';
import ImageSlider from '../components/carousel';
import Intro from '../components/intro';
import WhatWeDo from '../components/whatwedo';
import ContactForm from '../components/contact-form';
import Footer from '../components/footer';

document.title = "Wild Heritage Gardens";


function Home() {
  return (
    <>
    <Header></Header>
    <ImageSlider></ImageSlider>
    <Intro></Intro>
    <WhatWeDo></WhatWeDo>
    <div id='welcome-picture'></div>
    <ContactForm></ContactForm>
    <Footer></Footer>
    
    </>
  );
}

export default Home;
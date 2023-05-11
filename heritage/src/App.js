import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';

import Header from './components/header';
import ImageSlider from './components/carousel';
import Intro from './components/intro';
import WhatWeDo from './components/whatwedo';
import ContactForm from './components/contact-form';
import Footer from './components/footer';

import Home from "./pages/home";
import Gallery from "./pages/gallery";

function oldApp() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
  )
}

export default App;

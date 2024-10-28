import React from 'react';
import Header from '../../components/header/header';
import welcomeBgVid from '../../assets/bgvideo.mp4';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

document.title = "Wild Heritage Gardens";


function Home() {
  return (
    <>
    
      <div className='page-wrapper'>
        <div id='video-wrapper'>
          <Header></Header>
          <video autoPlay muted loop id='welcome-background-video' playsInline>
            <source src={welcomeBgVid} type="video/mp4" />
          </video>
        </div>
        <div id='intro-outer-wrapper'>
          <div id='intro-inner-wrapper'>
            <h2>Wild Heritage</h2>
            <p>We are a landscape company with a conscience. A company you can depend on. A company that treats you and our employees like family.


              We are the start of a revolution in an industry that has gone astray.



              Never a chemical: do no harm to any living creature. Creating thriving, outdoor sanctuaries.


              Wild Heritage Gardens and Design is dedicated to being on the cutting edge of natural land solutions. Working alongside leading environmental scientists and soil experts, as well as implementing permaculture practices.



              We work with respect for Mother Earth and utilizing ancient solutions to nurture her.


              We serve conscientious clients along the Front Range and strive to be the premier boutique landscaping and project management company in the area.</p>
          </div>
        </div>
        <h2>What We Do</h2>
        <div id='what-we-do-wrapper'>
          <div className='what-we-do-div'>
            <h3 className='what-we-do-icon'><FontAwesomeIcon icon={faPagelines}></FontAwesomeIcon></h3>
            <h3 className='what-we-do-title'>Maintenance & Installation</h3>
            <ul>
              <li>Flower Gardens</li>
              <li>Edible Gardens</li>
              <li>Garden Restoration</li>
              <li>Winter Watering</li>
              <li>Lawn Restoration</li>
              <li>Irrigation</li>
              <li>Drainage & Swales</li>
            </ul>
            
          </div>
          <div className='what-we-do-div'>
          <h3 className='what-we-do-icon'><FontAwesomeIcon icon={faPagelines}></FontAwesomeIcon></h3>
          <h3 className='what-we-do-title'>Outdoor sanctuaries</h3>
          <ul>
            <li>Gazebos, Pergolas and Pavilions</li>
            <li>Water Features & Ponds</li>
            <li>Patios & Pathways</li>
            <li>Retaining Walls</li>
            <li>Planters</li>
            <li>Rain Gardens</li>
            <li>Bird & Pollinator Gardens</li>
            <li>Wildlife & Pollinator Meadows</li>
          </ul>
          </div>
          <div className='what-we-do-div'>
          <h3 className='what-we-do-icon'><FontAwesomeIcon icon={faPagelines}></FontAwesomeIcon></h3>
          <h3 className='what-we-do-title'>Design</h3>
          <ul>
            <li>2D & 3D Designs</li>
            <li>Professional Design Specialists</li>
            <li>Create the property of your dreams</li>
            <li>Add year-round intrest and beauty</li>
            <li>Visualize exactly what your new outdoor space will look like</li>
          </ul>
          </div>
          <div className='what-we-do-div'>
          <h3 className='what-we-do-icon'><FontAwesomeIcon icon={faPagelines}></FontAwesomeIcon></h3>
          <h3 className='what-we-do-title'>Management</h3>
          <ul>
            <li>Outdoor festive decor & design</li>
            <li>Holiday lightting & decorating</li>
            <li>Vacation home watch</li>
            <li>Property & estate management</li>
            <li>Project management</li>
            <li>Water mitigation</li>
          </ul>
          </div>
        </div>
        <h2 id='first-label'>Featured Projects</h2>
        <div className='before-after-label-wrapper'><p>Before</p><p>After</p></div>
        <div className='before-after-picture-element'>
          <div className='before-after-picture-wrapper'>
            <div className='before-picture' style={{backgroundImage: 'url("https://images.pexels.com/photos/7283/garden.jpg?auto=compress&cs=tinysrgb&w=600")'}}></div>
            <div className='after-picture' style={{backgroundImage: 'url("https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></div>
          </div>
        </div>
        <div className='before-after-label-wrapper'><p>Before</p><p>After</p></div>
        <div className='before-after-picture-element'>
          <div className='before-after-picture-wrapper'>
            <div className='before-picture' style={{backgroundImage: 'url("https://images.pexels.com/photos/7283/garden.jpg?auto=compress&cs=tinysrgb&w=600")'}}></div>
            <div className='after-picture' style={{backgroundImage: 'url("https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></div>
          </div>
        </div>
        <div className='before-after-label-wrapper'><p>Before</p><p>After</p></div>
        <div className='before-after-picture-element'>
          <div className='before-after-picture-wrapper'>
            <div className='before-picture' style={{backgroundImage: 'url("https://images.pexels.com/photos/7283/garden.jpg?auto=compress&cs=tinysrgb&w=600")'}}></div>
            <div className='after-picture' style={{backgroundImage: 'url("https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></div>
          </div>
        </div>
        <div id='consult-wrapper'>
          <a href='http://www.google.com'>Schedule a Consultation</a>
        </div>
      </div>
    </>
  );
}

export default Home;
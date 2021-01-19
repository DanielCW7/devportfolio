import React, { Component } from 'react';
import Grass from '../images/grass.jpg';
import PC from '../images/pc.jpg';
import Lights from '../images/light2.jpg';
import PC2 from '../images/pc3.jpg';
import Sky from '../images/sky.jpg'
import { Link } from 'react-router-dom';


class Home extends Component {
    
    render() {
    return (
        <div>
          <div>
            <div id='header'>
              <img src={Lights} alt='header'/>
              <div id='headerText' className='center'>
                      <h1 style={{ color: 'white' }}> Welcome to my portfolio page! </h1>
                      <p> My name is Connor Wilson and I'm a front-end web developer looking for my next big challenge! </p>
              </div>
            </div>
          </div>
        <div id='homeGridContainer'>
        <div id='homeGrid'>
          <Link to='/Project' style={{ textDecoration: 'none' }}><section id='projectHome' className='homeLeftCard'>
            <h1> Projects </h1>
            <p> Here you can see some of my most notable projects. </p>
            <img src={PC} alt='projects'/>
            <div id='projectHomeText'>  Here you can see some of my most notable projects.  </div>
          </section></Link>
          

          <Link to='/Gallery' style={{ textDecoration: 'none' }}><section id='galleryHome' className='homeRightCard'>
            <h1> Gallery </h1>
            <p> Learn more about me by seeing what I love to spend my time doing when i'm not coding! </p>
            <div id='galleryHomeText'> Learn more about me by seeing what I love to spend my time doing when i'm not coding! </div>
            <img src={Grass} alt='gallery'/>
          </section></Link>


          <Link to='/Contact' style={{ textDecoration: 'none' }}><section id='contactHome' className='homeLeftCard'>
            <h1> Contact </h1>
            <p> Download my resume and view my contact information here. </p>
            <img src={PC2} alt=''/>
            <div id='contactHomeText'>  Download my resume and view my contact information here.  </div>
          </section></Link>


          <section id='aboutHomeLG'>
            <img src={Sky} alt='about'/>
            <div id='aboutText'>
              <h1 style={{ color: 'white' }}> About </h1>
              <p>
                 I graduated from Middle Tennessee State University with a degree in concrete construction. I started teaching myself to code in late 2019, later enrolling into Treehouse's Front-End web developer techdegree,
                 and finishing in 7 months. They taught me a lot about responsive web design, D.R.Y. coding principles, best practices, etc. Since then, I've built several useful applications like
                 calculators, portfolio pages, and even a simple game!
              </p>
            </div>
          </section>

        </div>
          <section id='aboutHome'>
            <img src={Sky} alt='about'/>
            <div id='aboutText'>
              <h1> About </h1>
              <p> I graduated Middle Tennessee State University with a degree in concrete construction. I started teaching myself to code in late 2019, later enrolled into Treehouse's Front-End web developer techdegree,
                 and finishing in 7 months. They taught me a lot about responsive web design, D.R.Y. coding principles, best practices, etc. Since then, I've built several useful applications like
                 calculators, portfolio pages, and even a simple game! </p>
            </div>
          </section>
          </div>
      </div>
      )
   } 
}

export default Home

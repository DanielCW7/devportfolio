import React, { Component } from 'react';
import Grass from '../images/grass.jpg';
import PC from '../images/pc.jpg';
import Lights from '../images/light2.jpg';
import PC2 from '../images/pc3.jpg';
import Sky from '../images/sky.jpg';
import Resume from '../resume.pdf';
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
            {/* <div id='projectHomeText'>  Here you can see some of my most notable projects.  </div> */}
          </section></Link>
          

          <Link to='/Gallery' style={{ textDecoration: 'none' }}><section id='galleryHome' className='homeRightCard'>
            <h1> Gallery </h1>
            <p> Learn more about me by seeing what I love to spend my time doing when i'm not coding! </p>
            {/* <div id='galleryHomeText'> Learn more about me by seeing what I love to spend my time doing when i'm not coding! </div> */}
            <img src={Grass} alt='gallery'/>
          </section></Link>


          <section id='contactHome'>
            {/* <div id='contactSection'> */}
              <div id='resume'>
                <a href={Resume} target='_blank' rel="noreferrer" onMouseOver={{cursor : 'pointer'}}><span className='decoration' id='downloadIcn'>&#x2913;</span></a>
                <p>Preview and download my  resume </p>
              </div>

              <div id='email'>
                <span className='decoration' id='mailIcn'>&#x2709;</span>
                <p> Dev.danielcw@gmail.com </p>
              </div>

              <div id='phoneNum'>
                <span className='decoration' id='phoneIcn'>&#x260E;</span>
                <p> (615) 796-4896 </p>
              </div> 
            {/* </div> */}
            <img src={PC2} alt=''/>
              <a href='https://www.facebook.com/connor.wilson.359'><div className='contactItem center' id='facebook'> 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 -20 172 172" style={{transform: 'translateY(-5%)'}}>
                    <g transform="">
                      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                        <path d="M0,172v-172h172v172z" fill="none"></path><path d="" fill="none"></path>
                        <g>
                        <path d="M86,17.91667c-37.60139,0 -68.08333,30.48195 -68.08333,68.08333c0,37.60139 30.48195,68.08333 68.08333,68.08333c37.60139,0 68.08333,-30.48195 68.08333,-68.08333c0,-37.60139 -30.48195,-68.08333 -68.08333,-68.08333z" fill="#039be5"></path>
                        <path d="M95.21633,104.04567h17.61925l2.76633,-17.89875h-20.38917v-9.7825c0,-7.43542 2.4295,-14.02875 9.38475,-14.02875h11.17642v-15.61975c-1.96367,-0.26517 -6.11675,-0.84567 -13.96425,-0.84567c-16.38658,0 -25.9935,8.65375 -25.9935,28.36925v11.90742h-16.84525v17.89875h16.84525v49.19558c3.33608,0.50167 6.71517,0.84208 10.18383,0.84208c3.13542,0 6.19558,-0.28667 9.21633,-0.69517z" fill="#ffffff"></path>
                      </g>
                    </g>
                  </g>
                </svg> 
              </div></a>


            <a href='https://github.com/DanielCW7'><div className='contactItem center' id='github'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 -26 172 172">
              <g transform="">
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <path d="" fill="none"></path><path d="" fill="none"></path>
                  <path d="" fill="none"></path><path d="" fill="none"></path>
                  <path d="" fill="none"></path><path d="" fill="none"></path>
                  <g fill="#ffffff">
                    <path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,32.23853 22.19947,59.21387 52.12747,66.67867c-0.32107,-0.9288 -0.52747,-2.00667 -0.52747,-3.34253v-11.75907c-2.79213,0 -7.47053,0 -8.64587,0c-4.70707,0 -8.8924,-2.02387 -10.922,-5.78493c-2.2532,-4.1796 -2.64307,-10.57227 -8.22733,-14.4824c-1.65693,-1.30147 -0.3956,-2.7864 1.5136,-2.58573c3.526,0.9976 6.45,3.41707 9.202,7.00613c2.74053,3.5948 4.03053,4.40893 9.1504,4.40893c2.48253,0 6.19773,-0.14333 9.69507,-0.69373c1.88053,-4.77587 5.13133,-9.17333 9.10453,-11.2488c-22.9104,-2.3564 -33.84387,-13.75427 -33.84387,-29.22853c0,-6.66213 2.838,-13.1064 7.65973,-18.53587c-1.5824,-5.38933 -3.57187,-16.38013 0.60773,-20.56547c10.30853,0 16.54067,6.68507 18.03707,8.49107c5.13707,-1.76013 10.77867,-2.75773 16.70693,-2.75773c5.93973,0 11.60427,0.9976 16.7528,2.7692c1.4792,-1.79453 7.71707,-8.50253 18.04853,-8.50253c4.1968,4.19107 2.1844,15.22773 0.5848,20.6056c4.79307,5.418 7.61387,11.84507 7.61387,18.49573c0,15.4628 -10.91627,26.85493 -33.79227,29.2228c6.2952,3.2852 10.8876,12.51587 10.8876,19.4704v15.67493c0,0.59627 -0.13187,1.02627 -0.20067,1.53653c26.80907,-9.39693 46.06733,-34.85293 46.06733,-64.87267c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z">
                      </path></g></g></g></svg>
            </div></a>


            <a href='https://www.linkedin.com/in/daniel-wilson-a67706177/'><div className='contactItem center' id='linkedin'>   
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="37 35 172 172">
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                    <path d="M64.844,111.8c-2.56481,0 -4.644,-2.07919 -4.644,-4.644v-42.312c0,-2.56481 2.07919,-4.644 4.644,-4.644h42.312c2.56481,0 4.644,2.07919 4.644,4.644v42.312c0,2.56481 -2.07919,4.644 -4.644,4.644z" fill="white"></path>
                      <g fill="#3498db">
                      <path d="M114.09557,51.6h-56.19114c-3.43776,0 -6.30443,2.86667 -6.30443,6.30443v56.19114c0,3.43776 2.86667,6.30443 6.30443,6.30443h56.19114c3.43776,0 6.30443,-2.86667 6.30443,-6.30443v-56.19114c0,-3.43776 -2.86667,-6.30443 -6.30443,-6.30443zM71.66667,108.93333h-11.46667v-31.53333h11.46667zM65.93333,73.67109c-3.43776,0 -5.73333,-2.29557 -5.73333,-5.16224c0,-3.14662 2.29557,-5.44219 5.73333,-5.44219c3.43776,0 5.73333,2.29557 5.73333,5.16224c0,3.14662 -2.29557,5.44219 -5.73333,5.44219zM111.8,108.93333h-11.46667v-17.2c0,-4.59114 -3.15781,-5.73333 -4.00885,-5.73333c-0.86224,0 -4.59115,0.57109 -4.59115,5.73333c0,0.57109 0,17.2 0,17.2h-11.46667v-31.53333h11.46667v4.59115c1.72448,-2.58672 4.59115,-4.59115 10.03333,-4.59115c5.44219,0 10.03333,4.3 10.03333,14.33333z">
                      </path>
                  </g>
                </g>
              </svg>
            </div>
          </a>
      <br></br>
      <br></br>

          </section>


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

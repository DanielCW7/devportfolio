import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super()
        this.expand = this.expand.bind(this);
        this.minimize = this.minimize.bind(this);
        // this.sticky = this.sticky.bind(this);
    }

    // componentDidMount() {
    //   window.addEventListener('scroll', this.sticky)
    // }

  //   sticky() {
  //   const element = document.getElementById('mapIcn');
  //   const icon = element.offsetTop;
  //   // console.log(icon, window.pageYOffset) 

  //   if (window.pageYOffset >= icon && window.pageYOffset >= 30) {
  //     element.classList.add('sticky');
  //     element.classList.remove('centered')
  //   } else {
  //     element.classList.remove('sticky')
  //     element.classList.add('centered')
  //   } 
  // }

    expand() {
       let i = document.getElementById('expandedNav')
       i.style.display = 'block';
    }

    minimize() {
       let i = document.getElementById('expandedNav')
       i.style.display = 'none'; 
    }

    render() {
      

        return (
            <div>
                <Link to='/Home'><div id='titleName'>
                    <h2> Connor Wilson </h2>
                    <h4 className='pullUp'> WEB DEV </h4>
                </div></Link>
                <div id='navIconBackground' onClick={this.expand}>
                  <div id='mobileNavIcon'>
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1366 768" enableBackground="new 0 0 1366 768">
                          <g>
                              <path fill="white" d="M82.5,165.5c-45.21,0-82-36.79-82-82s36.79-82,82-82h1200c45.21,0,82,36.79,82,82s-36.79,82-82,82H82.5z"/>
                              <path d="M1282.5,2c44.94,0,81.5,36.56,81.5,81.5s-36.56,81.5-81.5,81.5H82.5C37.56,165,1,128.44,1,83.5S37.56,2,82.5,2H1282.5
                                  M1282.5,1H82.5C36.94,1,0,37.94,0,83.5S36.94,166,82.5,166h1200c45.56,0,82.5-36.94,82.5-82.5S1328.06,1,1282.5,1L1282.5,1z"/>
                          </g>
                          <g>
                              <path fill="white" d="M83,466.5c-45.21,0-82-36.79-82-82s36.79-82,82-82h1200c45.21,0,82,36.79,82,82s-36.79,82-82,82H83z"/>
                              <path d="M1283,303c44.94,0,81.5,36.56,81.5,81.5c0,44.94-36.56,81.5-81.5,81.5H83c-44.94,0-81.5-36.56-81.5-81.5
                                  C1.5,339.56,38.06,303,83,303H1283 M1283,302H83c-45.56,0-82.5,36.94-82.5,82.5v0C0.5,430.06,37.44,467,83,467h1200
                                  c45.56,0,82.5-36.94,82.5-82.5v0C1365.5,338.94,1328.56,302,1283,302L1283,302z"/>
                          </g>
                          <g>
                              <path fill="white" d="M83.5,767.5c-45.21,0-82-36.79-82-82s36.79-82,82-82h1200c45.21,0,82,36.79,82,82s-36.79,82-82,82H83.5z"/>
                              <path d="M1283.5,604c44.94,0,81.5,36.56,81.5,81.5s-36.56,81.5-81.5,81.5H83.5C38.56,767,2,730.44,2,685.5S38.56,604,83.5,604
                                  H1283.5 M1283.5,603H83.5C37.94,603,1,639.94,1,685.5S37.94,768,83.5,768h1200c45.56,0,82.5-36.94,82.5-82.5
                                  S1329.06,603,1283.5,603L1283.5,603z"/>
                          </g>
                      </svg>
                  </div>
                </div>

                {/* <div id='mapIcn' className='centered' onClick={this.expand} onScroll={this.sticky}> */}
                <div>
                  <ul id='navLG'>
                    <Link to ='/Home' style={{ textDecoration: 'none' }}><li> Home </li></Link>
                    <Link to='/Project' style={{ textDecoration: 'none' }}><li> Projects </li></Link>
                    <Link to='/Gallery' style={{ textDecoration: 'none' }}><li> Gallery </li></Link>
                  </ul>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M86,14.33333c-27.70633,0 -50.16667,22.46033 -50.16667,50.16667c0,28.423 31.562,70.37667 44.61967,86.50883c2.86667,3.54033 8.22733,3.54033 11.094,0c13.05767,-16.13217 44.61967,-58.08583 44.61967,-86.50883c0,-27.70633 -22.46033,-50.16667 -50.16667,-50.16667zM86,82.41667c-9.89717,0 -17.91667,-8.0195 -17.91667,-17.91667c0,-9.89717 8.0195,-17.91667 17.91667,-17.91667c9.89717,0 17.91667,8.0195 17.91667,17.91667c0,9.89717 -8.0195,17.91667 -17.91667,17.91667z">
                </path></g></g></svg> */}
                </div>

                <div id='expandedNav'>
                    <div id='mobileBackground'>
                        <Link to='/Home' id='homeNav' onClick={this.minimize}><h2> Home </h2></Link>
                        <Link to='/Project' id='projectNav' onClick={this.minimize}><h2> Projects </h2></Link>
                        <Link to='/Gallery' id='galleryNav' onClick={this.minimize}><h2> Gallery </h2></Link>
                        <h2 id='navX' onClick={this.minimize}> X </h2>
                    </div>
                </div>
             </div>
        )
    }
}

export default Nav

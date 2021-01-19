import React from 'react';
import Desk2 from '../images/desk2.jpg';

function Resume() {
  return (
    <div>
      <div id='header'>
        <img src={Desk2} alt=''/>
        <div className='headerText' className='center slideUp'>
            <h1> Resume </h1>
            <p> Preview or download my work resume. </p>
        </div>
      </div>
      
      
      <div className='homeLeftCard'>
      <img src="https://img.icons8.com/ios/96/000000/open-document.png"/>
      <a href="https://icons8.com/icon/56079/open-document">Open Document icon by Icons8</a>
      </div>
      
    </div>
  )
}

export default Resume

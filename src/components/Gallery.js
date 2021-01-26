import React, { Component } from 'react';
import Light from '../images/light.jpg';
import photos from './PhotoList';

class Gallery extends Component {
  constructor() {
    super()
    this.state = {photos}
    this.expand = this.expand.bind(this);
    this.minimize = this.minimize.bind(this);
    this.right = this.right.bind(this);
    this.left = this.left.bind(this);
  }
  
  left(e) {
    const previous = e.target.parentElement.previousElementSibling;
    const current = e.target.offsetParent;
    const btn = e.target.previousSibling;

    if(previous === null) {
      return
    } else {
    const neighborBtn = e.target.parentElement.previousElementSibling.firstChild.nextElementSibling;
      current.classList.remove('expandedPhoto');
      current.classList.add('photo');
      previous.classList.remove('photo');
      previous.classList.add('expandedPhoto');
      btn.style.display = 'none';
      neighborBtn.style.display ='block';
      return
    }
  }

  right(e) {
    const next = e.target.parentElement.nextElementSibling;
    const current = e.target.offsetParent;
    const btn = e.target.previousSibling.previousSibling;
    if(next === null) {
      return
    } else {
    const neighborBtn = e.target.parentElement.nextElementSibling.firstChild.nextElementSibling;
      current.classList.remove('expandedPhoto');
      current.classList.add('photo');
      next.classList.remove('photo');
      next.classList.add('expandedPhoto');
      btn.style.display = 'none';
      neighborBtn.style.display ='block';
      return
    }
  }

  expand(e) {
    const expand = e.target.offsetParent;
    const x = e.target.nextSibling;
    expand.classList.remove('photo');
    expand.classList.add('expandedPhoto');
    x.style.display = 'block';  
  }

  minimize(e) {
    const expand = e.target.offsetParent;
    const x = e.target;
    x.style.display = 'none';
    expand.classList.remove('expandedPhoto');
    expand.classList.add('photo');
   }

  render() {

    const land = this.state.photos.map((photo) => { 
      if (photo.hasOwnProperty('land') === true) { 
        return <div className='photo'><img src={photo.land} key={photo.land} alt={photo.alt} onClick={this.expand}/>
        <h2 className='photoX' onClick={this.minimize} style={{display: 'none'}}> X </h2>
        <span className='leftArrow' onClick={this.left}>&#x27F5;</span>
        <span className='rightArrow' onClick={this.right}>&#x27F6;</span>
        </div> 
      } else { return null } });

    const drawing = this.state.photos.map((photo) => { 
      if (photo.hasOwnProperty('drawing') === true) { 
        return <div  className='photo'><img src={photo.drawing} key={photo.drawing} alt={photo.alt} onClick={this.expand}/>
        <h2 className='photoX' onClick={this.minimize} style={{display: 'none'}}> X </h2>
        <span className='leftArrow' onClick={this.left}>&#x27F5;</span>
        <span className='rightArrow' onClick={this.right}>&#x27F6;</span>
        </div> 
      } else { return null } });
    
    const animals = this.state.photos.map((photo) => { 
      if (photo.hasOwnProperty('animal') === true) { 
        return <div className='photo'><img src={photo.animal} key={photo.animal} alt={photo.alt} onClick={this.expand}/>
        <h2 className='photoX' onClick={this.minimize} style={{display: 'none'}}> X </h2>
        <span className='leftArrow' onClick={this.left}>&#x27F5;</span>
        <span className='rightArrow' onClick={this.right}>&#x27F6;</span>
        </div> 
      } else { return null } })

    return (
      <div>
        <div id='header'>
          <img src={Light} alt='' />
          <div id='headerText' className='center'>
              <h1 style={{ color: 'white' }}> Gallery </h1>
              <p> Welcome to the gallery! All art and pictures taken were done by me. Life is short, so why not capture every moment? </p>
          </div>
        </div>

          <div className='photoGrid'> {land} {drawing} {animals} </div>
        

      </div>
    )
  }
}
 
export default Gallery

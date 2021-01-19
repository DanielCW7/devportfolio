import React, { Component } from 'react';
import Light from '../images/light.jpg';
import photos from './PhotoList';

class Gallery extends Component {
  constructor() {
    super()
    this.state = {photos}
    this.selection = this.selection.bind(this);
    this.expand = this.expand.bind(this);
    this.minimize = this.minimize.bind(this);
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

  selection(e) {
    const radio = e.target.id;
    const land = document.getElementById('land');
    const drawing = document.getElementById('drawing');
    const animals = document.getElementById('animals');

    if (radio === 'drawingLabel') {
      drawing.style.display = '';
      land.style.display = 'none';
      animals.style.display = 'none';
    }
    else if(radio === 'landLabel') {
      land.style.display = '';
      drawing.style.display = 'none';
      animals.style.display = 'none';
    }
    else if (radio === 'animalsLabel') {
      animals.style.display = '';
      drawing.style.display = 'none';
      land.style.display = 'none';
    }
    else if (radio === 'all') {
      drawing.style.display = '';
      land.style.display = '';
      animals.style.display = '';
    } else { return null }
  }

  render() {
    const land = this.state.photos.map((photo) => { 
      if (photo.hasOwnProperty('land') === true) { 
        return <div className='photo'><img src={photo.land} key={photo.land} alt={photo.alt} onClick={this.expand}/><h2 className='photoX' onClick={this.minimize} style={{display: 'none'}}> X </h2></div> 
      } else { return null } });

    const drawing = this.state.photos.map((photo) => { 
      if (photo.hasOwnProperty('drawing') === true) { 
        return <div  className='photo'><img src={photo.drawing} key={photo.drawing} alt={photo.alt} onClick={this.expand}/><h2 className='photoX' onClick={this.minimize} style={{display: 'none'}}> X </h2></div> 
      } else { return null } });
    
    const animals = this.state.photos.map((photo) => { 
      if (photo.hasOwnProperty('animal') === true) { 
        return <div className='photo'><img src={photo.animal} key={photo.animal} alt={photo.alt} onClick={this.expand}/><h2 className='photoX' onClick={this.minimize} style={{display: 'none'}}> X </h2></div> 
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
        
        <div id='radioBtns'>
          <input type='radio' id='all' name='photo' htmlFor='all' value='all' onChange={this.selection}/><label htmlFor='all'> All </label>
          <input type='radio' id='landLabel' name='photo' htmlFor='land' value='land' onChange={this.selection}/><label htmlFor='landLabel'> Landscapes </label>
          <input type='radio' id='drawingLabel' name='photo' htmlFor='drawing' value='drawing' onChange={this.selection}/><label htmlFor='drawingLabel'> Art </label>
          <input type='radio' id='animalsLabel' name='photo' htmlFor='animals' value='animals' onChange={this.selection}/><label htmlFor='animalsLabel'> Animals </label>
        </div>
        
        <div className='photoGrid' id='land'> {land} </div>
        <div className='photoGrid' id='drawing'> {drawing} </div>
        <div className='photoGrid' id='animals'> {animals} </div>

      </div>
    )
  }
}
 
export default Gallery

import React, { Component } from 'react';
import Project from './Project';
import Desk3 from '../images/desk3.jpg';
import projects from './Projects';


class ProjectList extends Component {

  constructor() {
    super()
    this.state = {projects}
      
  }

  render() {
    const project = this.state.projects.map((item) => {
      return <Project name={item.name} desc={item.desc} image={item.image} demoLink={item.demoLink} codeLink={item.codeLink} attr={item.attr} key={item.name}/>
    })
    return (
      <div>
        <div id='header' style={{ marginBottom: '20px' }}>
              <img src={Desk3} alt=''/>
              <div id='headerText' className='center'>
                  <h1 style={{ color: 'white' }}> Projects </h1>
                  <p> Here you'll find a collection of some of my favorite projects. </p>
              </div>
          </div>

      <div className='projectCardContainer'>
        {project}
      </div>
      <br></br>
      </div>
    )
  }
}

export default ProjectList

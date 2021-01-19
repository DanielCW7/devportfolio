import React from 'react'

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.expand = this.expand.bind(this);
    this.minimize = this.minimize.bind(this);
  }

  expand(e) {
     let expand = e.target.nextElementSibling;
     expand.classList.remove('collapsedProject');
     expand.classList.add('expandedProject');
  }

  minimize(e) {
    let button = e.target.offsetParent; 
    button.classList.remove('expandedProject');
    button.classList.add('collapsedProject');
  }

  render() {
    const attributes = this.props.attr.map((e) => {
      return <div className='attributes' key={e.item}> {e.item} </div>
    })
    
    return (
    <div className='center'>

      <h2> {this.props.name} </h2>
      <div className='projectCard'><img src={this.props.image} alt={this.props.name}/></div>
      <button onClick={this.expand} className='projectExpandBtn'> Info </button>
      
      <div className='collapsedProject'>
          <img className='collapsedProjectImage' src={this.props.image} alt={this.props.name}/>
          <h1> {this.props.name} </h1>
          <div className='attrContainer'><div> {attributes} </div></div>
          <div className='projectDesc'> {this.props.desc} </div>

          <div className='buttonContainer'>
            <a href={this.props.demoLink}><button className='demoBtn'> Demo </button></a>
            <button onClick={this.minimize}> &#x2613; </button>
            <a href={this.props.codeLink}><button className='srcBtn'> Source </button></a>
          </div>
      </div>

    </div>
  )
}
}

export default Project

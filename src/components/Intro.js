import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Intro extends Component {
    constructor() {
        super()
        this.remove = this.remove.bind(this)
    }

    remove() {
        const container = document.getElementById('introContainer')
        container.style.display = 'none'
    }

    render() {
        return (
            <div className='center'>
                <div id='introContainer'>

                    <div id='animContainer'>
                        <div id='introName'> 
                            <h1> Connor Wilson </h1>
                            <h4> WEB DEVELOPER </h4>
                        </div>
       <Link to='/Home'><div id='square1'></div>
                        <div id='square2'></div>
                        <div id='square3'></div>
                        <button id='introButton'> ENTER </button></Link>
                    </div>
               
                    <div id='backgroundStyle1'></div>
                    <div id='backgroundStyle2'></div>

                </div>
            </div>
        )
    }
}

export default Intro

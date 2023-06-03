import React, { Component } from 'react'
import Timer from '../timer/Timer'
import "./spotlight.css"
import enigmax from "../../assets/ENIGMAX.svg" 
import arrow from "../../assets/Arrow.jpg" 
import Navbar from '../navbar/Navbar'


export default class Spotlight extends Component {
  render() {
    return (
      <div id="spotlight" className="spotlight">
        <Navbar/>
        <div className="sec1">
          <h2 className='desktop'>PMI Student Chapter from<br/>Christ College of Engineering presents</h2>
          <h2 className='mobile'>PMI CCE Presents</h2>
            <img className='enigmax' src={enigmax}/>
            <h2 style={{color:"orange"}}>Unveiling Engineering and Management Excellence</h2>
            <h2 style={{color:"aqua"}}>09 June 2023, at Christ College of Engineering</h2>
        </div>
        <Timer/>
        <a href="#about" >
          <div className='arrowdiv'>
              <img className='arrow' src={arrow}/>
          </div>
        </a>

      </div>
    )
  }
}

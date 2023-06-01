import React, { Component } from 'react'
import Timer from '../timer/Timer'
import "./spotlight.css"
import enigmax from "../../assets/ENIGMAX.svg" 
import arrow from "../../assets/Arrow.jpg" 


export default class Spotlight extends Component {
  render() {
    return (
      <div className="spotlight">
        <div className="sec1">
          <h2 className='desktop'>PMI Student Chapter from<br/>Christ College of Engineering presents</h2>
          <h2 className='mobile'>PMI CCE Presents</h2>
            <img className='' src={enigmax}/>
            <h2>South India's first management fest at an engineering college</h2>
            <h2>09 June 2023, at Christ College of Engineering</h2>
        </div>
        <Timer/>
        <a href="#about">
          <img className='arrow' src={arrow}/>
        </a>
      </div>
    )
  }
}

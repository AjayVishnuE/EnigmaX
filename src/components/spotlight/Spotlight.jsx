import React, { Component } from 'react'
import Timer from '../timer/Timer'
import "./spotlight.css"

export default class Spotlight extends Component {
  render() {
    return (
      <div class="spotlight">
        <div class="sec1">
            <h1>
              EnigmaX
            </h1>
            <h2>South India's first management fest at an engineering college</h2>
            <h2>09 June 2023, at Christ College of Engineering</h2>
        </div>
        <Timer/>
      </div>
    )
  }
}

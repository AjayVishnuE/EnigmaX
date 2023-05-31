import React, { Component } from 'react'
import Timer from '../timer/Timer'
import "./spotlight.css"

export default class Spotlight extends Component {
  render() {
    return (
      <div class="spotlight">
        <div class="sec1">
            <div>
                <img src="{}" alt="EnigmatiX Logo"/>
            </div>
            <div></div>
        </div>
        <Timer/>
      </div>
    )
  }
}

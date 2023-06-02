import React, { Component } from 'react'
import "./about.css"
import Communitypartners from '../communitypartners/Communitypartners'
import enigma from "../../assets/aboutusenigma.svg"

export default class About extends Component {
  render() {
    return (
      <div id="about" className="about">
        <h1 style={{textAlign:"center",}}>About EnigmaX</h1>
        <div className="container">
            <div className="imgdiv">
                <img className="enigmax" src={enigma}/>
            </div>
            <div className="textdiv">
                <p>Unraveling engineering and management excellence requires a holistic approach that combines technical expertise, effective leadership, strategic planning, and continuous improvement. Here we create an environment where innovation thrives, teams collaborate effectively, and success is consistently achieved. By fostering engineering and management excellence, students position themselves for long-term growth and competitiveness in a rapidly evolving global landscape.</p>
            </div>
            
        </div>
        <Communitypartners/>
      </div>
    )
  }
}

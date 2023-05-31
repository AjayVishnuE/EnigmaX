import React, { Component } from 'react'
import "./navbar.css"
import pmilogo from "../../assets/pmi-logo-nobg.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="">
          <img src={pmilogo} alt='pmi-logo'/>
        </a>
        <a style={{textDecoration:"none", color:"black", cursor:"pointer"}} href="">
          <p>Meet Our Team</p>
        </a>
      </div>
    )
  }
}

import React, { Component } from 'react'
import "./navbar.css"
import pmilogo from "../../assets/pmi-logo-nobg.svg";

const Navbar = () => {
    return (
      <div className="nav">
      <input type="checkbox" id="nav-check"/>
      <div className="nav-header">
        <div className="nav-title">
          <a href="">
            <img className="nav-logo-desktop" src={pmilogo}/>
          </a>
        </div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <a href="#spotlight">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="https://forms.gle/4RB5MMRLXBa8GukQ6" target='_blank'>Register</a>
      </div>
    </div>
    )
}

export default Navbar


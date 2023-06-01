import React, { Component } from 'react'
import "./navbar.css"
import { Gototop } from '../../components';
import pmilogo from "../../assets/pmi-logo-nobg.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="navbar">
        <a href="">
          <img src={pmilogo} alt='pmi-logo'/>
        </a>
        <a href="" style={{textDecoration:"none", color:"black", cursor:"pointer"}} > 
            <p>Meet Our Team</p>
        </a>
      </div>
    )
}

export default Navbar


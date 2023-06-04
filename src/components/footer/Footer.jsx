import React, { Component } from 'react'
import "./footer.css";
import logodesk from '../../assets/pmitwhitelogo.png';
import instagram from '../../assets/logo-instagram.svg';
import linkedin from '../../assets/logo-linkedin.svg';
import gmail from '../../assets/logo-gmail.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
      <div className='footer'>
        <div className="footer-left">
          <img className="footer-left-img" src={logodesk}/>
        </div>
        <div className="footer-center">

        </div>
        <div className="footer-right">
          <div className="footer-right-imgs">
            <a href="https://www.linkedin.com/in/pmi-student-chapter-cce-712317279/" target="_blank">
              <img style={{height:"25px", width:"25px"}} src={linkedin} alt=""/>
            </a>
            <a href="mailto:pmi.christ@cce.edu.in" target="_blank">
              <img style={{height:"25px", width:"25px"}} src={gmail} alt=""/>
            </a>
            <a href="https://www.instagram.com/pmi_cce/" target="_blank">
              <img style={{height:"25px", width:"25px"}} src={instagram} alt=""/> 
            </a>
          </div>
          <a style={{color: 'white', fontWeight:"semibold", fontSize:"large"}} href="cce.edu.in">cce.edu.in</a>
        </div>
      </div>
      <p style={{color: 'white', textAlign:"center", fontSize:"small", paddingBottom:"5px"}}>Copyright © PMI CCE 2023. All Rights Reserved.</p>
    </div>
    )
  }
}

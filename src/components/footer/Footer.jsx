import React, { Component } from 'react'
import "./footer.css";
import logodesk from '../../assets/pmi-logo-nobg.svg';
import instagram from '../../assets/logo-instagram.svg';
import linkedin from '../../assets/logo-linkedin.svg';
import facebook from '../../assets/logo-facebook.svg';

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
            <a href="https://www.instagram.com/pmi_cce/" target="_blank">
              <img src={instagram} alt=""/> 
            </a>
            <a href="https://www.linkedin.com/in/pmi-student-chapter-cce-712317279/" target="_blank">
              <img src={linkedin} alt=""/>
            </a>
            <a href="mail:pmi@cce.edu.in" target="_blank">
              <img src={facebook} alt=""/>
            </a>
          </div>
          <a style={{color: '#183883', fontWeight:"semibold", fontSize:"large"}} href="cce.edu.in">cce.edu.in</a>
        </div>
      </div>
      <p style={{textAlign:"center", fontSize:"small", padding: 10}}>Copyright © PMI CCE 2023. All Rights Reserved.</p>
    </div>
    )
  }
}

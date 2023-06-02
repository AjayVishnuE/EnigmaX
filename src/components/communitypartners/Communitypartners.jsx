import React, { Component } from 'react'
import "./communitypartners.css"
import ccelogo from "../../assets/christlogo.svg";
import pmikerala from "../../assets/pmikeralawhitelogo.svg"
import pmicce from "../../assets/pmiccewhitelogo.svg"
import ieeelogo from "../../assets/ieeelogo.svg"



export default class Communitypartners extends Component {
  render() {
    return (
      <div>
        <h1>Community Partners</h1>
        <div class="containers">
            <img className='ccelogo' src={ccelogo} alt="" />
            <img className='ieeelogo' src={ieeelogo} alt="" />
            <img className='pmiccelogo' src={pmicce} alt="" />
            <img className='pmikerlogo' src={pmikerala} alt="" />
        </div>
      </div>
    )
  }
}

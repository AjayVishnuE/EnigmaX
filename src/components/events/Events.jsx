import React, { Component } from 'react'
import "./events.css"
import Event1 from "../../assets/Event1.jpg"
import Event2 from "../../assets/Event2.jpg"
import Event3 from "../../assets/Event3.jpg"
import Event4 from "../../assets/Event4.jpg"
import Eventdet1 from "../../assets/eventdet1.jpg"
import Eventdet2 from "../../assets/eventdet2.jpg"
import Eventdet3 from "../../assets/eventdet3.jpg"
import Eventdet4 from "../../assets/eventdet4.jpg"
import Footer from '../footer/Footer'




const Events_enigmax = [
  {
      img:Event1,
      name:'Marketing Maverick',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      imgdet:Eventdet1
  },
  {
      img:Event2,
      name:'Financial Fusion',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      imgdet:Eventdet2
  },
  {
    img:Event3,
    name:'HR Hive',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
    imgdet:Eventdet3
  },
  {
      img:Event4,
      name:'Management Maestro',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      imgdet:Eventdet4
  }
]

const Events = () => {
    return (
      <div id="events" className="events">
        <h1 style={{ textAlign:"center", margin:"0"}}>Events at EnigmaX</h1>
        <div className="event-div-container">
        {
          Events_enigmax.map((item) => {
              return(
                  <div className="event-div">
                      <img className="event-img" src={item.img} alt=""/>
                      <h3>{item.name}</h3>
                      <button className='button' onClick={""}>Read more</button>
                  </div>
              )
          })
        }
        </div>
        <a href="https://forms.gle/4RB5MMRLXBa8GukQ6" target='_blank'>
          <div className='register-button'> 
              <p>REGISTER FOR THE EVENTS</p>
          </div>
        </a>
      </div>
    )
}


export default Events

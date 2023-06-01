import React, { Component } from 'react'
import "./events.css"
import Event1 from "../../assets/Event1.jpg"
import Event2 from "../../assets/Event2.jpg"
import Event3 from "../../assets/Event3.jpg"
import Event4 from "../../assets/Event4.jpg"


const Events_enigmax = [
  {
      img:Event1,
      name:'Marketing Maverick',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      text:'Faculty-in-charge'
  },
  {
      img:Event2,
      name:'Financial Fusion',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      text:'Faculty-in-charge'
  },
  {
    img:Event3,
    name:'HR Hive',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
    text:'Faculty-in-charge'
  },
  {
      img:Event4,
      name:'Management Maestro',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      text:'Faculty-in-charge'
  }
]

const Events = () => {
    return (
      <div class="events">
        <h1 style={{ textAlign:"center", margin:"0"}}>Events at EnigmaX</h1>
        <div class="event-div-container">
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

import React, { Component } from 'react'
import "./events.css"
import Event1 from "../../assets/Event1.jpg"
import Event2 from "../../assets/Event2.png"
import Event3 from "../../assets/Event3.png"
import Event4 from "../../assets/Event4.png"


const Events_enigmax = [
  {
      img:Event1,
      name:'Event 1',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      text:'Faculty-in-charge'
  },
  {
      img:Event2,
      name:'Event 2',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      text:'Faculty-in-charge'
  },
  {
    img:Event3,
    name:'Event 3',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
    text:'Faculty-in-charge'
  },
  {
      img:Event4,
      name:'Event 4',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerc',
      text:'Faculty-in-charge'
  }
]

const Events = () => {
    return (
      <div class="events">
        <h1 style={{ textAlign:"center", margin:"10px 0"}}>Events at EnigmaX</h1>
        <div class="event-div-container">
        {
          Events_enigmax.map((item) => {
              return(
                  <div className="event-div">
                      <img className="event-img" src={item.img} alt=""/>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <button onClick={""}>Read more</button>
                  </div>
              )
          })
        }
        </div>
      </div>
    )
}


export default Events

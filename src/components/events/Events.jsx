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
      eventlink:"https://iili.io/H4KucPa.jpg",
      imgdet:Eventdet1
  },
  {
      img:Event2,
      name:'Financial Fusion',
      eventlink:"https://iili.io/H4Ku1cv.jpg",
      imgdet:Eventdet2
  },
  {
    img:Event3,
    name:'HR Hive',
    eventlink:"https://iili.io/H4KuaMg.jpg",
    imgdet:Eventdet3
  },
  {
    img:Event4,
    name:'Management Maestro',
    eventlink:"https://iili.io/H4Ku0KJ.jpg",
    imgdet:Eventdet4
  }
]

const Events = () => {
    return (
      <div id="Events" className='events-container'>
        <div  className="events">
          <h1 style={{ textAlign:"center", margin:"0"}}>Events at Enigma X' 23</h1>
          <div class="cards-overall">
          {
            Events_enigmax.map((item) => {
                return(
                  <div class="flip-card-container" >
                  <div class="flip-card">
                    <div className="card-front">
                          <img className='event-img' src={item.img} alt="" />
                          <h3 style={{margin:"10px 0 0 0", color:"white"}}>{item.name}</h3>
                          <p className='know-more' style={{color:"#FFD600"}}>Know more.</p>
                    </div>
                    <div className="card-back">
                          <a href={item.eventlink} target='_blank'>
                            <img className='event-imgdet' src={item.imgdet} alt=""/>
                          </a>
                    </div>
                  </div>
                </div>
                )
            })
        }
            

            
          </div>
          <a href="https://forms.gle/4RB5MMRLXBa8GukQ6" target='_blank'>
            <div className='register-button'> 
                <p style={{color:"white"}}>REGISTER FOR Enigma X' 23</p>
            </div>
          </a>
        </div>
        <Footer/>
      </div>
    )
}


export default Events

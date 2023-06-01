import React from 'react'
import './home.css';
import {Spotlight, About, Events, Communitypartners } from '../../components' ;

function Home () {
  return (
    <div>
      <Spotlight />
      <About />
      <Events />
    </div>
  )
}

export default Home;
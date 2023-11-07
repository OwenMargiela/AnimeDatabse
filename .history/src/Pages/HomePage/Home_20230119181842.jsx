import React from 'react'
import './HomePage.css'
import neko from "./assets/neko.webp"
function Home() {
  return (
    <div className="Home">
      <figure className="landing__image--container">
        <img src={neko} className='landing__image' />
      </figure>
      <h2 className='landing__para'>Broswe your favourtite Anime</h2>
    </div>
  )
}

export default Home
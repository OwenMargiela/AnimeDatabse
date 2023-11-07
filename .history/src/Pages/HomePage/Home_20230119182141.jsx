import React from 'react'
import './HomePage.css'
import neko from "./assets/neko.webp"
function Home() {
  return (
    <div className="Home">
      <div className="landing__header">

      <figure className="landing__image--container">
        <img src={neko} className='landing__image' />
      </figure>
      <h1 className='landing__para'>Broswe your favourtite Anime</h1>
      </div>
      <p>hey</p>
    </div>
  )
}

export default Home
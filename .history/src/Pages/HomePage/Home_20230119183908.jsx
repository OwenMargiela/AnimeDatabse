import React, { useEffect, useState } from 'react'
import './HomePage.css'
import neko from "./assets/neko.webp"
import axios from 'axios'
function Home() {
  const [top, setTop] = useState()

  async function getTop(){
    const {data} = await axios.get('https://api.jikan.moe/v4/top/anime')
    setTop(data.data)
  }

  useEffect(()=>{
    getTop()
  })
  console.log(top)

  return (
    <div className="Home">
      <div className="landing__header">
      <figure className="landing__image--container">
        <img src={neko} className='landing__image' />
      </figure>
      <h1 className='landing__para'>Broswe your favourite Anime</h1>
      <div className="top__anime">

      </div>
      </div>
      <p>hey</p>
    </div>
  )
}

export default Home
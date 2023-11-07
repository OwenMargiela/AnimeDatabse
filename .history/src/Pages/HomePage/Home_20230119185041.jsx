import React, { useEffect, useState } from 'react'
import './HomePage.css'
import neko from "./assets/neko.webp"
import axios from 'axios'
import AnimeContainer from '../../Components/AnimeContainer'
function Home() {
  const [top, setTop] = useState()

  async function getTop(){
    const {data} = await axios.get('https://api.jikan.moe/v4/top/anime')
    setTop(data.data)
  }

  useEffect(()=>{
    getTop()
    console.log(top?.slice(0,10))
  })

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
      <h2>Top Anime</h2>
      <div className="anime__wrapper">
        {top?.slice(0,4).map(anime=>(
          <AnimeContainer anime={anime} ></AnimeContainer>
        ))}
        
      </div>
    </div>
  )
}

export default Home
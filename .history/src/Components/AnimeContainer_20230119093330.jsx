import React from 'react'

function AnimeContainer({anime}) {
  return (
    <div className="anime__container" key={anime.mal_id}>
            <img className="anime__image" src={anime.images.jpg.image_url} />
            <div className="img__bg"></div>
            <div className="anime__title">
              <h3>{anime.title_english}</h3>
              
            </div>
            
          </div>
  )
}

export default AnimeContainer
import React from 'react'

function AnimeDescription({anime}) {
  return (
    <>
    <div className="Description__title">
    <h2>{anime.title}</h2>
    </div>
        <div className="Description__genres">

        {anime.genres.map(genre =>(
            <div className="description__genre">
            <p>{genre.name}</p>
            </div>
            ))}
        </div>
    <div className="Description__synopsis">
        <p>{anime.synopsis}</p>
    </div>

        <div className="Description__themes">

        {anime.themes.map(theme =>(
            <div className="description__theme">
            <p>{theme.name}</p>
            </div>
            ))}
        </div>

        <p>{anime.aired.string}</p>
        <p>{anime.episodes}</p>
        

        <p>{anime.status}</p>
        <p>{anime.studios.name}</p>
        <p>{anime.score}</p>
        <p>{anime.type}</p>
        <p>{anime.rating}</p>
        <p>{anime.duration}</p>
        <p>{anime.source}</p>
        <p>{anime.popularity}</p>
    </>
  )
}

export default AnimeDescription
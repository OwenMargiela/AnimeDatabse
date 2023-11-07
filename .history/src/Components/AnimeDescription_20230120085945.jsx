import React from 'react'

function AnimeDescription({anime}) {
  return (
    <>
    <p>{anime.title}</p>
        <p>{anime.aired.string}</p>
        <p>{anime.episodes}</p>
        {anime.genres.map(genre =>(
          <p>{genre.name}</p>
          ))}
        {anime.themes.map(theme =>(
          <p>{theme.name}</p>
          ))}
        <p>{anime.status}</p>
        <p>{anime.studios.name}</p>
        <p>{anime.score}</p>
        <p>{anime.synopsis}</p>
        <p>{anime.type}</p>
        <p>{anime.rating}</p>
        <p>{anime.duration}</p>
        <p>{anime.source}</p>
        <p>{anime.popularity}</p>
    </>
  )
}

export default AnimeDescription
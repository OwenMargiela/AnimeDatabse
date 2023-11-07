import React from 'react'

function Favourites({animes}) {
  console.log(animes)
  return (
    <div>{animes?.mal_id}</div>
  )
}

export default Favourites
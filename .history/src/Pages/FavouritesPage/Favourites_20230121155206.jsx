import React from 'react'

function Favourites({anime}) {
  console.log(anime)
  return (
    <div>{anime?.mal_id}</div>
  )
}

export default Favourites
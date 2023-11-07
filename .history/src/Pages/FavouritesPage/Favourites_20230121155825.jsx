import React, { useState } from 'react'

function Favourites({animes}) {
  console.log(animes)
  const[favlist,setFavList]= useState()

  {animes&&setFavList}
  return (
    <div>{animes?.mal_id}</div>
  )
}

export default Favourites
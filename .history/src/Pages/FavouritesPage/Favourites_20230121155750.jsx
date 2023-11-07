import React, { useState } from 'react'

function Favourites({animes}) {
  console.log(animes)
  const[favlist,setFavList]= useState([])
  {animes && setFavList(animes)}

  return (
    <div>
      
      {animes?
      <p>
      {animes[0]?.mal_id}
      </p>:
      null
    }
      </div>
  )
}

export default Favourites
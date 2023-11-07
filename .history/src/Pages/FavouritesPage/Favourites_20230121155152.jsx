import React from 'react'

function Favourites({anime}) {
  return (
    <div>{anime?.mal_id}</div>
  )
}

export default Favourites
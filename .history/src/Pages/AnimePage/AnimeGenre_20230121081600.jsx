import React from 'react'
import { useParams } from 'react-router-dom'

function AnimeGenre() {
    const { id } = useParams()
    
  return (
    <div>{id}</div>
  )
}

export default AnimeGenre
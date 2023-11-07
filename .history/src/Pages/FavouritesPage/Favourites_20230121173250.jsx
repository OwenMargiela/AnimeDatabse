import React from 'react'
import { Link } from 'react-router-dom'

function Favourites({favourites}) {
  
  return (
    <div className="favourites__container">
        {favourites.map(favourite=>(
          <Link to={`${favourite.mal_id}`}>
          <div className="favourite" key={favourite.mal_id}>
            <p>{favourite.title}</p>
          </div>
          </Link>
        ))

        }
    </div>
  )
}

export default Favourites
import React from 'react'

function Favourites({favourites}) {
  
  return (
    <div className="favourites__container">
        {favourites.map(favourite=>(
          <a href={`anime/${favourite.mal_id}`}>
          <div className="favourite" key={favourite.mal_id}>
            <p>{favourite.title}</p>
          </div>
          </a>
        ))

        }
    </div>
  )
}

export default Favourites
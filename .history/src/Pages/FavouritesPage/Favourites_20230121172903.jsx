import React from 'react'

function Favourites({favourites}) {
  
  return (
    <div className="favourites__container">
        {favourites.map(favourite=>(
          <div className="favourite" key={favourite.mal_id}>
            <p>{favourite.title}</p>
          </div>
        ))

        }
    </div>
  )
}

export default Favourites
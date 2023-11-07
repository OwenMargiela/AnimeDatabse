import React from "react";
import { Link } from "react-router-dom";
import AnimeDescription from "../../Components/AnimeDescription";
import './Favourites.css'

function Favourites({ favourites, removeFromFavourites }) {
  function removeHelper(info){
    removeFromFavourites(info)
  }
  
  return (
    <div className="favourites__container">
      {favourites.map((favourite) => (
        <>
        <Link to={`/anime/${favourite.mal_id}`} >
        <div className="favs_info">
          <figure className="image__container">
            <img src={favourite?.images.jpg.image_url} alt="" srcset="" />
          </figure>

          <div className="anime__description">
            <AnimeDescription anime={favourite}></AnimeDescription>
          </div>
      <div>
        <button onClick={()=> removeHelper("it work")} >X</button>
      </div>
        </div>
        </Link>
        </>
      ))}
    </div>
  );
}

export default Favourites;

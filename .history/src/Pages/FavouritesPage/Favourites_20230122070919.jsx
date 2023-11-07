import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="favs_info">
        <Link to={`/anime/${favourite.mal_id}`} >
          <figure className="image__container">
            <img src={favourite?.images.jpg.image_url} alt="" srcset="" />
          </figure>
        </Link>

          <div className="anime__description">
            <AnimeDescription anime={favourite}></AnimeDescription>
          </div>
      <div>
        <button onClick={()=> removeHelper("it work")} >
        <FontAwesomeIcon icon="fa-solid fa-x" />
        </button>
      </div>
        </div>
        </>
      ))}
    </div>
  );
}

export default Favourites;

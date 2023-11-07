import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import AnimeDescription from "../../Components/AnimeDescription";
import './Favourites.css'

function Favourites({ favourites, removeFromFavourites }) {
  function removeHelper(anime){
    removeFromFavourites(anime)
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
        <button className="remove__btn" onClick={()=> removeHelper(favourite)} >
        <FontAwesomeIcon className="remove__icon" icon="fa-solid fa-x" />
        </button>

          <div className="anime__description">
            <AnimeDescription anime={favourite}></AnimeDescription>
          </div>
      <div>
      </div>
        </div>
        </>
      ))}
    </div>
  );
}

export default Favourites;

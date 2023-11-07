import React from "react";
import { Link } from "react-router-dom";
import AnimeDescription from "../../Components/AnimeDescription";
import './Favourites.css'

function Favourites({ favourites }) {
  return (
    <div className="favourites__container">
      {favourites.map((favourite) => (
        <Link to={`/anime/${favourite.mal_id}`} >
        <div className="favs_info">
          <figure className="image__container">
            <img src={favourite?.images.jpg.image_url} alt="" srcset="" />
          </figure>

          <div className="anime__description">
            <AnimeDescription anime={favourite}></AnimeDescription>
          </div>
        </div>
      <div>
        <button>Remove from favourites</button>
      </div>
        </Link>
      ))}
    </div>
  );
}

export default Favourites;

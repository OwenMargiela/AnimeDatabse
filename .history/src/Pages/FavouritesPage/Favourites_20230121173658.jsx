import React from "react";
import { Link } from "react-router-dom";
import AnimeDescription from "../../Components/AnimeDescription";

function Favourites({ favourites }) {
  return (
    <div className="favourites__container">
      {favourites.map((favourite) => (
        <div className="anime__info">
        <figure className="image__container">
          <img src={favourite?.images.jpg.image_url} alt="" srcset="" />
        </figure>

        {info && (
          <div className="anime__description">
            <AnimeDescription anime={favourite}></AnimeDescription>
          </div>
        )}
      </div>
      ))}
    </div>
  );
}

export default Favourites;

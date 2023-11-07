import React from "react";
import { Link } from "react-router-dom";
import AnimeDescription from "../../Components/AnimeDescription";

function Favourites({ favourites }) {
  return (
    <div className="favourites__container">
      {favourites.map((favourite) => (
        <AnimeDescription anime={favourite} ></AnimeDescription>
      ))}
    </div>
  );
}

export default Favourites;

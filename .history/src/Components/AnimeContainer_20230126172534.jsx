import React from "react";

function AnimeContainer({ anime }) {
  return (
    <div className="anime__container" key={anime.mal_id}>
      <img
        className="anime__image"
        src={anime.images?.jpg.image_url}
        alt={`${anime.title}`}
      />
      <div className="img__bg"></div>
      <div className="anime__title">
        {anime.title_english}
      </div>
    </div>
  );
}

export default AnimeContainer;

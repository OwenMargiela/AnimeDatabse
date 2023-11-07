import React from "react";
import Score from "./Score";

function AnimeDescription({ anime }) {
  return (
    <>
      <div className="Description__score">
        <h3>{anime.score}</h3>
        <Score score={anime.score / 2}></Score>
      </div>
      <div className="Description__title">
        <h2>{anime.title}</h2>
      </div>
      <div className="Desription__rating">
        <h3>{anime.rating}</h3>
      </div>
      <div className="Description__genres">
        {anime.genres.map((genre) => (
          <div className="description__genre">
            <p>{genre.name}</p>
          </div>
        ))}
      </div>
      <div className="Description__synopsis">
        <p>{anime.synopsis}</p>
      </div>
      {anime.theme && (
        <div className="Description__themes">
          {anime.themes.map((theme) => (
            <div className="description__theme">
              <p>{theme.name}</p>
            </div>
          ))}
        </div>
      )}

      <div className="Description__Miscillanious">
        <div className="Description__episodes">
          <p>Episode No.</p>
          <h2>{anime.episodes}</h2>
        </div>
        <p>{anime.aired.string}</p>

        <p>{anime.status}</p>
        <p>{anime.studios.name}</p>
        <p>{anime.type}</p>
        <p>{anime.duration}</p>
        <p>{anime.source}</p>
        <p>{anime.popularity}</p>
      </div>
    </>
  );
}

export default AnimeDescription;

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
        <div className="Description__Miscillanious--item">
          <p>Episode No.</p>
          <h2>{anime.episodes}</h2>
        </div>
        <div className="Description__Miscillanious--item">
          <p>{anime.aired.string}</p>
        </div>
        <div className="Description__Miscillanious--item">
          <p>{anime.status}</p>
        </div>
        <div className="Description__Miscillanious--item">
          <p>{anime.studios.name}</p>
        </div>
        <div className="Description__Miscillanious--item">
          <p>{anime.type}</p>
        </div>
        <div className="Description__Miscillanious--item">
          <p>{anime.duration}</p>
        </div>
        <div className="Description__Miscillanious--item">
          <p>{anime.source}</p>
        </div>
        <div className="Description__Miscillanious--item">
          <p>{anime.popularity}</p>
        </div>
      </div>
    </>
  );
}

export default AnimeDescription;

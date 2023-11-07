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
          <p>Air Date</p>
          <h2>{anime.aired.string}</h2>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Anime Staus</p>
          <h2>{anime.status}</h2>
        </div>
        {anime.studios.name && (
          <div className="Description__Miscillanious--item">
            <p>Studio</p>
            <h2>{anime.studios.name}</h2>
          </div>
        )}
        <div className="Description__Miscillanious--item">
          <p>Anime Type</p>
          <h2>{anime.type}</h2>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Episode Duration</p>
          <h2>{anime.duration}</h2>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Anime Source</p>
          <h2>{anime.source}</h2>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Popularity</p>
          <h2>{anime.popularity}</h2>
        </div>
      </div>
    </>
  );
}

export default AnimeDescription;
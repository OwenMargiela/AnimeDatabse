import React from "react";
import Score from "./Score";

function AnimeDescription({ anime }) {
  return (
    <>
      <div className="Description__score">
        <h3>{anime.score}</h3>
        <Score score={anime.score / 1.5}></Score>
      </div>
      <div className="Description__title">
        <h2>{anime.title__english || anime.title }</h2>
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
          <h4>{anime.episodes}</h4>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Air Date</p>
          <h4>{anime.aired.string}</h4>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Anime Staus</p>
          <h4>{anime.status}</h4>
        </div>
        {anime.studios.name && (
          <div className="Description__Miscillanious--item">
            <p>Studio</p>
            <h4>{anime.studios.name}</h4>
          </div>
        )}
        <div className="Description__Miscillanious--item">
          <p>Anime Type</p>
          <h4>{anime.type}</h4>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Episode Duration</p>
          <h4>{anime.duration}</h4>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Anime Source</p>
          <h4>{anime.source}</h4>
        </div>
        <div className="Description__Miscillanious--item">
          <p>Popularity</p>
          <h4>{anime.popularity}</h4>
        </div>
      </div>
    </>
  );
}

export default AnimeDescription;

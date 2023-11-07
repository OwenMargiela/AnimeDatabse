import React from "react";
import { Link } from "react-router-dom";
import Score from "./Score";

function AnimeDescription({ anime ,streaming }) {
  return (
    <>
    <div className="">

      <div className="Description__score">
        <h2>{anime.score}</h2>
        <Score score={anime.score / 2}></Score>
      </div>
      <div className="Description__title">
        <h1>{anime.title__english || anime.title}</h1>
      </div>
      <div className="Desription__rating">
        <h3>{anime.rating}</h3>
      </div>
      <div className="Description__genres">
        {anime.genres.map((genre) => (
          <Link to={`/${genre.mal_id}`}>
            <p>{genre.name}</p>
          </Link>
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
      </div>
      <div className="more_info">
        <p>
          {" "}
          <strong>Episode No.</strong>:{anime.episodes || "?"}{""}
          <strong>Air Date</strong> :{anime.aired.string}{" "}
          <strong>Anime Status</strong> :{anime.status}{""}
        </p>
    
        <p>
          {" "}
          <strong>Anime Type</strong>:{anime.type}
          <strong>Duration</strong>:{anime.duration}
          <strong>Anime Source</strong>:{anime.source}
        </p>
        <p>
          {" "}
          <strong>Popularity</strong>:{anime.popularity}
        </p>

        <div className="streaming">
          <strong>Streaming:</strong>
              {streaming?.map((stream, index) => (
                <a key={index} href={stream.url}>
                  <div className="streaming_site" key={stream.url}>
                    <span>{stream.name}</span>
                  </div>
                </a>
              ))}
            </div>
      </div>
    </>
  );
}

export default AnimeDescription;

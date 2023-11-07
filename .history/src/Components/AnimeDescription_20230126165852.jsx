import React from "react";
import { Link } from "react-router-dom";
import Score from "./Score";

function AnimeDescription({ anime, streaming, inFavouritesOrNot }) {
  return (
    <>
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
      {!inFavouritesOrNot() ? (
        <div className="add__btn">
          <p>
            Heart it {""}
            <FontAwesomeIcon
              onClick={() => addToFavourites(info)}
              className="favourites_btn"
              icon="fa-solid fa-heart"
            />
          </p>
        </div>
      ) : (
        <div className="add__btn">
          <p>
            <FontAwesomeIcon
              className="favourites_btn"
              icon="fa-solid fa-heart"
            />
          </p>
        </div>
      )}
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
      <div className="more_info">
        <p>
          {" "}
          <strong>Episode No.</strong> :{anime.episodes || "?"}
        </p>
        <p>
          {" "}
          <strong>Air Date</strong> :{anime.aired.string}{" "}
        </p>
        <p>
          {" "}
          <strong>Anime Status</strong> :{anime.status}
        </p>
        <p>
          {" "}
          <strong>Anime Type</strong>:{anime.type}
        </p>
        <p>
          {" "}
          <strong>Duration</strong>:{anime.duration}
        </p>
        <p>
          {" "}
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
                <p>{stream.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default AnimeDescription;

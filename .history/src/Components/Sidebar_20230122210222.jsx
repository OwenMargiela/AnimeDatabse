import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar({ favourites, genres }) {
  const [genreToggle, setGenreToggle] = useState(false);
  function toggleGenre() {
    genreToggle === false ? setGenreToggle(true) : setGenreToggle(false);
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__head">
          <h2>TV Neko</h2>
        </div>
        <ul className="sidebar__list">
          <Link to="/">
            <li className="sidebar__list--item">
              <FontAwesomeIcon
                className="sidebar__list--item-icon"
                icon="fa-solid fa-house"
              ></FontAwesomeIcon>
              <p>Home</p>
            </li>
          </Link>

          <Link to="/favourites">
            <li className="sidebar__list--item">
              <FontAwesomeIcon
                className="sidebar__list--item-icon"
                icon="fa-solid fa-heart"
              ></FontAwesomeIcon>
              {favourites.length > 0 && <span>{favourites.length}</span>}
              <p>Favs</p>
            </li>
          </Link>
          <li onClick={() => toggleGenre()} className="sidebar__list--item">
            <FontAwesomeIcon
              className="sidebar__list--item-icon"
              icon="fa-solid fa-bars-staggered"
            />
            <p>Genre</p>
          </li>
          {genreToggle && (
            <li className="genres">
              <div className="Description__genres">
                {genres?.slice(0,16).map((genre) => (
                  <Link to={`/${genre.mal_id}`}>
                    <div className="description__genre">
                      <p>{genre.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </li>
          )}
          <Link to="/TV">
            <li className="sidebar__list--item">
              <FontAwesomeIcon
                className="sidebar__list--item-icon"
                icon="fa-solid fa-tv"
              />
              <p>Tv Anime</p>
            </li>
          </Link>
          <Link to="/Movies">
            <li className="sidebar__list--item">
              <FontAwesomeIcon
                className="sidebar__list--item-icon"
                icon="fa-solid fa-film"
              />
              <p>Movies</p>
            </li>
          </Link>
          <Link to="/Ova's">
            <li className="sidebar__list--item">
              <FontAwesomeIcon
                className="sidebar__list--item-icon"
                icon="fa-solid fa-circle-play"
              />
              <p>OVA's</p>
            </li>
          </Link>
          <Link to="/filter">
            <li className="sidebar__list--item">
              <FontAwesomeIcon
                className="sidebar__list--item-icon"
                icon="fa-solid fa-filter"
              />
              <p>Filter Search</p>
            </li>
          </Link>
        </ul>

        <div className="Favourite">
          <h3>Favourites</h3>
          <ul className="favourites__list">
            {favourites?.slice(0, 5).map((anime) => (
              <Link to={`/anime/${anime.mal_id}`}>
                <li className="favourites__list--item" key={anime.mal_id}>
                  {anime.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

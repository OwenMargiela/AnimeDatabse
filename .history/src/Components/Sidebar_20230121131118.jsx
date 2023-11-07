import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Sidebar.css";
import lucky from "../assets/coin-cat.webp";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__head">
          {/* <img className="sidebar__head--img"  src={lucky} alt="" srcset="" /> */}
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
              <p>Favs</p>
            </li>
          </Link>
          <li className="sidebar__list--item">
            <FontAwesomeIcon
              className="sidebar__list--item-icon"
              icon="fa-solid fa-bars-staggered"
            />
            <p>Genre</p>
          </li>
          <li className="sidebar__list--item">
            <FontAwesomeIcon
              className="sidebar__list--item-icon"
              icon="fa-solid fa-tv"
            />
            <p>Tv Anime</p>
          </li>
          <li className="sidebar__list--item">
            <FontAwesomeIcon
              className="sidebar__list--item-icon"
              icon="fa-solid fa-film"
            />
            <p>Movies</p>
          </li>
          <li className="sidebar__list--item">
            <FontAwesomeIcon
              className="sidebar__list--item-icon"
              icon="fa-solid fa-circle-play"
            />
            <p>OVA's</p>
          </li>
          <li className="sidebar__list--item">
            <FontAwesomeIcon
              className="sidebar__list--item-icon"
              icon="fa-solid fa-calendar-days"
            />
            <p>Upencoming</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

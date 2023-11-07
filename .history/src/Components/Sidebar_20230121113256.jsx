import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        TV Neko
        <ul className="sidebar__list">
          <li className="sidebar__list--item">
            <FontAwesomeIcon icon="fa-solid fa-house"></FontAwesomeIcon>
            <p>Home</p>
          </li>
          <li className="sidebar__list--item">
            <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
            <p>Genre</p>
          </li>
          <li className="sidebar__list--item">
            <FontAwesomeIcon icon="fa-solid fa-tv" />
            <p>Tv Anime</p>
          </li>
          <li className="sidebar__list--item">
            <FontAwesomeIcon icon="fa-solid fa-film" />
            <p>Movies</p>
          </li>
          <li className="sidebar__list--item">
            <FontAwesomeIcon icon="fa-solid fa-circle-play" />
            <p>OVA's</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

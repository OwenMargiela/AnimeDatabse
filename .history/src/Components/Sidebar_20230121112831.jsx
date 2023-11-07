import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <>
    <div className="sidebar">
        TV Neko
        <ul className="sidebar__list">
            <li className="sidebar__list--item">
                <FontAwesomeIcon icon="fa-house" ></FontAwesomeIcon>
            </li>
            <li className="sidebar__list--item">
            <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
            </li>
            <li className="sidebar__list--item">
            <FontAwesomeIcon icon="fa-solid fa-tv" />
            </li>
            <li className="sidebar__list--item">
            <FontAwesomeIcon icon="fa-solid fa-film" />
            </li>
            <li className="sidebar__list--item">
            <i class="fa-solid fa-circle-play"></i>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar
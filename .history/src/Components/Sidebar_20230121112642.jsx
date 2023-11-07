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
                <FontAwesomeIcon icon="fa-Bar-Staggered" ></FontAwesomeIcon>
            </li>
            <li className="sidebar__list--item">
                TV
            </li>
            <li className="sidebar__list--item">
                Movies
            </li>
            <li className="sidebar__list--item">
                OVA's
            </li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar
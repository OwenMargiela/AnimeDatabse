import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
        TV Neko
        <ul className="sidebar__list">
            <li className="sidebar__list--item">
                Home
            </li>
            <li className="sidebar__list--item">
                Genres
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
  )
}

export default Sidebar
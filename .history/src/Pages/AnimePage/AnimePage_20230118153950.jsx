import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./AnimePage.css";

function AnimePage() {

  return (
    <>
      <div className="anime__container--wrapper">
        {animes?.map((anime, index) => (

          <Link to={`${index}`}>
          <div className="anime__container" key={anime.mal_id}>
            <img className="anime__image" src={anime.images.jpg.image_url} />
            <div className="img__bg"></div>
            <div className="anime__title">
              <h3>{anime.title}</h3>
              
            </div>
            
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default AnimePage;
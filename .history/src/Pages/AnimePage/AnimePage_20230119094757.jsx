import React from "react";
import { Link } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";
import "./AnimePage.css";

function AnimePage({ animes }) {
  return (
    <>
      <div className="anime__container--wrapper">
        {animes?.map((anime, index) => (
          <Link to={`${anime.mal_id}`}>
            <AnimeContainer anime={anime}></AnimeContainer>
          </Link>
        ))}
      </div>
    </>
  );
}

export default AnimePage;
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import neko from "./assets/neko.webp";
import axios from "axios";
import AnimeContainer from "../../Components/AnimeContainer";
import { Link } from "react-router-dom";
function Home() {
  const [top, setTop] = useState();

  async function getTop() {
    const { data } = await axios.get("https://api.jikan.moe/v4/top/anime");
    setTop(data.data);
  }

  useEffect(() => {
    getTop();
    console.log(top?.slice(0, 10));
  });

  return (
    <div className="Home">
      <div className="landing__header">
        <h1 className="landing__para">Browse your favourite Anime</h1>
        <figure className="landing__image--container">
          <img src={neko} className="landing__image" />
        </figure>
        <div className="top__anime">
          
        {top?.slice(0, 6).map((anime) => (
          <ul className="top__anime--list" >
            <li className="top__anime--list--item">
              <p>anime.title</p>
            </li>
          </ul>
        ))}
        </div>
      </div>
      <h2>Top Anime</h2>
      <div className="anime__wrapper">
        {top?.slice(0, 6).map((anime) => (
          <Link to={`anime/${anime.mal_id}`}>
            <AnimeContainer anime={anime}></AnimeContainer>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import "./HomePage.css";
import neko from "./assets/neko.webp";
import axios from "axios";
import AnimeContainer from "../../Components/AnimeContainer";
import { Link } from "react-router-dom";
function Home() {
  const [top, setTop] = useState();
  const [movies, setMovies] = useState();
  const [adventure, setAdventure] = useState();
  
    // async function getTop() {
    //   const { data } = await axios.get("https://api.jikan.moe/v4/top/anime");
    //   setTop(data.data);
    // }
  
    // async function getMovies() {
    //   const { data } = await axios.get("https://api.jikan.moe/v4/anime?type=movie");
    //   setMovies(data.data);
    // }

    // async function getAdventure() {
    //   const { data } = await axios.get("https://api.jikan.moe/v4/anime?genres=2&order_by=score&sort=desc");
    //   setAdventure(data.data);
    // }
    
    async function getFrontPage(){

      const { data:top } = await axios.get("https://api.jikan.moe/v4/top/anime");
      setTop(top.data);

      const { data:movie } = await axios.get("https://api.jikan.moe/v4/anime?type=movie");
      setMovies(movie.data);

      const { data:adventure } = await axios.get("https://api.jikan.moe/v4/anime?genres=2&order_by=score&sort=desc");
      setAdventure(adventure.data);


    }
  
  useEffect(() => {
    getFrontPage()
  },[]);

  return (
    <div className="Home">
      <div className="landing__header">
        <h1 className="landing__para">Browse your favourite Anime</h1>
        <figure className="landing__image--container">
          <img src={neko} className="landing__image" />
        </figure>
        <div className="top__anime">
          
          <ul className="top__anime--list" >
          <h3 className="top__anime--title">Highly Rated</h3>
        {top?.slice(6, 12).map((anime) => (
            <Link to={`anime/${anime.mal_id}`}>
            <li className="top__anime--list--item">
              {anime.title}
            </li>
            </Link>
        ))}
        </ul>
        </div>
      </div>

      <div className="anime__wrapper--container">
      <h2>Top Anime</h2>
      <div className="anime__wrapper">
        {top?.slice(0, 6).map((anime) => (
          <Link to={`anime/${anime.mal_id}`}>
            <AnimeContainer anime={anime}></AnimeContainer>
          </Link>
        ))}
        </div>
      </div>

      <div className="anime__wrapper--container">
      <h2>Movies</h2>
      <div className="anime__wrapper">
        {movies?.slice(0, 6).map((anime) => (
          <Link to={`anime/${anime.mal_id}`}>
            <AnimeContainer anime={anime}></AnimeContainer>
          </Link>
        ))}
        </div>
      </div>

      <div className="anime__wrapper--container">
      <h2>Adventure Anime</h2>
      <div className="anime__wrapper">
        {adventure?.slice(0, 6).map((anime) => (
          <Link to={`anime/${anime.mal_id}`}>
            <AnimeContainer anime={anime}></AnimeContainer>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

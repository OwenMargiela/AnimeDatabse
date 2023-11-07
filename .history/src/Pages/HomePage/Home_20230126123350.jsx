import React, { useEffect, useState } from "react";
import neko from "./assets/neko.webp";
import axios from "axios";
import AnimeContainer from "../../Components/AnimeContainer";
import { Link } from "react-router-dom";
function Home() {
  const [top, setTop] = useState();
  const [movies, setMovies] = useState();
  const [adventure, setAdventure] = useState();

  useEffect(() => {
    async function getFrontPage() {
      const { data: top } = await axios.get(
        "https://api.jikan.moe/v4/top/anime"
      );
      setTop(top.data.slice(0, 12));

      const { data: movie } = await axios.get(
        "https://api.jikan.moe/v4/anime?type=movie"
      );
      setMovies(movie.data.slice(0, 6));

      const { data: adventure } = await axios.get(
        "https://api.jikan.moe/v4/anime?genres=2&order_by=score&sort=desc"
      );
      setAdventure(adventure.data.slice(0, 6));
    }
    getFrontPage();
  }, []);

  return (
    <div className="Home">
      <div className="landinImageContainer">
        <img src={neko} alt="" />
      </div>
      <div className="mainBody">
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
            {movies?.map((anime) => (
              <Link to={`anime/${anime.mal_id}`}>
                <AnimeContainer anime={anime}></AnimeContainer>
              </Link>
            ))}
          </div>
        </div>

        <div className="anime__wrapper--container">
          <h2>Adventure Anime</h2>
          <div className="anime__wrapper">
            {adventure?.map((anime) => (
              <Link to={`anime/${anime.mal_id}`}>
                <AnimeContainer anime={anime}></AnimeContainer>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

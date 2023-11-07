import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AnimePage.css";

function AnimePage() {
  const { id } = useParams();
  const [animes, setAnimes] = useState();

  async function fetchAnime() {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${id}`);
    setAnimes(data.data);
  }
  {
    animes && console.log(animes[0].images.jpg.image_url);
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <>
      {animes?.map((anime) => (
        <div className="anime__container--wrapper">
          <div className="anime__container" key={anime.mal_id}>
            <div className="anime__title">
              <h3>{anime.title}</h3>
            </div>
            <div className="anime__image--container">
              <figure>
                <img src={anime.images.jpg.image_url} />
              </figure>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnimePage;

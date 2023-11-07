import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimePage() {
  const { id } = useParams();
  const [animes, setAnimes] = useState();

  async function fetchAnime() {
    const { data } = await axios.get(
      "https://api.jikan.moe/v4/anime?q=one piece"
    );
    setAnimes(data.data);
  }
  {
    animes && console.log(animes.map(anime=>(anime.title)));
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <>
      {/* {anime?.map((anime) => (
        <div className="anime__container" key={anime.mal_id}>
          <figure>
            {anime.images.map(image=>(
                <img src={image.jpg} alt={anime.title}/>
            ))}
          </figure>
        </div>
      ))} */}
      {id}
      
    </>
  );
}

export default AnimePage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimePage() {
  const { id } = useParams();
  const [anime, setAnime] = useState();

  async function fetchAnime() {
    const { data } = await axios.get(
      "https://api.jikan.moe/v4/anime?q=one piece"
    );
    setAnime(data.data);
  }
  {
    anime && console.log(anime[0]);
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

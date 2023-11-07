import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";

function AnimeGenre() {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    async function fetchByGenre() {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?genres=${id}`
      );
      setGenre(data.data);
    }

    
    fetchByGenre();
  }, []);
  console.log(genre);

  return <div>
    {
        genre?.map((anime) =>(
            <AnimeContainer anime={anime} ></AnimeContainer>
        ))
    }
  </div>;
}

export default AnimeGenre;

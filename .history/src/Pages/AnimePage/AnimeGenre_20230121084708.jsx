import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";
import "./AnimeGenre.css";

function AnimeGenre() {
  const [{ id }, setId] = useState(useParams());
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

  function nextPage() {
    const next = id + 1;
    setId(next);
  }
  function prevPage() {
    const prev = id - 1;
    setId(prev);
  }

  return (
    <>
      <div className="anime__container--wrapper">
        {genre?.map((anime) => (
          <AnimeContainer anime={anime}></AnimeContainer>
        ))}
      </div>
    </>
  );
}

export default AnimeGenre;

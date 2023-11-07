import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";
import "./AnimeGenre.css";

function AnimeGenre() {
  const { id } = useState();
  const [genre, setGenre] = useState(null);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    async function fetchByGenre() {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?genres=${id}`
      );
      setGenre(data.data);
    }

    fetchByGenre();
  }, [pageNo]);
  console.log(genre);

  function nextPage() {
    const next = id + 1;
    
  }
  function prevPage() {
    const prev = id - 1;
    
  }

  return (
    <>
      <div className="anime__container--wrapper">
        {genre?.map((anime) => (
          <AnimeContainer anime={anime}></AnimeContainer>
        ))}
      </div>
      <div className="pagination">
        <div className="next_btn">
            <button>next</button>
        </div>

        {!pageNo && (
            <div className="prev_btn">
            <button>prev</button>
        </div>
        ) }

        
      </div>
    </>
  );
}

export default AnimeGenre;

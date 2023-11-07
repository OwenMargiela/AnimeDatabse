import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";
import "./AnimeGenre.css";

function AnimeGenre() {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    async function fetchByGenre() {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?genres=${id}&page=${pageNo}`
      );
      setGenre(data.data);
    }

    fetchByGenre();
  }, [pageNo]);

  function nextPage() {
    let next = +id
    next += 1
    console.log(next)
    // setPageNo(next)
  }
  function prevPage() {
    let prev = +id
    prev -= 1
    console.log(prev)
    // setPageNo(prev)
  }

  return (
    <>
      <div className="anime__container--wrapper">
        {genre?.map((anime) => (
            <a href={`anime/${anime.mal_id}`}>

          <AnimeContainer key={anime.mal_id} anime={anime}></AnimeContainer>
            </a>
        ))}
      </div>
      <div className="pagination">
        <div className="next_btn">
            <button onClick={() => nextPage()}>next</button>
        </div>
        {pageNo === 1 ? null : (
            <div className="prev_btn">
            <button onClick={() => prevPage()} >prev</button>
        </div>
        )}
      </div>
    </>
  );
}

export default AnimeGenre;

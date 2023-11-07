import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";
import "./AnimeGenre.css";

function AnimeGenre() {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    async function fetchByGenre() {
      const { data, ...rest } = await axios.get(
        `https://api.jikan.moe/v4/anime?genres=${id}&page=${pageNo}`
      );
      setGenre(data.data);
      setPagination(data.pagination.last_visible_page);
    }

    fetchByGenre();
  }, [pageNo]);
  console.log(pagination);

  function nextPage() {
    setPageNo(pageNo + 1);
    console.log(pageNo);
    // setPageNo(next)
  }
  function prevPage() {
    setPageNo(pageNo - 1);
    console.log(pageNo);
  }

  return (
    <>
      
      {pageNo < +pagination && (
        <div className="anime__container--wrapper">
          {genre?.map((anime, index) => (
            <a key={index} href={`anime/${anime.mal_id}`}>
              <AnimeContainer key={anime.mal_id} anime={anime}></AnimeContainer>
            </a>
          ))}
        </div>
      )}
      <div className="pagination">
        <div className="next_btn">
          <button onClick={() => nextPage()}>next</button>
        </div>
        {pageNo === 1 ? null : (
          <div className="prev_btn">
            <button onClick={() => prevPage()}>prev</button>
          </div>
        )}
      </div>
    </>
  );
}

export default AnimeGenre;

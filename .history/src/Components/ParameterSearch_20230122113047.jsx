import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimeContainer from "./AnimeContainer";

function ParameterSearch({ type }) {
  const [animeType, setAnimeType] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [pagination, setPagination] = useState();
  
  function nextPage() {
    setPageNo(pageNo + 1);
    console.log(pageNo);
    // setPageNo(next)
  }
  function prevPage() {
    setPageNo(pageNo - 1);
    console.log(pageNo);
  }

  useEffect(() => {
    async function typeSearch() {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?type=ova`
      );
      setAnimeType(data.data);
    }
    typeSearch();
  });

  return (
    <div className="parameter_search">
      {pageNo < +pagination ? (
        <div className="anime__container--wrapper">
          {animeType?.map((anime, index) => (
            <Link key={index} to={`/anime/${anime.mal_id}`}>
              <AnimeContainer key={anime.mal_id} anime={anime}></AnimeContainer>
            </Link>
          ))}
        </div>
      ) : (
        <div>No more anime</div>
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
    </div>
  );
}

export default ParameterSearch;

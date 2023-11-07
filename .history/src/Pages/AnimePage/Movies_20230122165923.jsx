import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";
import ParameterSearch from "../../Components/ParameterSearch";

function Movies() {
  const [movies, setMovies] = useState();
  const [pagination, setPagination] = useState();
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    async function getMovies() {
        const { data } = await axios.get(
          `https://api.jikan.moe/v4/anime?type=movie&page=${pageNo}`
        );
        setMovies(data.data);
        setPagination(data.pagination.last_visible_page);
      }
      getMovies()
    console.log(movies);
  },[pageNo]);

  function nextPage() {
    setPageNo(pageNo + 1);
    console.log(pageNo);
  }
  function prevPage() {
    setPageNo(pageNo - 1);
    console.log(pageNo);
  }


  return (
    <div className="movies">
      <h1>Movies</h1>
      {/* {pageNo < +pagination ? (
        <div className="anime__container--wrapper">
          {movies?.map((anime, index) => (
            <Link key={index} to={`/anime/${anime.mal_id}`}>
              <AnimeContainer key={anime.mal_id} anime={anime}></AnimeContainer>
            </Link>
          ))}
        </div>
      ):
      <div>
        No more anime 
      </div>
      }
      <div className="pagination">
        <div className="next_btn">
          <button onClick={() => nextPage()}>next</button>
        </div>
        {pageNo === 1 ? null : (
          <div className="prev_btn">
            <button onClick={() => prevPage()}>prev</button>
          </div>
        )}
      </div> */}
      <ParameterSearch pageNo={pageNo} tv={movies} prevPage={prevPage} nextPage={nextPage} pagination={pagination}></ParameterSearch>
    </div>
  );
}

export default Movies;

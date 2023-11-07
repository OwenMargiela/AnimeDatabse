import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
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
    getMovies();
    console.log(movies);
  }, [pageNo]);

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
      <ParameterSearch
        pageNo={pageNo}
        anime={movies}
        prevPage={prevPage}
        nextPage={nextPage}
        pagination={pagination}
      ></ParameterSearch>
    </div>
  );
}

export default Movies;

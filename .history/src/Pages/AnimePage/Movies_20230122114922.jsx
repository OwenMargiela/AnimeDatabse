import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState();
  const [pagination, setPagination] = useState();
  
  useEffect(() => {
    async function getMovies() {
        const { data } = await axios.get(
          `https://api.jikan.moe/v4/anime?type=movie`
        );
        setMovies(data.data);
        setPagination(data.pagination.last_visible_page);
      }
    console.log(movies);
  });


  return (
    <div className="movies">
      <h1>Movies</h1>
    </div>
  );
}

export default Movies;

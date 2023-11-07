import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getMovies();
    console.log(movies);
  });
  async function getMovies() {
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?type=movie`
    );
    setMovies(data.data);
  }

  return (
    <div className="movies">
      <h1>Movies</h1>
    </div>
  );
}

export default Movies;

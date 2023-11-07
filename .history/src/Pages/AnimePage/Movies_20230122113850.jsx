import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Movies() {

  const[movies, setMovies] = useState()
  async function getMovies(){
    const {data} = await axios.get(`https://api.jikan.moe/v4/anime?type=movie`)
    setMovies(data.data)
  }


  {!movies &&
    useEffect(()=>{
        getMovies()
        console.log(movies)
    })
}


  return (
    <div className="movies">
      <h1>Movies</h1>
      
    </div>
  );
}

export default Movies;

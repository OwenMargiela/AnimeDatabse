import React from "react";
import ParameterSearch from "../../Components/ParameterSearch";

function Movies() {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <ParameterSearch type={ova}></ParameterSearch>
    </div>
  );
}

export default Movies;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimeGenre() {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);

  async function fetchByGenre() {
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?genres=${id}`
    );
    setGenre(data.data);
  }
  useEffect(() => fetchByGenre(), []);
  console.log(genre);

  return <div>{id}</div>;
}

export default AnimeGenre;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";
import ParameterSearch from "../../Components/ParameterSearch";
import "./AnimeGenre.css";

function AnimeGenre() {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    async function fetchByGenre() {
      const { data} = await axios.get(
        `https://api.jikan.moe/v4/anime?genres=${id}&page=${pageNo}`
      );
      setGenre(data.data);
      setPagination(data.pagination.last_visible_page);
    }

    fetchByGenre();
  }, [pageNo,id]);
 

  return (
    <>
      <ParameterSearch animes ={genre} ></ParameterSearch>
    </>
  );
}

export default AnimeGenre;

import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";

import "./FilterSearch.css";

function FilterSearch({ genres }) {
  const [param, setParam] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pagination, setPagination] = useState();
  const url = `https://api.jikan.moe/v4/anime?genres=${param}&&page=${pageNo}&`;
  const [filterObj, setFilterObj] = useState({});
  const [anime, setAnime] = useState();

  function appendUrl(id) {
    setParam([...param, id]);
  }

  function removeFromUrl(id) {
    setParam(param.filter((param_id) => param_id !== id));
  }

  function addedToUrlBool(id) {
    return param.find((param_id) => param_id === id) ? true : false;
  }

  function filterAdder(name, filter) {
    if (filter === "default") {
      const { [name]: _, ...newObj } = filterObj;
      setFilterObj(newObj);
    } else {
      setFilterObj({ ...filterObj, [name]: filter });
    }
  }

  function nextPage() {
    setPageNo(pageNo + 1);
    console.log(pageNo);
    // setPageNo(next)
  }
  function prevPage() {
    setPageNo(pageNo - 1);
    console.log(pageNo);
  }

  async function fetchByFilter() {
    const searchParams = new URLSearchParams(filterObj);
    console.log(url + searchParams.toString());
    const { data } = await axios.get(url + searchParams.toString());
    setAnime(data.data);
  }

  useEffect(() => {
    fetchByFilter();
  }, [pageNo]);

  // console.log(anime)
  return (
    <div className="filter__search">
      Filter anime by Genre
      <div>
        <div className="Filter">
          <ul className="filter__list">
            <li className="filter__list-item">
              <p>Type</p>
              <select
                name=""
                id=""
                onChange={(e) => filterAdder("type", e.target.value)}
              >
                <option value="default">default</option>
                <option value="tv">tv</option>
                <option value="movie">movie</option>
                <option value="ova">ova</option>
                <option value="special">special</option>
              </select>
            </li>
            <li
              className="filter__list-item"
              onChange={(e) => filterAdder("status", e.target.value)}
            >
              <p>Status</p>
              <select name="" id="">
                <option value="default">default</option>
                <option value="airing">airing</option>
                <option value="complete">complete</option>
                <option value="upcoming">upcoming</option>
              </select>
            </li>
            <li className="filter__list-item">
              <p>Rating</p>
              <select
                name=""
                id=""
                onChange={(e) => filterAdder("rating", e.target.value)}
              >
                <option value="default">default</option>
                <option value="g">g</option>
                <option value="pg">pg</option>
                <option value="pg13">pg13</option>
                <option value="pg17">pg17</option>
                <option value="r">r</option>
              </select>
            </li>
            <li className="filter__list-item">
              <p>Min Score</p>

              <select
                name=""
                id=""
                onChange={(e) => filterAdder("min_score", e.target.value)}
              >
                <option value="default">default</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </li>
            <li className="filter__list-item">
              <p>Max Score</p>
              <select
                name=""
                id=""
                onChange={(e) => filterAdder("max_score", e.target.value)}
              >
                <option value="default">default</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="filter__search--genres-container">
          {genres
            ?.filter(
              (genres) =>
                genres.mal_id !== 28 &&
                genres.mal_id !== 26 &&
                genres.mal_id !== 9 &&
                genres.mal_id !== 12 &&
                genres.mal_id !== 81 &&
                genres.mal_id !== 65 &&
                genres.mal_id !== 49
            )
            .map((genre) => (
              <>
                {addedToUrlBool(genre.mal_id) ? (
                  <p
                    onClick={() => removeFromUrl(genre.mal_id)}
                    className="filter__search--genre filter__search--genre-selected"
                  >
                    {genre.name}
                  </p>
                ) : (
                  <p
                    onClick={() => appendUrl(genre.mal_id)}
                    className={`filter__search--genre`}
                  >
                    {genre.name}
                  </p>
                )}
              </>
            ))}
        </div>

        <button className="Filter__btn" onClick={() => fetchByFilter()}>
          Filter
        </button>
      </div>
      <div className="anime__wrapper--container--genre">
        {anime?.map((anime, index) => (
          <Link key={index} to={`/anime/${anime.mal_id}`}>
            <AnimeContainer key={anime.mal_id} anime={anime}></AnimeContainer>
          </Link>
        ))}
      </div>
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

export default FilterSearch;

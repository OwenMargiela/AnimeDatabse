import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimeContainer from "./AnimeContainer";


function ParamSearch({tv}) {
  const [tv, setTv] = useState(tv);
  const [pagination, setPagination] = useState();
  const [pageNo, setPageNo] = useState(1);

//   useEffect(() => {
//     async function getTv() {
//         const { data } = await axios.get(
//           `https://api.jikan.moe/v4/anime?type=tv&page=${pageNo}`
//         );
//         setTv(data.data);
//         setPagination(data.pagination.last_visible_page);
//       }
//       getTv()
//     console.log(tv);
//   },[pageNo]);

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
      {pageNo < +pagination ? (
        <div className="anime__container--wrapper">
          {tv?.map((anime, index) => (
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
      </div>
    </div>
  );
}

export default ParamSearch;

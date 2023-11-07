// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import AnimeContainer from "./AnimeContainer";

// function ParameterSearch(animes) {
//     const [pagination, setPagination] = useState(); 
//     const [pageNo, setPageNo] = useState(1);


//   function nextPage() {
//     setPageNo(pageNo + 1);
//     console.log(pageNo);
//     // setPageNo(next)
//   }
//   function prevPage() {
//     setPageNo(pageNo - 1);
//     console.log(pageNo);
//   }
//   return (
//     <div className="parameter_search">
//       {pageNo < +pagination ? (
//         <div className="anime__container--wrapper">
//           {animes?.map((anime, index) => (
//             <Link key={index} to={`/anime/${anime.mal_id}`}>
//               <AnimeContainer key={anime.mal_id} anime={anime}></AnimeContainer>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <div>No more anime</div>
//       )}
//       <div className="pagination">
//         <div className="next_btn">
//           <button onClick={() => nextPage()}>next</button>
//         </div>
//         {pageNo === 1 ? null : (
//           <div className="prev_btn">
//             <button onClick={() => prevPage()}>prev</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ParameterSearch;

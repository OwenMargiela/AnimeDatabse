import React from 'react'
import { Link } from 'react-router-dom'
import AnimeContainer from './AnimeContainer'

function ParameterSearch({pageNo,movies,prevPage, nextPage, pagination}) {
  return (
    <div className='paramSearch'>
             {pageNo < +pagination ? (
        <div className="anime__container--wrapper">
          {movies?.map((anime, index) => (
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
  )
}

export default ParameterSearch
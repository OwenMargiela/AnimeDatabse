import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContainer from "../../Components/AnimeContainer";
import AnimeDescription from "../../Components/AnimeDescription";

function AnimeInfo({ sendToFavourites, favourites }) {
  const { id } = useParams();
  const [info, setInfo] = useState();
  const [reccomdations, setRecomendations] = useState();
  const [reccomendRender, setReccomendRender] = useState();
  const [streaming, setStreaming] = useState();
  function addToFavourites(info) {
    sendToFavourites(info);
  }

  function inFavouritesOrNot() {
    if (favourites.find((anime) => +anime?.mal_id === +info?.mal_id)) {
      return true;
    } else return false;
  }

  useEffect(() => {
    fetchRecommendations();
  });

  useEffect(() => {
    fetchById();
    fetchStreaming();
  }, [reccomendRender, id]);

  async function fetchById() {
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime/${reccomendRender || id}`
    );
    setInfo(data.data);
  }
  async function fetchRecommendations() {
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime/${reccomendRender || id}/recommendations`
    );
    setRecomendations(data.data.slice(0, 6));
  }
  async function fetchStreaming() {
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime/${reccomendRender || id}/streaming`
    );
    setStreaming(data.data);
  }

  return (
    <>
      <div className="anime__info--container">
        <figure className="image__container">
          <img src={info?.images.jpg.image_url} alt="" srcset="" />
        {!inFavouritesOrNot() ? (
          <div className="add__btn">
            <p>
              Heart it {""}
              <FontAwesomeIcon
                onClick={() => addToFavourites(info)}
                className="favourites_btn"
                icon="fa-solid fa-heart"
              />
            </p>
          </div>
        ) : (
          <div className="add__btn">
            <p>
              <FontAwesomeIcon
                className="favourites_btn"
                icon="fa-solid fa-heart"
              />
            </p>
          </div>
        )}
        </figure>

        {info && (
          <div className="anime__description">
            <AnimeDescription inFavouritesOrNot={inFavouritesOrNot} streaming={streaming} anime={info}></AnimeDescription>

            
          </div>
        )}
      </div>

      <div className="anime__recomendations--container">
        <h2>Recomendations</h2>
        {reccomdations && (
          <div className="anime__wrapper">
            {reccomdations?.map((anime, index) => (
              <div
                key={index}
                className="render"
                onClick={() => setReccomendRender(anime.entry.mal_id)}
              >
                <AnimeContainer
                  key={anime.entry.mal_id}
                  anime={anime.entry}
                ></AnimeContainer>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default AnimeInfo;

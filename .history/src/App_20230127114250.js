import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Pages/HomePage/Home";
import AnimePage from "./Pages/AnimePage/AnimePage.jsx";
import AnimeInfo from "./Pages/AnimePage/AnimeInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimeGenre from "./Pages/AnimePage/AnimeGenre";
import Favourites from "./Pages/FavouritesPage/Favourites";
import Sidebar from "./Components/Sidebar";
import Movies from "./Pages/AnimePage/Movies";

import OVA from "./Pages/AnimePage/OVA";
import TvAnime from "./Pages/AnimePage/TvAnime";
import FilterSearch from "./Pages/AnimePage/FilterSearch";

function App() {
  const [animes, setAnimes] = useState();
  const [valueSearch, setValueSearch] = useState();
  const [favourites, setFavourites] = useState([]);
  const [genres, setGenre] = useState([]);
  const [toggle, setToggle] = useState(false);

  function sendToFavourites(info) {
    setFavourites([...favourites, info]);
  }

  function removeFromFavourites(anime) {
    setFavourites(
      favourites.filter((favourite) => favourite.mal_id !== anime.mal_id)
    );
    console.log(favourites);
  }

  async function fetchAnime(valueSearch) {
    if (valueSearch) {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${valueSearch}&sfw`
      );
      setAnimes(data.data);
    }
  }

  useEffect(()=>{
    async function getGenre(){
      const {data} = await axios.get(`https://api.jikan.moe/v4/genres/anime`)
      setGenre(data.data)
    }
    getGenre()
    setTimeout(()=>{
      console.log(genres)
    },300)
  },[])

  console.log(animes)

  function fetchBySearch() {
    fetchAnime(valueSearch);
  }
  
  function toogleSideBar(){
    setToggle(!toggle)
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList +=" display"
    toggle === true? sidebar.className.remove("display"): null
  
  }
  return (
    <Router>
      <div className="App">
          <Sidebar genres={genres} favourites={favourites}></Sidebar>
        <div className="main">
          <nav className="nav">
            <div className="bars__icon" onClick={() => toogleSideBar()} >
          <FontAwesomeIcon icon="fa-solid fa-bars" />

            </div>
            <form>
              <div className="search__container">
                <input
                  placeholder="Which anime?"
                  onKey
                  type="text"
                  value={valueSearch}
                  onChange={(event) => setValueSearch(event.target.value)}
                />
                <Link to="/anime">
                  <button type="submit" onClick={() => fetchBySearch()}>
                    <FontAwesomeIcon icon="fa-search"></FontAwesomeIcon>
                  </button>
                </Link>
              </div>
            </form>
            <div className="home__icon">
              <Link to="/">
                <FontAwesomeIcon icon="fa-house"></FontAwesomeIcon>
              </Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/favourites"
              element={
                <Favourites
                  removeFromFavourites={removeFromFavourites}
                  favourites={favourites}
                ></Favourites>
              }
            ></Route>
            <Route
              path="/anime"
              element={<AnimePage animes={animes}></AnimePage>}
            ></Route>
            <Route
              path=":id/:id"
              element={
                <AnimeInfo
                  favourites={favourites}
                  sendToFavourites={sendToFavourites}
                  animes={animes}
                ></AnimeInfo>
              }
            ></Route>
            <Route path="/:id" element={<AnimeGenre></AnimeGenre>}></Route>
            <Route path="/TV" element={<TvAnime></TvAnime>}></Route>
            <Route path="/Movies" element={<Movies></Movies>}></Route>
            <Route path="/Ova's" element={<OVA></OVA>}></Route>
            <Route path="/filter" element={<FilterSearch genres={genres} ></FilterSearch>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

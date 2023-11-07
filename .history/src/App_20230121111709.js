import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
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

function App() {
  const [animes, setAnimes] = useState();
  const [valueSearch, setValueSearch] = useState();

  async function fetchAnime(valueSearch) {
    {
      if (valueSearch) {
        const { data } = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${valueSearch}&sfw`
        );
        setAnimes(data.data);
      }
    }
  }
  {
    // animes && console.log(animes[0])
  }

  function fetchBySearch() {
    console.log(valueSearch);
    fetchAnime(valueSearch);
  }

  useEffect(() => {
    fetchAnime();
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="main">
          <div className="nav">
            <div className="search__container">
              <input
                placeholder="Which anime?"
                onKey
                type="text"
                value={valueSearch}
                onChange={(event) => setValueSearch(event.target.value)}
              />
              <Link to="/anime">
                <button onClick={() => fetchBySearch()}>
                  <FontAwesomeIcon icon="fa-search"></FontAwesomeIcon>
                </button>
              </Link>
            </div>
            <div className="home__icon">
              <Link>
              <button>
                Home
              </button>
              </Link>
            </div>

          </div>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/favourites"
              element={<Favourites></Favourites>}
            ></Route>
            <Route
              path="/anime"
              element={<AnimePage animes={animes}></AnimePage>}
            ></Route>
            <Route
              path=":id/:id"
              element={<AnimeInfo animes={animes}></AnimeInfo>}
            ></Route>
            <Route path="/:id" element={<AnimeGenre></AnimeGenre>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

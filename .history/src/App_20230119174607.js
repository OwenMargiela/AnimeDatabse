import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import "./App.css";
import Browser from "./Pages/BrowserPage/Browser";
import Home from "./Pages/HomePage/Home";
import AnimePage from "./Pages/AnimePage/AnimePage.jsx";
import AnimeInfo from "./Pages/AnimePage/AnimeInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  const [animes, setAnimes] = useState();
  const [valueSearch, setValueSearch] = useState();

  async function fetchAnime(valueSearch) {
    {if(valueSearch){
      const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${valueSearch}&sfw`);
      setAnimes(data.data);
    }
    }
  }
  {
    // animes && console.log(animes[0])
  }

  function fetchBySearch() {
    console.log(valueSearch)
    fetchAnime(valueSearch)
    
  }

  useEffect(() => {
    fetchAnime();
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="search__container">
        <input
            onKey
            type="text"
            value={valueSearch}
            onChange={(event) => setValueSearch(event.target.value)}
          />
          <Link to='/anime'>
          <button onClick={() => fetchBySearch()}>
          </button>
            <FontAwesomeIcon icon="fa-Search"></FontAwesomeIcon>
          </Link>
        </div>
       

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/browser" element={<Browser></Browser>}></Route>
          <Route
            path="/:id"
            element={<AnimePage animes={animes}></AnimePage>}
          ></Route>
          <Route path=":id/:id" element={<AnimeInfo animes={animes}></AnimeInfo>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router,Routes,Route, useParams } from 'react-router-dom';
import './App.css';
import Browser from './Pages/BrowserPage/Browser';
import Home from './Pages/HomePage/Home';
import AnimePage from './Pages/AnimePage/AnimePage.jsx';
import AnimeInfo from './Pages/AnimePage/AnimeInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  console.log(useParams());
  const [animes, setAnimes] = useState();

  async function fetchAnime() {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${id}`);
    setAnimes(data.data);
  }
  {
    // animes && console.log(animes[0])
    // console.log(id);
  }

  useEffect(() => {
    fetchAnime();
  }, []);
  return (
    <Router>

    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/browser' element={<Browser></Browser>}></Route>
        <Route path='/:id' element={<AnimePage animes={animes}></AnimePage>} ></Route>
        <Route path=':id/:id' element={<AnimeInfo></AnimeInfo>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

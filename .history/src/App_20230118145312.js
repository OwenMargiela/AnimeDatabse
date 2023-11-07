import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Browser from './Pages/BrowserPage/Browser';
import Home from './Pages/HomePage/Home';
import AnimePage from './Pages/AnimePage/AnimePage.jsx';
import AnimeInfo from './Pages/AnimePage/AnimeInfo';

function App() {
  const { id } = useParams();
  const [animes, setAnimes] = useState();

  async function fetchAnime() {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${id}`);
    setAnimes(data.data);
  }
  {
    animes && console.log(animes[0].images.jpg.image_url);
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
        <Route path='/:id' element={<AnimePage anime={animes}></AnimePage>} ></Route>
        <Route path='anime/:id' element={<AnimeInfo></AnimeInfo>}  ></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

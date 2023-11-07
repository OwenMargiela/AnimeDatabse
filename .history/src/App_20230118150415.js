import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Browser from './Pages/BrowserPage/Browser';
import Home from './Pages/HomePage/Home';
import AnimePage from './Pages/AnimePage/AnimePage.jsx';
import AnimeInfo from './Pages/AnimePage/AnimeInfo';

function App() {
  return (
    <Router>

    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/browser' element={<Browser></Browser>}></Route>
        <Route path='/:id' element={<AnimePage></AnimePage>} ></Route>
        <Route path=':id/:id' element={<AnimeInfo></AnimeInfo>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

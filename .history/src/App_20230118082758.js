import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Browser from './Pages/Browser';
import Home from './Pages/Home';
import AnimePage from './Pages/AnimePage';

function App() {
  return (
    <Router>

    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/browser' element={<Browser></Browser>}></Route>
        <Route path='/:id' element={<AnimePage></AnimePage>} ></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

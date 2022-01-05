import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import './styles/App.css';
import './styles/style.css'
import {
  BrowserRouter,
  Route,
  Routes
 
} from "react-router-dom";
import SlideBar from './components/SlideBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SlideBar/>
        <Routes>
          <Route exact={true} path="/" element={<MovieCard/>}/>
          <Route  exact={true} path="/movielist" element={<MovieList/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

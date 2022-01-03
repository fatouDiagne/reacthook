import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import './styles/App.css';
import './styles/style.css'
import {
  BrowserRouter,
  Route,
  Routes
 
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieCard/>} />
           <Route path="movielist" element={<MovieList/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

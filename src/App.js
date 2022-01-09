import './styles/App.css';
import MovieCard from './components/MovieCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MovieCard/>}/>
        </Routes>
       </Router> 
    </div>
  );
}

export default App;

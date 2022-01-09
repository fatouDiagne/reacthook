import './styles/App.css';
import MovieCard from './component/MovieCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<MovieCard/>}/>
        </Routes>
    </div>
  );
}

export default App;

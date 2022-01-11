import './styles/App.css';
import MovieCard from './component/MovieCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './component/Description'



function App() {
  return (
    <div>
     
          <Routes>
              <Route exact  path="/" element={<MovieCard/>}/>
              <Route path="/description/:id" element={<Description/>}/>
          </Routes>
     
    </div>
  );
}

export default App;

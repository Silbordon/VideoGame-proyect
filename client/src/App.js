import './App.css';
import { Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import CardDetail from './pages/CardDetail/CardDetail';

function App() {
  return (
    <div className="App">
      <Route exact path="/"><Landing /></Route>
      <Route exact path="/videogames"><Home /></Route>
      <Route exact path="/videogame/:id"><CardDetail /></Route>
    </div>
  );
}

export default App;

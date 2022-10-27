import './App.css';
import { Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/"><Landing /></Route>
      <Route exact path="/videogames"><Home /></Route>
    </div>
  );
}

export default App;

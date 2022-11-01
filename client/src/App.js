import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import CardDetail from './pages/CardDetail/CardDetail';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <div className="App">
       <Switch>
      <Route exact path="/"><Landing /></Route>
      <Route exact path="/videogames"><Home /></Route>
      <Route exact path="/videogame/:id"><CardDetail /></Route>
      <Route path="*"><Error404 /></Route>
      </Switch>
    </div>
  );
}

export default App;

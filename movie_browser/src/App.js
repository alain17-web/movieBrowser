import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Title from './components/Title';
import HomeImage from './components/HomeImage';
import Trending from './components/Trending';
import Nav from './components/Nav';

function App() {
  return (
  <body>
  <div className="App">
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/discover">Discover</Link>
          </li>
          <li>
            <Link to="/detail">Detail</Link>
          </li>
        </ul>
      </nav>

      
      <Switch>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  <Title/>
  <HomeImage/>
  <Trending/>
  <Nav/>
</div>
</body>
);
}

function Home() {
return <h2>Home</h2>;
}

function Discover() {
return <h2>Discover</h2>;
}

function Detail() {
return <h2>Detail</h2>;
}
 


export default App;

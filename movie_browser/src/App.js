import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import './App.scss';
import Detail from "./components/Detail";
import Discover from "./components/Discover";
import Home from './components/Home';
import Profile from './components/Profile'



function App() {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/discover">
          <Discover/>
        </Route>
        <Route exact path="/detail">
          <Detail/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </div> 
  </Router>
  )
}   

export default App;

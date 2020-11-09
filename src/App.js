import './App.css';
import {useState} from "react"
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import Login from "./components/login/Login"
import Homepage from "./components/homepage/Homepage"
import Register from "./components/register/Register"
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  const [isUserLogged, setIsUserLogged] = useState(false)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">{ !isUserLogged ? <Homepage /> : <Dashboard setIsUserLogged={setIsUserLogged}/>}</Route>
          <Route path="/register"><Register /></Route>
          <Route path="/login"><Login isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}/></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

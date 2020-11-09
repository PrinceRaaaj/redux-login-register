import './App.css';
import {useState} from "react"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

function App() {

  const [isRegistered, setIsRegistered] = useState(false)

  return (
    <div className="App">
      { !isRegistered ? <Register setIsRegistered={setIsRegistered} /> : <Login />}
    </div>
  )
}

export default App;

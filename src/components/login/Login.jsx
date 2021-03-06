import React, {useState, useEffect} from "react"
import {Link, Redirect} from "react-router-dom"
import store from "../../store/store"
import "./Login.css"

export default function Login({isUserLogged, setIsUserLogged}){
    const [registeredUser, setRegisteredUser] = useState()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    useState(()=>{
        setRegisteredUser(store.getState())
    }, [])

    function login(event){
        event.preventDefault()
        if(registeredUser.email === email){
            if(registeredUser.password === password){
                setIsUserLogged(true)
            } else {
                console.log("Wrong Password")
            }
        } else {
            console.log("User not found")
        }
        
    }

    const style={
        paddingLeft:"13px",
        fontWeight:"bold",
        fontColor:"black"
    }

    return  <div className="login">
    {
        !isUserLogged 
        ?
        <>
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="Your Email" name="email" value={email} onChange={e=>setEmail(e.target.value)} required />
                <input type="password" placeholder="Your password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                <button onClick={login}>Login</button>
            </form>
            <hr />
            <span><Link to="/register" style={{textDecoration: "none"}}><button>Register</button></Link></span>
            <Link to="/" style={{textDecoration: "none"}}><span style={style} >{"<- Back to home"}</span></Link>
        </>
        :
        <Redirect to="/" />
        }
    
</div>
}
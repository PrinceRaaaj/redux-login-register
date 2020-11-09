import React, {useState} from "react"
import store from "../../store/store"
import {Link, Redirect} from "react-router-dom"
import {actionCreator} from "../../store/actionCreator"
import "./Register.css"

export default function Register(){

    const [isRegistered, setIsRegistered] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [password, setPassword] = useState("")

    const style={
        paddingLeft:"13px",
        fontWeight:"bold",
        fontColor:"black"
    }

    function register(event){
        event.preventDefault()
        const user = {
            name,
            email,
            phone,
            city,
            state,
            password
        }
        store.dispatch(actionCreator.createUser(user))
        setIsRegistered(true)
    }
    
    return <>{ 
        !isRegistered 
        ? 
        <div className="register">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Full Name" name="name" value={name} onChange={e=>setName(e.target.value)} required />
                <input type="text" placeholder="Email Id" name="email" value={email} onChange={e=>setEmail(e.target.value)} required />
                <input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={e=>setPhone(e.target.value)} required />
                <div className="location">
                    <input type="text" placeholder="City" name="city" value={city} onChange={e=>setCity(e.target.value)} required />
                    <input type="text" placeholder="State" name="state" value={state} onChange={e=>setState(e.target.value)} required />
                </div>
                <input type="password" placeholder="Set password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                <button onClick={register}>Register</button>
            </form>
            <hr />
            <span><Link to="/login" style={{textDecoration: "none"}}><button>Login</button></Link></span>
            <Link to="/" style={{textDecoration: "none"}}><span style={style} >{"<- Back to home"}</span></Link>
        </div>
        :
        <Redirect to="/login" />
        }
        </>

}
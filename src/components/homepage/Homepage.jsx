import React from "react";
import {Link, Switch} from "react-router-dom";
import "./Homepage.css";

export default function Homepage(){


    return <div className="homepage">
                <img src="https://www.pngarts.com/files/1/Namaste-Logo-PNG-Image-Background.png" alt="Postbook"/>
                <h1>Welcome</h1>
                <hr />
                <div className="homepage__button">
                    <span><Link to="/register" style={{textDecoration: "none"}}><button>Register</button></Link></span>
                    <span><Link to="/login" style={{textDecoration: "none"}}><button>Login</button></Link></span>
                </div>
            </div>
            
}
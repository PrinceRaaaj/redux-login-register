import React from "react";
import {Link, Switch} from "react-router-dom";
import "./Homepage.css";

export default function Homepage(){


    return <div className="homepage">
                <img src="https://logopond.com/logos/bd53ab10470e5e0e6a06d5be9f8f61d1.png" alt="Postbook"/>
                <h1>Welcome to Postbook</h1>
                <hr />
                <h3>A new social media platform for Next generation.</h3>
                <div className="homepage__button">
                    <Switch>
                        <Route exact path="/"><Register /></Route>
                    </Switch>
                    <span><Link to="/register" style={{textDecoration: "none"}}><button>Register</button></Link></span>
                    <span><Link to="/login" style={{textDecoration: "none"}}><button>Login</button></Link></span>
                </div>
            </div>
            
}
import React from "react"
import store from "../../store/store"
import "./dashboard.css"
import {actionCreator} from "../../store/actionCreator"

export default function Dashboard(){

    function logout() {
        store.dispatch(actionCreator.logoutUser())

    }

    return <>
        <h1>Dashboard</h1>
        <h2>Welcome {store.getState().name}</h2>
    </>
} 
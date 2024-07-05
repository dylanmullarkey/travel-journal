import React from "react"
import "../App.css"

export default function Nav(){
    return(
        <nav className="nav--container">
            <img src="./globe.png" alt="Globe icon" className="globe--icon"/>
            <h1 className="nav--text">my travel journal.</h1>
        </nav>
    )
}
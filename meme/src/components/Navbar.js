import React from "react";
import { ReactDOM } from "react";
import '../style.css'

export default function Navbar(){
    return(
        <nav className="nav-bar">
            <img className="img" src="./images/face.png"></img>
            <span className="logo-text">Meme Generator</span>
            <span className="name">React Course - Project 3</span>
        </nav>
    )
}
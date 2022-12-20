import React from "react";
import { ReactDOM } from "react";
import '../style.css'
import data from '../data'

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("") 
    function getMemeImage() {
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return(
        <div>
        <form className="form">
            <input className="form--input" placeholder="Top"></input>
            <input className="form--input" placeholder="Button"></input>
            <button onClick= {Meme} className="form--button">Get a new meme image</button>
        </form>
            <img src={memeImage}></img>
        </div>
    )
}
import React from 'react'
import ReactDOM from 'react-dom'
import slide from '../images/slide.png'
import '../style.css'


export default function Hero(){
    return(
        <section className='hero'>
            <img className='slide' src={slide}/>
            <h1 className='title'>Online Experiences</h1>
            <p className='detail'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
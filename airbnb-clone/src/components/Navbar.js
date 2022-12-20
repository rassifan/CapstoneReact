import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../images/Vector.png'
import '../style.css'


export default function Navbar(){
    return(
       <nav>
        <img className='nav-logo' src={logo}/>
       </nav> 
    )
}
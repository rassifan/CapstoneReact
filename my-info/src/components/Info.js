import React from 'react'
import ReactDOM from 'react-dom'
import '../style.css'
import pic from '../images/Pic.jpg'
export default function Info(){
    return(
    <div className='card'>
        <img className='pic' src={pic}/>
        <header className='info-card'> 
            <h1 className='name'>Sifan Tilahun</h1>
            <h3 className='duty'>Frontend Developer</h3>
            <h4 className='site'>Ras.com</h4>
            <button className='email'><i class="fa-solid fa-envelope"></i>Email</button>
            <button className='link'><i class="fa-brands fa-linkedin"></i>Linkedin</button>
        </header>
    </div>
    )
}
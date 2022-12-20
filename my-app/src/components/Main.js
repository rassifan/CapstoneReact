import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

export default function Main(){
    return(
        <div className='List'>
            <h1 className='List-header'>Fun Facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>was originally created by jordan Walke</li>
                <li>Has well over 100K stars on github</li>
                <li>Is maintanined by Facebook</li>
                <li>Powers thousonds of enterprise app, including mobile apps</li>

            </ul>

        </div>
        )
}
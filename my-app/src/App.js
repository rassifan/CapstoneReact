import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import app from '../componenet/style'



export default function App(){
    return(
        <div className='app'>
            <Navbar/>
            <Main/>
        </div>
    )
}
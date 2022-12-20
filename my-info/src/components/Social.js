import React from 'react'
import ReactDOM from 'react-dom'
import T from '../images/t.png'
import F from '../images/f.png'
import I from '../images/i.png'
import G from '../images/g.png'

export default function Social(){
    return(
        <div className='footer'>
            <img srs = {T}/>
            <img srs = {F}/>
            <img srs = {I}/>
            <img srs = {G}/>
        </div>
    )
}
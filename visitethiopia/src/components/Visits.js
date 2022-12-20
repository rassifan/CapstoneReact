import React from "react";
import { ReactDOM } from "react";
import '../style.css'

export default function Visits(props){
    return(
        <div className="visit">
            <img className="img" src="../images/download.jpg"></img>
            <div className="info">
                <img src="../images/star.png" className="card--star"/>
                <span className="contry">{props.place.location}</span>
                <span className="link"><a href={props.place.googleMapsUrl}>View on Google Maps</a></span>
                <p className=" title">{props.place.title}</p>
                <p className="date">{props.place.startDate} - {props.place.endDate}</p>
                <p className="detail">{props.place.description}</p>
            </div>
        </div>
    )
}
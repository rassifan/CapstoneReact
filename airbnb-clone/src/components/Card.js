import React from "react"

export default function Card(props) {
    let tag
    if (props.openSpots === 0){
        tag = "SOLD OUT"
    } else if(props.location ==="Online"){
        tag = "ONLINE"
    }
    return (
        <div className="card">
            {tag && <div className="card--badge">{tag}</div>}
            <img src={`../images/${props.img}` } alt="description of image" className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="description of image"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
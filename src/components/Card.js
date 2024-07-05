import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={`${props.imageUrl}`} className="card--trip-img"></img>
            <div className="card--info-container">
                <div>
                    <img src="./map-icon.png" className="card--icon-img"></img>
                    <h1 className="card--country">{props.location}</h1>
                    <a href={props.googleMapsUrl} className="card--link">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <span className="card--dates">{props.startDate} - {props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>

        </div>
    )
}
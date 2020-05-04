import React from "react"
import "./style.css"

const MatchedUser = props => (
    <div className="match">
            <img alt={props.name} src={props.imageLink} />
            <div className="match-details-div">
                <span>{props.name}</span>
                <span>{props.gender}</span>
                <span>{props.prefrence}</span>
            </div>
            <img alt={props.symbol} src={`/api/image/${props.symbol.toLowerCase()}`} />
    </div>
    )

export default MatchedUser

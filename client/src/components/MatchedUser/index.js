import React from "react"
import "./style.css"

const MatchedUser = props => (
    <div className="match">
            <img alt={props.name} src={props.imageLink} />
            <span>{props.name}</span>
            <img alt={props.symbol} src={`/api/image/${props.symbol.toLowerCase()}`} />
    </div>
    )

export default MatchedUser

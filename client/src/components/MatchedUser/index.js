import React from "react"
import "./style.css"

const MatchedUser = props => (
    <div className="match">
            <img alt={props.symbol} src={`/api/image/${props.symbol.toLowerCase()}`} />
            <img alt={props.name} src={props.imageLink} />
        <span>{props.name}</span>
    </div>
    )

export default MatchedUser

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { getOneUser } from "../../utils/API"
import "./style.css"

export default function Leedle() {

    const [ imageLink, setImageLink ] = useState("")
    const [ newMatches, setNewMatches ] = useState([])

    function change() {
        alert("fkalf")
    }

    return  <>

                <Link to="/Matches"><button>Go to matches</button></Link>
                {/* need a way to get details to matches */}
                <div id="div-pic">
                    <img alt="You" src={imageLink}/>
                    <button onClick={change}>Change</button>
                </div>
                <h1>High Horse</h1>
                    <div id="matchesDiv">
                        {newMatches.map( match => (
                            <div className="match">
                                {/* symbol */}
                                <img alt={match.name} src={match.imageLink} />
                                <p>{match.name}</p>
                            </div>
                        ))}
                    </div>
            </>
}
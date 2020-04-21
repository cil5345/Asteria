import React, { useState } from "react"
import "./style.css"

export default function Leedle() {

    const [ imageLink, setImageLink ] = useState("")
    const [ newMatches, setNewMatches ] = useState([])

    function change() {
        alert("fkalf")
    }

    return  <>

                <button>Go to matches</button>
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
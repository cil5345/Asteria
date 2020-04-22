import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getOneUser, getNewMatches } from "../../utils/API"
import "./style.css"

export default function Leedle() {

    const [ imageLink, setImageLink ] = useState("")
    const [ user, setUser ] = useState({})
    const [ newMatches, setNewMatches ] = useState([])

    function change() {
        alert("fkalf")
    }

    // useEffect(() => {
    //     setImageLink(sessionStorage.getItem("imageLink"))
    // //     console.log(sessionStorage.getItem("fb_ID"))
    // //     getOneUser(sessionStorage.getItem("fb_ID"))
    // //         .then(user => setUser(user))
    // //         .catch(err => console.log(err))
    // //     console.log("retrived this user")
    // //     console.log(user)

    //     setNewMatches([...getNewMatches(user.fb_ID)])
    //         // .then(matches => setNewMatches())
    //         // .catch(err => console.log(err))
    //     console.log("matches")
    //     console.log(newMatches)
    // })

    return  <>
                <Link to="/Matches"><button>Go to matches</button></Link>
                {/* need a way to get details to matches */}
                <div id="div-pic">
                    <img alt="You" src={imageLink}/>
                    <button id="btn" onClick={change}>Change</button>
                </div>
                <h1>High Horse</h1>
                    <div id="matchesDiv">
                        {newMatches.map( match => (
                            <div className="match">
                                <p>{match.symbol}</p>
                                <img alt={match.name} src={match.imageLink} />
                                <p>{match.name}</p>
                            </div>
                        ))}
                    </div>
            </>
}
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getOneUser, getNewMatches } from "../../utils/API"
import "./style.css"

export default function Leedle() {

    const [imageLink, setImageLink] = useState("")
    const [user, setUser] = useState({})
    const [newMatches, setNewMatches] = useState([])

    function change() {
        alert("fkalf")
    }

    useEffect(() => {
        setImageLink(sessionStorage.getItem("imageLink"))

        getOneUser(sessionStorage.getItem("fb_ID"))
            .then(u => {
                console.log(u.data)
                console.log(u.data.fb_ID)
                const thing = u.data
                setUser({ fb_ID: thing.fb_ID, name: thing.name, imageLink: thing.imageLink})
            })
            .catch(err => console.log(err))
        console.log(user)
        // setNewMatches([...getNewMatches(user.fb_ID)])
        // .then(matches => setNewMatches())
        // .catch(err => console.log(err))
        console.log("tool")
        getNewMatches(sessionStorage.getItem("fb_ID"))
            // .then(matches => setNewMatches([matches]))
            .then(matches => {
                console.log(matches)
                console.log(matches.data)
                console.log(matches.data[0].fb_ID)
            })
            .catch(err => console.log(err))
        console.log(newMatches)
    }, [])

    return <>
        <Link to="/Matches"><button>Go to matches</button></Link>
        {/* need a way to get details to matches */}
        <div id="div-pic">
            <img alt="You" src={imageLink} />
            <button id="btn" onClick={change}>Change</button>
        </div>
        <h1>High Horse</h1>
        <div id="matchesDiv">
            {newMatches.map(match => (
                <div className="match">
                    <p>{match.symbol}</p>
                    <img alt={match.name} src={match.imageLink} />
                    <p>{match.name}</p>
                </div>
            ))}
        </div>
    </>
}
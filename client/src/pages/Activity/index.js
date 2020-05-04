import React, { useState, useEffect } from "react"
import { getOneUser, getNewMatches } from "../../utils/API"
import Header from "../../components/Header/Header"
import PhotoUpload from "../../components/PhotoUpload"
import { storeInSession } from "../../utils/sessionController"
import "./style.css"

export default function Activity() {

    const [imageLink, setImageLink] = useState("")
    const [user, setUser] = useState({})
    const [newMatches, setNewMatches] = useState([])

    useEffect(() => {

        getOneUser(sessionStorage.getItem("fb_ID"))
            .then(u => {
                storeInSession(u.data)
                console.log(sessionStorage.getItem("imageLink"))
                setImageLink(sessionStorage.getItem("imageLink"))
                const userData = u.data
                setUser({ fb_ID: userData.fb_ID, name: userData.name, imageLink: userData.imageLink })
            })
            .catch(err => console.log(err))

        getNewMatches(sessionStorage.getItem("fb_ID"))
            .then(matches => {
                setNewMatches([...matches.data])
            })
            .catch(err => console.log(err))
    }, [setUser])

    return <>
        <Header />
        <div id="div-pic">
            <PhotoUpload />
        </div>
        <div id="matchesDiv">
            {newMatches.map(match => (
                <div className="match">
                    <img alt={match.symbol} src={`/api/image/${match.symbol.toLowerCase()}`} />
                    <img alt={match.name} src={match.imageLink} />
                    <p>{match.name}</p>
                </div>
            ))}
        </div>
    </>
}
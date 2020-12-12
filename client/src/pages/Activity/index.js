import React, { useState, useEffect } from "react"
import { getCurrentUser, getNewMatches } from "../../utils/API"
import Header from "../../components/Header/Header"
import LoginBG from "../../components/LoginBG/LoginBG"
import PhotoUpload from "../../components/PhotoUpload"
import MatchedUser from "../../components/MatchedUser"
import { storeInSession } from "../../utils/sessionController"
import "./style.css"

export default function Activity() {

    const [user, setUser] = useState({})
    const [newMatches, setNewMatches] = useState([])

    useEffect(() => {

        getCurrentUser(sessionStorage.getItem("fb_ID"))
            .then(u => {
                storeInSession(u.data)
                console.log(sessionStorage.getItem("imageLink"))
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
    <LoginBG />
        <div id="div-pic">
            <PhotoUpload />
        </div>
        <div id="matchesDiv">
        {newMatches.length ? newMatches.map(match => (
            <MatchedUser key={match.imageLink} name={match.name} imageLink={sessionStorage.getItem("imageLink")} symbol={match.symbol} />
        )) : <h3>Sorry no new matches currently</h3>}
        </div>
    </>
}
import React, { Component } from "react"
import { Redirect, Link } from "react-router-dom"
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header"
import Mo from "./mo.jpeg";
import "./Profile.css";
import { getCompatible, updateUser } from "../../utils/API"
import LoginBG from "../../components/LoginBG/LoginBG";

//@HACER get rid of
const dk = "debugging"

class Profile extends Component {

    state = {
        fb_ID: "",
        imageLink: "",
        redirect: null
    }

    updateUser = async () => {

        // await getAndUpdate()
        updateUser(this.state.fb_ID, this.state.symbol, this.state.gender, this.state.prefrence)
                .then(data => console.log(data))
                .catch(err => console.log(err))
    }

    getValues = async () => {

        // const fields = 
        // this.setState()
        const gender = document.querySelector(".genderInput")
        const prefrences = document.querySelector(".prefInput")
        const symbol = document.querySelector(".zodiacInput")

        sessionStorage.setItem("symbol", symbol.value)
        sessionStorage.setItem("gender", gender.value)
        sessionStorage.setItem("prefrences", prefrences.value)

        this.updateUser()
        console.log("going to matches")
    }

    componentWillMount = async () => {

        const leedle = await JSON.stringify(sessionStorage.getItem("fid_pic"))
        console.log(leedle.indexOf("|"))
        const pipe = await leedle.indexOf("|")
        await this.setState({ fb_ID: leedle.substring(0, pipe) })
        await this.setState({ imageLink: leedle.substring(pipe + 1, leedle.length - 1)})
    }

    render = () => {

        return <>
            <LoginBG />
            <Header />
            <section className="container">
                <div className="row">
                    <div className="col-4">
                        <Card title="User Profile" desc="Employee Directory" />
                        <img src={this.state.imageLink} id="my-pic" alt="Mo's pic" width="150" height="200" />
                    </div>
                    <br></br>
                    <div className="row">
                        <form>
                            <div className="grid-container">
                                <div className="grid-x grid-padding-x">
                                    {/* <div className="userName cell">
                                        <label>User Name
                                            <input type="text" value={this.state.userName} className="nameInput" placeholder="John Doe" />
                                        </label>
                                    </div>
                                    <br></br> */}
                                    <div className="gender cell">
                                        <label>Gender
                                            <div>
                                                <select className="genderInput" >
                                                    <option value="M">Male</option>
                                                    <option value="F">Female</option>
                                                </select>
                                            </div>
                                        </label>
                                    </div>
                                    <br></br>
                                    <div className="zodiac cell">
                                        <label>Zodiac Sign
                                            <div>
                                                <select className="zodiacInput" >
                                                    <option value="Aries">Aries</option>
                                                    <option value="Taurus">Taurus</option>
                                                    <option value="Gemini">Gemini</option>
                                                    <option value="Cancer">Cancer</option>
                                                    <option value="Leo">Leo</option>
                                                    <option value="Libra">Libra</option>
                                                    <option value="Scorpio">Scorpio</option>
                                                    <option value="Sagittarius">Sagittarius</option>
                                                    <option value="Capricorn">Capricorn</option>
                                                    <option value="Virgo">Virgo</option>
                                                    <option value="Aquarius">Aquarius</option>
                                                    <option value="Pisces">Pisces</option>
                                                </select>
                                            </div>
                                        </label>
                                    </div>
                                    <br></br>
                                    <div className="pref cell">
                                        <label>Select Dating Preference
                                            <div>
                                                <select className="prefInput" >
                                                    <option value="M">Male</option>
                                                    <option value="F">Female</option>
                                                    <option value="FM">Both</option>
                                                </select>
                                            </div>
                                        </label>
                                    </div>
                                    <br></br>

                                    {/* <button className="successButton" onClick={this.getValues}>Get you're matches</button> */}
      {/* <button onClick={this.getValues}>colleeeeerado</button> */}
      
<Link to="/Matches">
<button className="successButton" onClick={this.getValues}>Get you’re matches</button>
</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
            </>
    }
}
export default Profile;
import React, { Component } from "react"
import { Link } from "react-router-dom"
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header"
import "./Profile.css";
import { updateUser } from "../../utils/API"
import LoginBG from "../../components/LoginBG/LoginBG";


class Profile extends Component {
    state = {
        imageLink: ""
    }
    // hit axios create route, finds and updates user by fb_ID
    updateUser = async () => {
        
        const id = sessionStorage.getItem("fb_ID")
        const sym = sessionStorage.getItem("symbol")
        const gn = sessionStorage.getItem("gender")
        const pr = sessionStorage.getItem("prefrence")

        await updateUser(id, sym, gn, pr)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    // strips values from DOM, used to fill in user details
    getValues = async () => {

        const gender = document.querySelector(".genderInput")
        const prefrence = document.querySelector(".prefInput")
        const symbol = document.querySelector(".zodiacInput")

        sessionStorage.setItem("symbol", await symbol.value)
        sessionStorage.setItem("gender", await gender.value)
        sessionStorage.setItem("prefrence", await prefrence.value)

        this.updateUser()
    }
    // will be used to get imageLink from user
    componentWillMount = async () => {

        this.setState({ imageLink: sessionStorage.getItem("imageLink")})
        // this.setState({ name: user.name })
    }

    render = () => {
        
        return <>
            <LoginBG />
            <Header />
            <section className="container">
                <div className="row">
                    <div className="col-4">
                        <Card title="My Profile" desc="Employee Directory" />
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
                                    <br />
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
                                    <br />

                                    <Link to="/Matches">
                                        <button className="successButton" onClick={this.getValues}>Get your matches</button>
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
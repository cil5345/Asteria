import React from "react";
import Card from "../../components/Card/Card";
import Mo from "./mo.jpeg";
import "./Profile.css";

function Profile() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-4">
                    <Card title="User Profile" desc="Employee Directory" />
                    <img src={Mo} id="my-pic" alt="Mo's pic" width="150" height="200" />
                </div>
                <br></br>
                <div className="row">
                    <form>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="userName cell">
                                    <label>User Name
                                    <input type="text" className="nameInput" placeholder="John Doe" />
                                    </label>
                                </div>
                                <br></br>
                                <div className="gender cell">
                                <label>Gender
                                    <div>
                                    <select className="genderInput" >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    </div>
                                </label>
                                </div>
                                <br></br>
                                <div className="zodiac cell">
                                    <label>Zodiac Sign
                                    <div>
                                    <select className="genderInput" >
                                        <option value="Aries">Aries</option>
                                        <option value="Taurus">Taurus</option>
                                        <option value="Gemini">Gemini</option>
                                        <option value="Cancer">Cancer</option>
                                        <option value="Leo">Leo</option>
                                        <option value="Virgo">Libra</option>
                                        <option value="Scorpio">Scorpio</option>
                                        <option value="Sagittarius">Sagittarius</option>
                                        <option value="Capricorn">Capricorn</option>
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
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="both">Both</option>
                                    </select>
                                    </div>
                                </label>
                                </div>
                                <br></br>
                                <input type="submit" className="successButton" value="Get some matches"></input>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )

}
export default Profile;
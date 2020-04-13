import React, { Component } from "react"
import "./style.css"

class HelloWorld extends Component {


    stuff = () => {
        alert("stuff")
    }

    render = () => <button onClick={this.stuff}>Stuff</button>
}

export default HelloWorld
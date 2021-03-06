import React, { Component } from "react"
import io from "socket.io-client"
import "./style.css"
require("dotenv").config()
class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            message: "",
            messages: [],
            port: ""
        }
        
        this.socket = io(`108.16.92.181${this.state.port}`)
        this.socket.on('RECEIVE_MESSAGE', function (data) {
            console.log("trig'd socket")
            addMessage(data);
        })
        
        const addMessage = data => {
            console.log("trig'd addmess")
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] })
            console.log(this.state.messages)
        }
        
        this.sendMessage = ev => {
            ev.preventDefault()
            console.log("trig'd sendmess")
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({ message: '' })
        }
    }

    jawn = () => {

        const j = prompt("port number")
        this.setState({ port: j })
        this.socket = io(`108.16.92.181${this.state.port}`)
    }

    render = () => (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="">
                        <div className="card-body">
                            <div className="card-title">Global Chat</div>
                            <hr />

                            <div className="messages">
                                {this.state.messages.map(message => {
                                    return (
                                        <div>{message.author}: {message.message}</div>
                                    )
                                })}
                            </div>

                            <div className="footer">
                                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
                                <br />
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
                                <br />
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                                <button onClick={this.jawn}>JAwn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
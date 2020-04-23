const express = require("express")
const socket = require('socket.io')
const mongoose = require("mongoose")
const app = express()
// var app = require('express')();
// var server = require('http').Server(app);

//diff medium has without (server)

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

require("./routes/mongo-routes")(app)
require("./routes/test-routes")(app)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/asteriaDB", { useNewUrlParser: true });


// Start the API server
server = app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

io = socket(server)
io.on('connection', socket => {
    console.log('user is connected');

    socket.on('chat message', function (msg) {
        console.log('message: ' + JSON.stringify(msg));
        io.emit('chat message', msg)
        // Mongo.conversation.push(msg)
    })
})
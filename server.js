const express = require("express")
const mongoose = require("mongoose")
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// const bodyParser =  require("body-parser")
require("dotenv").config()

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "50mb" }))

// app.use(bodyParser.urlencoded({ limit: "50mb" }))
// app.use(bodyParser.json({ limit: "50mb" }))

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

require("./routes/user-routes")(app)
require("./routes/image-routes")(app)

// Connect to the Mongo DB
mongoose.connect(process.env.DB_URI || "mongodb://localhost/asteriaDB", { useNewUrlParser: true });

io.on('connection', function(socket){
    console.log('user is connected');

    socket.on('chat message', function(msg) {
        console.log('message: ' + JSON.stringify(msg));
        io.emit('chat message', msg)
        // Mongo.conversation.push(msg)
    })
})

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

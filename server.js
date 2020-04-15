const express = require("express")
const mongoose = require("mongoose")
const app = express()


const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

require("./routes/mongo-routes")(app)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/asteriaDB", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('user is connected');
  socket.on('chat message', function(msg) {
      console.log('message: ' + JSON.stringify(msg));
      io.emit('chat message', msg)
  })
})

http.listen(3002, function(){
  console.log('listening on :3002');
})

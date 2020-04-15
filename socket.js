const express = require("express")
const app = express()
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

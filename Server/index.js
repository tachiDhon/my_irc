const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 4000;

const router = require('./router');

const app = express();
const server =  http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
   console.log('User connected !!');
   
   socket.on('join', ({ username, room }, callback) => {
      console.log(username, room);
   });

   socket.on('disconnect', () => {
      console.log('User disconnected !');
   });
});

app.use(router); // calling it as middleware 

server.listen(PORT, () => 
   console.log(`Server has started on port ${PORT}`)
);
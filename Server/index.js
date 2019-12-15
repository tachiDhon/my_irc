const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 4000;

const app = express();
const server =  http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
   const { id } = socket.client;
   console.log(`User connected: ${id}`);
   socket.on('join', (username, room) => {
      console.log({user: username, room_num:room});
   });

   socket.on('chat-message', ({ username, message }) => {
      io.emit("chat message", { username,message });
   });

      
   socket.on('disconnect', () => {
      console.log('User disconnected !');
   });
   
});

server.listen(PORT, () => 
   console.log(`Server has started on port ${PORT}`)
);
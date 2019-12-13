const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 4000;
const router = require('./router');

const app = express();
const server =  http.createServer(app);
const io = socketio(server);
// const message = [];  comme isma pour stocker le message dans le tableau.

io.on('connection', (socket) => {
   console.log('User connected !!');
   
   socket.on('VERIFY_USER', (username, room) =>{
      console.log(username, room);
   });

   socket.on('MESSAGE', (mess) => {
      console.log(mess);
   });
   
   // socket.on('join', ( username, message, room ) => {
   //    console.log(username, message, room);
   // });
      
   socket.on('disconnect', () => {
      console.log('User disconnected !');
   });
      
   app.use(router); // calling it as middleware 
});

server.listen(PORT, () => 
   console.log(`Server has started on port ${PORT}`)
);
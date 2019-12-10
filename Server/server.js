var app = require('express') ();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// app.get('/', (req, res) => {
//    res.sendFile(__dirname + '');
// });

io.on('connection', function(socket){
   console.log('A user connected');
   socket.on('disconnect', () => {
      console.log('User disconnected');
   });
});

io.on('/nick', function(){
   console.log('/nick');
});

server = http.listen(4001, function(){
   console.log('listening on *:4001');
});

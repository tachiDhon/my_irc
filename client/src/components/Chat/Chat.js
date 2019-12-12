import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

// import './Chat.css';

let socket;

const Chat = ({ location }) => {
   const [username, setUserName] = useState('');
   const [room, setRoom] = useState('');
   const ENDPOINT = 'localhost:4000';

   useEffect(() => {
      const { username, room } = queryString.parse(location.search);

      socket = io(ENDPOINT);

      setUserName(username);
      setRoom(room);

      socket.emit('join', { username, room }, () => {
      
      });

   }, [ENDPOINT, location.search]);

   return (
      <h1>Chat</h1>
   );
}

export default Chat;  
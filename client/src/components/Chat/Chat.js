import React from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

class Chat extends React.Component {
   constructor() {
      super();
      this.state = {
         username: '',
         room: ''
      };
      this.change = this.change.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this);
      this.send = this.send.bind(this);
      
   }

   change(e) {
      console.log(e);
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   send() {
      socket.emit('join', (this.state.username, this.state.room), () => {
         
      });
   }

   componentDidMount() {
      const values = queryString.parse(this.props.location.search)
      console.log(values.filter);
      console.log(values.origin);
   } 

   render() {
      return(
         <div className="Chat">
            <h1>Chat!</h1>
            <div className="Chat-header" onSubmit={ this.change }>
               <div>

               </div>
               <button type="submit" onClick={ () => this.send }>Send</button>
            </div>
         </div>
      );
   }
}

export default Chat;  

// import React, { useState, useEffect } from 'react';
// const Chat = ({ location }) => {
//    const [username, setUserName] = useState('');
//    const [room, setRoom] = useState('');
//    const ENDPOINT = 'localhost:4000';

//    useEffect(() => {
//       const { username, room } = queryString.parse(location.search);

//       socket = io(ENDPOINT);

//       setUserName(username);
//       setRoom(room);

//       socket.emit('join', { username, room }, () => {
      
//       });

//    }, [ENDPOINT, location.search]);

//    return (
//       <h1>Chat</h1>
//    );
// }


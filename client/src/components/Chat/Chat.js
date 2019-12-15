import React from 'react';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:4000');

export class Chat extends React.Component {
   constructor() {
      super();
      this.state = {
         username: "",
         message: "",
         chat: [],
         room:null
      };
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this); 
      // this.renderChat = this.renderChat.bind(this); 
   }

   handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
   };

   // handleSubmit(e) {
   //    e.preventDefault(); 
   //    socket.emit("chat message", this.state.message);
   //    this.setState({ message: "" });
   // }

   handleSubmit = () => {
      const { username, message } = this.state;
      socket.emit("chat message", { username, message });
      this.setState({ message: "" });
   };

   componentDidMount() {
      socket.on('chat-message', ({ username, message }) => {
         this.setState({
            chat: [...this.state.chat, { username, message }]
         });
      })

   } 

   renderChat() {
      const { chat } = this.state;
      return chat.map(({ username, message }, idx) => (
        <div key={idx}>
          <span style={{ color: "blue" }}>{ username }: </span>
  
          <span>{ message }</span>
        </div>
      ));
   }

   componentWillUnmount() {
      socket.close();
   }

   render() {
      return(
         <div className="Chat">
            <h1>Chat!</h1>
            <div className="Chat-main">
               <form className="Form-chat" >
                  <div className="Form-field">
                     <span>Username</span>
                     <input
                        name="username"
                        onChange={e => this.handleChange(e)}
                        value={this.state.username}
                     />
                     <span>Message</span>
                     <input
                        name="message"
                        onChange={e => this.handleChange(e)}
                        value={this.state.message}
                     />
                     <button onClick={this.handleSubmit}>Send</button>
                     <div>{this.renderChat()}</div>
                  </div>
                  <br />
               </form>   
            </div>
         </div>
      );
   }
}

export default Chat;     

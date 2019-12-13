import React from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:4000');

export class Chat extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username:null,
         room:null,
         message:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this);
      this.handleSend = this.handleSend.bind(this);
      
   }

   handleChange(e) {
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   handleSubmit(event) {
      event.preventDefault();
   }

   handleSend() {
      socket.emit('join', (this.state.username, this.state.message, this.state.room), () => {
         
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
            <div className="Chat-main">
               <form className="Form-chat" onSubmit={this.handleSubmit}>
                  <div className="Form-field">
                     <textarea 
                        id="message" 
                        name="textarea" 
                        value={this.state.message}
                        rows={5}
                        cols={230}
                        onChange={this.handleChange}>
                     </textarea>
                  </div>
                  <button type="submit" onClick={this.handleSend}>Send</button>
                  <br />
               </form>   
            </div>
         </div>
      );
   }
}

export default Chat;     
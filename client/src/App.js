import React from 'react';
import './App.css';
import socketIOClient from "socket.io-client";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:4001"
    }
  }
  
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.emit("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    return(
      <div className="App">
        <h1>Welcome to My Irc!</h1>
        <div className="App-header">
          <form className="form-register">
            <fieldset>
              <legend>Irc Chat</legend>
              <br/>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="username" required />
              <br />
              <label htmlFor="server">Server: </label>
              <input type="text" name="server" id="server" />

              <input type="submit" value="Submit"></input>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
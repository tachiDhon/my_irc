import React from 'react';
import './Client.css';

export class Client extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      room: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('The form was submitted with the following data');
    console.log(this.state);

    //redirecting path
    (!this.state.username || !this.state.room) ? e.preventDefault() : this.props.history.push(`./chat`)
  }

  render() {
    return(
      <div className="App">
        <h1>Welcome to My Irc!</h1>
        <div className="App-header">
          <form className="form-register" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Irc Chat</legend>
              <br/>
              <label htmlFor="username">Username: </label>
              <input type="text" className="username" id="username" value={this.state.username} onChange={this.handleChange} />
              <br />
              <label htmlFor="room">Channel: </label>
              <input type="text" className="room" id="room" value={this.state.room} onChange={this.handleChange} />

              <input type="submit" value="Submit"></input>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Client;
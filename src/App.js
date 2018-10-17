import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  state = {
    messages : [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  addMessage = (message) => {
    this.setState((currentState) => {
    	let newMessages = currentState.messages
        newMessages.push(message)
        return {messages: newMessages}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    	  <Chat messages={this.state.messages} newMessageHandler={this.addMessage} username="Amy" />
		  <Chat messages={this.state.messages} newMessageHandler={this.addMessage} username="John" />
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react'
import ChatMessage from './ChatMessage'
import NewMessage from './NewMessage'

class Chat extends Component {
  render() {
    const username = this.props.username
    const messages = this.props.messages
    
    return <div className="chat-window">
      	<h2>Super Awesome Chat</h2>
      	<div className="name sender">{username}</div>
        <ul className="message-list">
          {messages.map((message, index) => (
            <ChatMessage message={message} username={username} key={index} />
          ))}
        </ul>
        <NewMessage username={username} newMessageHandler={this.props.newMessageHandler} />
      </div>
  }
}

export default Chat
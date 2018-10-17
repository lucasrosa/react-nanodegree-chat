import React, {Component} from 'react'

class ChatMessage extends Component {
  render () {
    let username = this.props.username
    let message = this.props.message
    let className = message.username === username ? 'message sender' : 'message recipient'
    let text = `${message.username}: ${message.text}`
    return <li className={className}>
        <p>{text}</p>
    </li>
  }
}

export default ChatMessage
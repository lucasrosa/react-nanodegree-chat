import React, {Component} from 'react'

class NewMessage extends Component {
  state = {
    message : ""
  }

  handleChange = (event) => {
    let newMessage = event.target.value
	this.setState(() => ({
      message: newMessage
    }))    
  }

  addMessage = (event) => {
    event.preventDefault()
    let newMessage = {
      text: this.state.message,
      username: this.props.username
    }
    
    this.props.newMessageHandler(newMessage)
    this.setState(() => ({
    	message: ""
    }))
  }

  render() {
    return <div>
          <form className="input-group">
            <input value={this.state.message} type="text" className="form-control" onChange={this.handleChange} placeholder="Enter your message..." />
            <div className="input-group-append">
                <button onClick={this.addMessage} className="btn submit-button" >SEND</button>
            </div>
          </form>
        </div>
  }
}

export default NewMessage
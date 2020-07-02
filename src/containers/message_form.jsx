import React, { Component } from 'react';


class MessageForm extends Component {
  render() {
    return (
      <form className="message-form">
        <input type="text" name="message" id="" />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default MessageForm;

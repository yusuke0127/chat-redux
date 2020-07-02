import React, { Component } from 'react';
import Message from './message';
import MessageForm from './message_form';

class MessageList extends Component {
  render() {
    return (
      <div className="messages">
        <div className="message-channel">
          <h3>Channel Name</h3>
        </div>
        <div className="message_list">
          <ul className="list-group">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </ul>
        </div>
        <div className="message-input">
          <MessageForm />
        </div>
      </div>
    );
  }
}

export default MessageList;

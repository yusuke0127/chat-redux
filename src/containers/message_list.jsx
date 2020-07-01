import React, { Component } from 'react';
import Message from './message';

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <Message />
      </div>
    );
  }
}

export default MessageList;

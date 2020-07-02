import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <li className="list-group-item">
        <p>{this.props.message.author} - {this.props.message.created_at}</p>
        <p>{this.props.message.content}</p>
      </li>
    );
  }
}

export default Message;

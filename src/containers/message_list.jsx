import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    // console.log(this);
    // console.log(this.props.messages);
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    // console.log(this.props.messages);
    return (
      <div className="messages">
        <div className="message-channel">
          <h3>{this.props.selectedChannel}</h3>
        </div>
        <div className="message_list">
          <ul className="list-group">
            {this.props.messages.map((message, index) => {
              return <Message message={message} index={index} key={message.author} channel={message.selectedChannel} />;
            })}
          </ul>
        </div>
        <div className="message-input">
          <MessageForm />
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

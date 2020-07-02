import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    console.log(this.props.messages);
    return (
      <div className="messages">
        <div className="message-channel">
          <h3>Channel Name</h3>
        </div>
        <div className="message_list">
          <ul className="list-group">
            {this.props.messages.map((message, index) => {
              return <Message message={message} index={index} key={message.author} />;
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
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

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
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresh = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
    // this.fetchMessages();
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    // console.log(this.props.messages);
    return (
      <div className="messages-container">
        <div className="message-channel">
          <h3>Channel #{this.props.selectedChannel}</h3>
        </div>
        <div className="message-list" ref={(list) => { this.list = list; }}>
          <ul className="list-group">
            {this.props.messages.map((message, index) => {
              return <Message message={message} index={index} key={message.id} />;
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


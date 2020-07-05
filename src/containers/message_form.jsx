import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    console.log(this.props);
    console.log(this.props.value);
    console.log(this.props.currentUser);
    console.log(this.props.channel);

    event.preventDefault();
    this.props.createMessage(this.props.channel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage }, dispatch
  );
}

function mapStateToprops(state) {
  return {
    channel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToprops, mapDispatchToProps)(MessageForm);

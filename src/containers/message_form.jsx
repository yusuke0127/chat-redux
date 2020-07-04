import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.value);
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" name="message" id="" onChange={this.handleChange} value={this.state.value} />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapStateToprops(state) {
  return {

  };
}

export default MessageForm;

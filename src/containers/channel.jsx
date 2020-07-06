import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions';

class Channel extends Component {
  handleClick = () => {
    // console.log(this.props);
    this.props.selectChannel(this.props.channel);
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    console.log(this.props);
    return (
      <li className="list-item" onClick={this.handleClick}>#{this.props.channel}</li>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages }, dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Channel);

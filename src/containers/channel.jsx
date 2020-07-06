import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';


class Channel extends Component {
  handleClick = () => {
    console.log('clicking');
  }

  render() {
    console.log(this.props);
    return (
      <li className="list-item" onClick={this.handleClick}>#{this.props.channel}</li>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel }, dispatch
  );
}
export default Channel;

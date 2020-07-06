import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ChannelList extends Component {
  render() {
    return (
      <div className="channels">
        <h3>Workspace</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToprops, null)(ChannelList);

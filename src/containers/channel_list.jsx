import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Channel from './channel';

class ChannelList extends Component {
  render() {
    return (
      <div className="channels-container">
        <h3>Chat</h3>
        <ul className="channel-list">
          {this.props.channels.map((channel) => {
            return <Channel channel={channel} key={channel.id} />;
          })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, null)(ChannelList);

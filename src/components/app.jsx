import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="side-bar">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt=""/>
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;

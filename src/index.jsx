// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
// import messages from './messages';

// State and reducers
const intitialState = {
  messages: [],
  channels: ["general", "react", "tokyo"],
  selectedChannel: "general",
  currentUser: prompt("Type in your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const reducers = combineReducers({
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer
  // changeMe: (state = null, action) => state
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, intitialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

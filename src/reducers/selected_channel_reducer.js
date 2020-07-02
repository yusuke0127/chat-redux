const selectedChannelReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CHANNEL':
      return action.payload;
    default:
      return state;
  }
};

export default selectedChannelReducer;

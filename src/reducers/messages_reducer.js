import { FETCH_MESSAGES, MESSAGE_CREATED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_CREATED: {
      const stateCopy = state.slice(0);
      stateCopy.push(action.payload);
      return stateCopy;
    }
    default:
      return state;
  }
}

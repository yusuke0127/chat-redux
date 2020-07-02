// TODO: add and export your own actions
import messages from '../messages';

export function fetchMessages() {
  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  };
}

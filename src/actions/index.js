// TODO: add and export your own actions
// import messages from '../messages';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`).then(response => response.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

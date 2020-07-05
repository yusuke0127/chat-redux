// TODO: add and export your own actions
// import messages from '../messages';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_CREATED = 'MESSAGE_CREATED';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`).then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  console.log(channel);
  console.log(author);
  console.log(content);

  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_CREATED,
    payload: promise
  };
}


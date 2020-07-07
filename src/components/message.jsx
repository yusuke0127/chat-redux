import {emojify} from 'react-emojione';
import React, { Component } from 'react';

function hashCode(str) { // java String#hashCode
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

class Message extends Component {
  // intToRGB(hashCode(your_string))
  render() {
    const author = this.props.message.author;
    const date = new Date(this.props.message.created_at).toLocaleTimeString();
    const content = this.props.message.content;
    return (
      <li className="list-group-item">
        <span style={{ color: hashCode(author) }}>{author}</span> - <small> {date}</small>
        <p>{emojify(content)}</p>
      </li>
    );
  }
}

export default Message;

// function strToRGB(str) {
//   let hash = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     hash = str.charCodeAt(i) + ((hash << 5) - hash);
//   }
//   const c = (hash & 0x00FFFFFF)
//     .toString(16)
//     .toUpperCase();
//   return `#${"00000".substring(0, 6 - c.length)}${c}`;
// }
// const Message = (props) => {
//   const { created_at, author, content } = props.message;
//   const time = new Date(created_at).toLocaleTimeString();
//   return (
//     <div className="message-container">
//       <i className="author">
//         <span style={{ color: strToRGB(author) }}>{author}</span>
//         <small>{time}</small>
//       </i>
//       <p>{emojify(content)}</p>
//     </div>
//   );
// };

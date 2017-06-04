import React from 'react';

const ChatMessage = ({ message, username }) => (

    <li className='chat-message-li'>
        <img src={`https://twitter.com/${username}/profile_image?size=original`} style={{
            width: 24,
            height: 24
        }}/>
        <strong>@{username}: </strong> {message}
    </li>
);

export default ChatMessage;
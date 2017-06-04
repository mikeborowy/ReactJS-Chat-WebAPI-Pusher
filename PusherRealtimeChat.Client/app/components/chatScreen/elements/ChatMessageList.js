import React from 'react';
import ChatMessage from './ChatMessage';

const ChatMessageList = ({ messages }) => {

    return (
        <ul>
            {messages.map((message, index) =>
                <ChatMessage
                    key={index}
                    message={message.Text}
                    username={message.AuthorTwitterHandle} />
            )}
        </ul>
    );
}

export default ChatMessageList;
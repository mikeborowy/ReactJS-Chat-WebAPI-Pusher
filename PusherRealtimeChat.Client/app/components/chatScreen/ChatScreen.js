import React from 'react';
import ChatInputForm from './elements/ChatInputForm';
import ChatMessageList from './elements/ChatMessageList';

const ChatScreen = ({ onSubmit, messages }) => {

    return (
        <div>
            <ChatMessageList messages={messages} />
            <ChatInputForm onSubmit={onSubmit} />
        </div>
    );
}

export default ChatScreen;
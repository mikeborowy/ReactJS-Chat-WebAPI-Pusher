import React from 'react';

const ChatInputForm = ({ onSubmit }) => {

    let messageInput;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(messageInput.value);
            messageInput.value = "";
        }}>
            <input type="text" placeholder="message" ref={node => {
                messageInput = node;
            }} />
            <input type="submit" value="Send" />
        </ form>
    );
};

export default ChatInputForm;
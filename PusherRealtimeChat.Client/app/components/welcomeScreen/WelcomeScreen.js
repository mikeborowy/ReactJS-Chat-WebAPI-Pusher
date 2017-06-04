import React from 'react';

const WelcomeScreen = ({ onSubmit }) => {

    let usernameInput;

    return (
        <div>
            <p>Enter your Twitter name and start chatting!</p>
            <form onSubmit={evt => {

                evt.preventDefault();
                onSubmit(usernameInput.value);

            }}>
                <input type="text" placeholder="Enter Twitter handle here" ref={node => {
                    usernameInput = node;
                }} />
                <input type="submit" value="Join the chat" />
            </form>
        </div>
    );
};

export default WelcomeScreen;

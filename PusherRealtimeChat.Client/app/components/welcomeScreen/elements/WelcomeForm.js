import React from 'react';

const WelcomeForm = ({ onSubmit }) => {

    console.log(onSubmit)

    let usernameInput;

    return (
        <form onSubmit={evt => {

            evt.preventDefault();
            onSubmit(usernameInput.value);

        }}>
            <input type="text" placeholder="Enter Twitter handle here" ref={node => {usernameInput = node}} />
            <input type="submit" value="Join the chat" />
        </form>
    )
}

export default WelcomeForm;

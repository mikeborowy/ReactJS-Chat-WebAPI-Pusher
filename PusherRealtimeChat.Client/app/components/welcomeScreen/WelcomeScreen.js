import React from 'react';
import WelcomeForm from './elements/WelcomeForm';

const WelcomeScreen = ({ onSubmit }) => {

    return (
        <div>
            <p>Enter your Twitter name and start chatting!</p>
            <WelcomeForm onSubmit={ onSubmit } />
        </div>
    );
};

export default WelcomeScreen;

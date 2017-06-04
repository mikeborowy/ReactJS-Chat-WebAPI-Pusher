import React from 'react';
import {Route, IndexRoute} from 'react-router';
//Components
import App from './components/App';
import WelcomeScreen from './components/welcome/WelcomeScreen';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomeScreen}/>
    </Route>
);


//Babel
import 'babel-polyfill';
//React
import React from 'react';
import ReactDOM from 'react-dom';
//Cfg
import cfg from '../cfg';
//3rd part
import Pusher from 'pusher-js';
//Screens
import WelcomeScreen from './welcomeScreen/WelcomeScreen';
import ChatScreen from './chatScreen/ChatScreen';
import axios from 'axios';


class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            authorTwitterHandle: "",
            messages: []
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

        console.log("re-render")

        axios
            .get(`${cfg.url}/api/messages`)
            .then(response => {

                this.setState({
                    messages: response.data
                });

                var pusher = new Pusher('6afcfac36f8061b36feb', {
                    encrypted: true
                });

                var chatRoom = pusher.subscribe('messages');

                chatRoom.bind('new_message', message => {

                    this.setState({
                        messages: this.state.messages.concat(message)
                    });

                });
            });
    }

    onSubmit(author) {

            this.setState({
                authorTwitterHandle: author
            })
    }

    sendMessage(messageText) {

        var message = {
            Text: messageText,
            AuthorTwitterHandle: this.state.authorTwitterHandle
        }

        axios
            .post(`${cfg.url}/api/messages`, message)
            .then(response => {

                this.setState({
                    messages: this.state.messages.concat(message)
                });

            })
            .catch(() => alert('Something went wrong :('));
    }

    render() {
        if (this.state.authorTwitterHandle === '') {
            return (
                <WelcomeScreen onSubmit={this.onSubmit} />
            );
        } else {
            return <ChatScreen messages={this.state.messages} onSubmit={this.sendMessage} />;
        }
    }
}

export default App;

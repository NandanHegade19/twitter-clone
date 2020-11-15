import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../Styles/Widgets.css';
import '../Styles/MessagesPage.css';
import { Button } from '@material-ui/core';

function MessagesPage() {
    return (
        <div className = "message">
            <div className = "newsfeed__header">
                <h2>Messages</h2>
            </div>
            <div className = "message__input">
                <SearchIcon className = "message__searchicon"/>
                <input type = "text" placeholder = "Search for people and groups"/>
            </div>
            <hr className = "hr"/>
            <div className = "messagebox">
                <h3>Send a message, get a message</h3>
                <h4>Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!</h4>
                <Button className = "messagebtn">Start a conversation</Button>
            </div>
        </div>
    )
}

export default MessagesPage

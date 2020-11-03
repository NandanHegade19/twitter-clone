import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from '../firebase';
import '../Styles/TweetBox.css';

function TweetBox() {

    const [newTweetMsg, setNewTweetMsg] = useState('');
    const [newTweetImg, setNewTweetImg] = useState('');

    const sendTweet = (evt) => {
        evt.preventDefault();
        db.collection('posts').add({
            displayname: 'Nandan',
            username: 'nandanhegade',
            verified: true,
            timestamp: '1hr',
            text: newTweetMsg,
            avatar: '',
            image: newTweetImg
        });
        setNewTweetImg('');
        setNewTweetMsg('');
    }

    return (
        <div className = "tweetbox" >
            <form>
                <div className = "tweetbox__input">
                    <Avatar src = "" ></Avatar>
                    <input type="text" value = {newTweetMsg} onChange = {e => setNewTweetMsg(e.target.value)} 
                        placeholder = "What's happening?"/>
                </div>
                <input type = "text" value = {newTweetImg} onChange = {e => setNewTweetImg(e.target.value)}
                     className = "tweetbox__inputimg" placeholder = "Enter image url"/>
                <Button type="submit"  onClick = {sendTweet} className = "tweetbox__button" >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;

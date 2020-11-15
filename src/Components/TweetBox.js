import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import '../Styles/TweetBox.css';
import firebase from 'firebase'


function TweetBox() {

    const [newTweetMsg, setNewTweetMsg] = useState('');
    const [newTweetImg, setNewTweetImg] = useState('');
    const [{user} , dispatch] = useStateValue();
    
    const sendTweet = (evt) => {
        evt.preventDefault();
        db.collection('posts').add({
            displayname: user.displayName,
            username: user.email,
            verified: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            text: newTweetMsg,
            avatar: user.photoURL,
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

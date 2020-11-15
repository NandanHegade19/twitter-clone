import React, { useState, useEffect } from 'react';
import '../Styles/Newsfeed.css';
import NewsfeedPosts from './NewsfeedPosts';
import TweetBox from './TweetBox';
import db from '../firebase';
import FlipMove from 'react-flip-move';

function Newsfeed() {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className = "newsfeed">
            <div className = "newsfeed__header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            <FlipMove>
                {posts?.map(post => (
                    <NewsfeedPosts 
                        key = {post.text}
                        displayname = {post.displayname} 
                        username = {post.username} 
                        verified = {post.verified}
                        timestamp = {post.timestamp}
                        text = {post.text}
                        avatar = {post.avatar}
                        image = {post.image} 
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Newsfeed;

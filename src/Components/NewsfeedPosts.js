import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react';
import '../Styles/NewsfeedPosts.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const NewsfeedPosts = forwardRef(({avatar, displayname, username, verified, timestamp, text, image}, ref) => {
    return (
        <div className = "post" ref = {ref}>
            <div className = "post__avatar">
                <Avatar src = {avatar} alt = ""></Avatar>
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__header__text">
                        <h3> 
                            <span>{displayname}</span> 
                            <span> {verified && <VerifiedUserIcon className = "post__verified"/>} </span>
                            <span className = "post__header__username">@{username} . {timestamp} </span>
                        </h3>
                    </div>
                    <div className = "post__headerdiscription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src = {image} alt = ""/>
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon/>
                    <RepeatIcon/>
                    <FavoriteBorderIcon/>
                    <PublishIcon/>
                </div>
            </div>
            
        </div>
    )
});

export default NewsfeedPosts;

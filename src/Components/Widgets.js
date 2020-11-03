import React from 'react';
import '../Styles/Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed';


function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon className = "widgets__searchicon"/>
                <input type = "text" placeholder = "Search Twitter"/>
            </div>
            <div className = "widgets__widgetcontainer">
                <h2>What's happning</h2>
                <TwitterTweetEmbed tweetId = {"1322324036043657216"}/>
                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "BocaChicaGal"
                    options = {{height:400}}
                />
                <TwitterShareButton url = "" options = {{text:"SpaceX", via:"SpaceFlight"}}/>
            </div>
        </div>
    )
}

export default Widgets

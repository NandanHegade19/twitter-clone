import React, {useState} from 'react';
import '../Styles/Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className = "sidebar">
            <TwitterIcon className = "sidebar__twittericon"/>
            <div className = "sidebar_options">
                <Link to = "/" style={{ textDecoration: 'none' }}><SidebarOption text = "Home" Icon = {HomeIcon}/></Link>
                <Link to = "/explore" style={{ textDecoration: 'none' }}><SidebarOption text = "Explore" Icon = {SearchIcon}/></Link>
                <Link to = "/notifications" style={{ textDecoration: 'none' }}><SidebarOption text = "Notifications" Icon = {NotificationsNoneIcon}/></Link>
                <Link to = "/messages" style={{ textDecoration: 'none' }}><SidebarOption text = "Messages" Icon = {MailOutlineIcon} /></Link>
                <Link to = "/bookmark"style={{ textDecoration: 'none' }}><SidebarOption text = "Bookmark" Icon = {BookmarkBorderIcon}/></Link>
            </div>
            <SidebarOption text = "Lists" Icon = {ListAltIcon}/>
            <SidebarOption text = "Profile" Icon = {PermIdentityIcon}/>
            <SidebarOption text = "More" Icon = {MoreHorizIcon}/>
        
            <Button variant = "outlined" className = "sidebar__tweetbutton" >Tweet</Button>
        </div>
    )
}

export default Sidebar;

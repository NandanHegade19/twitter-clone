import React from 'react';
import '../Styles/LoginPage.css';
import { Button } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'

function LoginPage() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

            }).catch(error => alert(error.message))
    }
    
    return (
            <div className = "loginpage">
                <div className = "left">
                    <img src = "http://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s1600/Twitter+logo+2012.png" alt = "Twitter logo"/>
                    <div className = "left_centeredText">
                        <div className = "left_icons"><SearchIcon/><h3>Follow your interests.</h3></div>
                        <div className = "left_icons"><PeopleIcon/><h3>Hear what people are talking about.</h3></div>
                        <div className = "left_icons"><ChatBubbleOutlineIcon/><h3>Join the conversation.</h3></div>
                    </div>
                </div>
                <div className = "right">
                    <form>
                        <div className = "right__input">
                            <input type = "text" placeholder = "Phone, email, or username"/>
                            <input type = "password" placeholder = "Password"/>
                            <button disabled>Log in</button>
                        </div>
                        <p>(Sign up with google below)</p>
                    </form>
                    <div className = "">
                        <img className = "rightlogo" src = "https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-512.png"/>
                        <h1>See what’s happening in the world right now</h1>
                    </div>
                    <div className = "join">
                        <h3>Join Twitter today.</h3>
                        <Button type="submit"  onClick = {signIn} className = "tweetbox__button2" >Sign up with Google</Button>
                        <Button type="submit" className = "tweetbox__button2" disabled>Log in</Button>
                    </div>
                    <div className = "footer">
                        <h4>Twitter Clone for demo purpose only. No Copyrights.</h4>
                    </div>
                </div>
            </div> 
    )
}

export default LoginPage

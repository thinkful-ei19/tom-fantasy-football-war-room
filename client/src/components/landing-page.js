import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import google from '/Users/thaborak/Documents/Thinkful/tom-fantasy-football-war-room/client/src/btn_google_signin_dark_normal_web@2x.png';
import './landing-page.css'

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        
        <div className="home">
            <div class="body"></div>
            <div class="grad"></div>
            <div class="header">
                <div>ArmChair GM<span>Fantasy Football</span></div>
            </div>
            <br></br>
                <div class="login">
            {/* <p>Win your League this Year!</p> */}
            <a href="http://localhost:8080/api/auth/google"> <img type='button' value='login' src={google} className='input-button btn btn-success login-button'/></a>
            </div>
        </div>

  
    );
}

export default connect()(LandingPage);

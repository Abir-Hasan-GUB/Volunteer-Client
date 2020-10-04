import React from 'react';
import './Login.css';
import logo from '../Images/logos/Logo.png';
import google from '../Images/logos/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {
    firebase.initializeApp(firebaseConfig);
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
    return (
        <div className="container">
            <div className="login-logo">
            <img src= {logo} alt=""/>
            </div>
            
            <div className="login-panel">
                <div className="login-content">
                    <h4>Login With</h4>
                    <div onClick={handleGoogleSignIn} className="google">
                        <img src= { google } alt="google icon"/>
                        <span className = "googleText">Continue with Google</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
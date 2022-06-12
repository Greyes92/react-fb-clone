import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase.js";
import { signInWithPopup } from 'firebase/auth';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
     const [state, dispatch] = useStateValue();
     const authenticate = () => {
          //sign in
          signInWithPopup(auth, provider)
          .then((result) => {
               dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
               })
               console.log(result.user);
          })
          .catch((error) => {
               alert(error.message)});
     }
  return (
    <div className='login'>
         <div className='login__logo'>
              <img
               src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
               alt=""
              />
              <h2>Connect with your friends and the world around you on Facebook.</h2>
         </div>
         <div className='login__buttons'>
              <Button className="loginBtn" type="submit" onClick={authenticate}>
                   Log In
              </Button>
              <div className='divider'>
              </div>
              <Button className="createNewAccountBtn" type="submit" onClick={authenticate}>
                   Create New Account
              </Button>
         </div>
    </div>
  );
}

export default Login;
import React from 'react';
import {auth, provider} from "../firebase-config"
import {signInWithPopup } from 'firebase/auth';
import '../styles/Auth.css';
import Cookies from 'universal-cookie';
import logo from '../assets/images.png'

const cookies = new Cookies();

export const Auth = (props) => {
  const {setIsAuth} = props;
  const signInwithGoogle = async () => {
    try{
    const result = await signInWithPopup(auth, provider);
    cookies.set("auth-token",result.user.refreshToken)
    setIsAuth(true);
    } catch(err){
      console.error(err);
    }
  };
  
  return (
    <div className='auth'>
      <div className='wrapper'>
        <img src={logo} alt="" />
        <div>CHAT ROOM</div>
        <p>Sign In with Google To Continue...</p>
        <button className='button' onClick={signInwithGoogle}>Sign In </button>
      </div>
    </div>
  )
}

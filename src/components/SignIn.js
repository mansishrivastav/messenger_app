import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button';
import {auth} from '../firebase';



const signInWithGoogle=()=>{
    const provider=new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className='wrapper'>
      <GoogleButton onClick={signInWithGoogle}/>
    </div>
  )
}

export default SignIn

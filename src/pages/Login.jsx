import React from "react";
import { auth, provider } from "../Firbase";
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
const Login = ({isAuth,setIsAuth}) => {
    const navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth,provider).then(result => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate('/')
            console.log(result.user)
        })
    }

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Login;

import { signInWithPopup } from "firebase/auth";
import React from 'react';
import { auth, provider } from "../firebase";

function Login() {
  const loginWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth,provider).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login;
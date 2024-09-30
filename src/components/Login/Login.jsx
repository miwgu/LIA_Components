import LoginButtonAtom from "./LoginButtonAtom";
import PasswordAtom from "./PasswordAtom";
import EmailAtom from "./EmailAtom";
import CompanyRegLinkAtom from "./CompanyRegLinkAtom";
import StudentRegLinkAtom from "./StudentRegLinkAtom";
import styles from './Login.module.css';
import { useState } from "react";
import React from "react";

const Login = ({loginFunction, navToPage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =() =>{
    if(loginFunction) {
      loginFunction(email, password);
    }else {
      console.error ('NO login function')
      console.error('Email:', email );
      console.error('Password:', password);
    }
  };

//test git action
  return (
   <>
    <div className={styles.loginText}>
        <h1>Login</h1>
    </div>
    <div className={styles.loginContainer}>
    
    <EmailAtom  onEmailChange={setEmail}/>
    <PasswordAtom onPasswordChange={setPassword}/>
    <LoginButtonAtom onClick={handleLogin}/>
    <ul className={styles.noBullet}>
        <li><StudentRegLinkAtom navigation={navToPage}/></li>
        <li><CompanyRegLinkAtom navigation={navToPage}/></li>
    </ul>
    
    </div>
    </>

  )
}

export default Login
import LoginButtonAtom from "./LoginButtonAtom";
import PasswordAtom from "./PasswordAtom";
import EmailAtom from "./EmailAtom";
import LabelPasswordAtom from "./LabelPasswordAtom";
import CompanyRegLinkAtom from "./CompanyRegLinkAtom";
import StudentRegLinkAtom from "./StudentRegLinkAtom";
import styles from './Login.module.css';
import { useState } from "react";

const Login = ({loginFunction}) => {
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
        <li><StudentRegLinkAtom/></li>
        <li><CompanyRegLinkAtom/></li>
    </ul>
    
    </div>
    </>

  )
}

export default Login
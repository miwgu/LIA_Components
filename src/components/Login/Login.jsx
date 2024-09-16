import LoginButtonAtom from "./LoginButtonAtom";
import PasswordAtom from "./PasswordAtom";
import EmailAtom from "./EmailAtom";
import LabelPasswordAtom from "./LabelPasswordAtom";
import CompanyRegLinkAtom from "./CompanyRegLinkAtom";
import StudentRegLinkAtom from "./StudentRegLinkAtom";
import styles from './Login.module.css';
import { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  return (
   <>
    <div className={styles.loginText}>
        <h1>Login</h1>
    </div>
    <div className={styles.loginContainer}>
    
    <EmailAtom  onEmailChange={setEmail}/>
    <LabelPasswordAtom/>
    <PasswordAtom/>
    <LoginButtonAtom/>
    <ul className={styles.noBullet}>
        <li><StudentRegLinkAtom/></li>
        <li><CompanyRegLinkAtom/></li>
    </ul>
    
    </div>
    </>

  )
}

export default Login
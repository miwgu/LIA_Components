import {LabelEmailAtom, EmailAtom, LabelPasswordAtom, PasswordAtom,LoginButtonAtom, StudentRegLinkAtom,CompanyRegLinkAtom} from ".";
import styles from './Login.module.css';


const Login = () => {
  return (
   <>
    <div className={styles.loginText}>
        <h1>Login</h1>
    </div>
    <div className={styles.loginContainer}>
    
    <LabelEmailAtom/>
    <EmailAtom />
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
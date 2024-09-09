import {LabelEmailAtom, EmailAtom, LabelPasswordAtom, PasswordAtom,LoginButtonAtom, StudentRegLinkAtom,CompanyRegLinkAtom} from ".";
import styles from './Login.module.css';


const Login = () => {
  return (
    <div className={styles.loginContainer}>
    <div>Login</div>
    <LabelEmailAtom/>
    <EmailAtom />
    <LabelPasswordAtom/>
    <PasswordAtom/>
    <LoginButtonAtom/>
    <ul>
        <li><StudentRegLinkAtom/></li>
        <li><CompanyRegLinkAtom/></li>
    </ul>
    
    
    </div>

  )
}

export default Login
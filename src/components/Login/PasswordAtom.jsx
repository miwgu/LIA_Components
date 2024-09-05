import styles from './Login.module.css';

const PasswordAtom = () =>{
    return(
        <div>
          <input className={styles.labelLogin} type= "password" placeholder="Enter your password" id="password"/>
        </div>
    )

}

export default PasswordAtom
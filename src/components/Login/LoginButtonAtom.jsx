import styles from './Login.module.css';

const LoginButtonAtom = ({title="Sign In"}) =>{

    if(!title){
        return(
            <div>You need to Add title for this button</div>
        )
    }
    return(       
        <button className={styles.loginButton}>{title}</button>
    )
}

export default LoginButtonAtom
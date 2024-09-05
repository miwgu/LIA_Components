import styles from './Login.module.css';

const EmailAtom = () =>{
    return(
        <div>
          <input  className={styles.labelLogin} type= "email" placeholder="Enter your email" id="email"/>
        </div> 
    )

}

export default EmailAtom
import styles from './Login.module.css';

const EmailAtom = ({initialValue = "",label="Email", onEmailChange}) =>{

    if(!onEmailChange) {
        return(
          <>
            <b>OnChange function require to login</b>
          </>
        )
    }

    const handleChange = (e) =>{

      const emailValue = e.target.value;
      const email_Valid = /\S+@\S+\.\S+/.test(emailValue);

      if(!email_Valid) {
       console.log("Invalid email format")
      }

      onEmailChange(emailValue);
    };

    return(
        <div>
          <div className={styles.labelLink}>
              <label htmlFor= "email">{label}:</label>
          </div>

          <input  
          className={styles.labelLogin} 
          type= "email"
          placeholder={`Enter your ${label}`} 
          id="email"
          onChange={handleChange}
          />
        </div> 
    )

}

export default EmailAtom
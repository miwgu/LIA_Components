import styles from './RegisterStudent.module.css'; 
import React from "react";
const LastnameAtom = () => {
  return (
    <div>
        <input className={styles.link} type= "text" placeholder="Enter your lastname" id="lastname"/>
    </div>
  )
}

export default LastnameAtom
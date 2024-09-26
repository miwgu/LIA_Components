import styles from './RegisterStudent.module.css'; 
import React from "react";
const FirstnameAtom = () => {
  return (
    <div>
      <input className={styles.link} type= "text" placeholder="Enter your firstname" id="firstname"/>
    </div>
  )
}

export default FirstnameAtom
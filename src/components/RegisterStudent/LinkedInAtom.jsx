import styles from './RegisterStudent.module.css'; 
import React from "react";
const LinkedInAtom = () => {
  return (
    <div>
        <input className={styles.link} type="url" placeholder="https://www.linkedin.com/in/your-profile" id="linkedIn"/>
    </div>
  )
}

export default LinkedInAtom
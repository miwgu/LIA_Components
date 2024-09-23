import React from 'react'
import styles from './RegisterStudent.module.css'; 

const LabelLinkedinAtom = ({label="Linkedin:"}) => {
  return (
    <div  className={styles.labelLink}>
      <label>{label}</label>
    </div>
  )
}

export default LabelLinkedinAtom

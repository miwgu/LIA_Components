import React from 'react'
import styles from './RegisterStudent.module.css'; 

const LabelFirstnameAtom = ({label="First name:"}) => {
  return (
    <div className={styles.labelLink}>
      <label htmlFor="text">{label}</label>
    </div>
  )
}

export default LabelFirstnameAtom

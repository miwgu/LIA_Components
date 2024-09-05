import React from 'react'
import styles from './Register.module.css';

const LabelLastnameAtom = ({label="Last name:"}) => {
  return (
    <div className={styles.labelLink}>
      <label htmlFor="text" >{label}</label>
    </div>
  )
}

export default LabelLastnameAtom

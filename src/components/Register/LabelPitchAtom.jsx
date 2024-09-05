import React from 'react'
import styles from './Register.module.css';

const LabelPitchAtom = ({label="Your sales pitch:"}) => {
  return (
    <div  className={styles.labelLink}>
      <label htmlFor="text">{label}</label>
    </div>
  )
}

export default LabelPitchAtom

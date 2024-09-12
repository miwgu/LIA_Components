import React from 'react'
import styles from './RegisterCompany.module.css';

const LabelCommentAtom = ({label="Input your comment:"}) => {
  return (
    <div  className={styles.labelLink}>
      <label htmlFor="text">{label}</label>
    </div>
  )
}

export default LabelCommentAtom

import React from 'react'
import styles from './RegisterCompany.module.css'; 

const LabelHomepageLinkAtom = ({label="HomepageLink:"}) => {
  return (
    <div  className={styles.labelLink}>
      <label>{label}</label>
    </div>
  )
}

export default LabelHomepageLinkAtom

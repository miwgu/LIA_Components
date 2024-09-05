import React from 'react';
import styles from './Login.module.css';

const LabelPasswordAtom = ({ label= "Password:" }) => {
  return (
    <div className={styles.labelLink}>
      <label htmlFor= "password">{label}</label>
    </div>
  );
};

export default LabelPasswordAtom;
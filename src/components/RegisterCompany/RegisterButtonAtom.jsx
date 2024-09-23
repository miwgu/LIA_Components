import React from 'react';
import styles from './RegisterCompany.module.css'; 

const RegisterButtonAtom = ({ title = "Register" }) => {
  if (!title) {
    return <div>You need to Add title for this button</div>;
  }
  return <button className={styles.regButton}>{title}</button>;
};

export default RegisterButtonAtom;

import React from 'react';
import styles from './RegisterStudent.module.css'; 

const RegisterButtonAtom = ({ title = "Register", onClick }) => {
  if (!title) {
    return <div>You need to add a title for this button</div>;
  }
  
  return (
    <button className={styles.regButton} onClick={onClick}>
      {title}
    </button>
  );
};

export default RegisterButtonAtom;


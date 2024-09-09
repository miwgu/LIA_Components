import React from 'react';
import styles from './LogoutButton.module.css';

const LogoutButton = ({ onClick }) => {
  return (
    <button className={styles.logoutButton} onClick={onClick}>
      Log Out
    </button>
  );
};


export default LogoutButton;

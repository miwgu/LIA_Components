import styles from "./NavBar.module.css";
import React from "react";

const Button = ({ name = "Sign In" }) => {
  if (!name) {
    return <div>You need to Add title for this button</div>;
  }
  return <button className={styles.btn}>{name}</button>;
};

export default Button;

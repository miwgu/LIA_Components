import React from "react";
import styles from "./NavBar.module.css";
import SideNav from "./SideNav";
import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <div className={styles.nav}>
        <SideNav />
        <h1>HittaLIA</h1>
        <Button />
      </div>
    </>
  );
};
export default NavBar;

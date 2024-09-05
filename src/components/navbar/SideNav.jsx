import React, { useState } from "react";
import styles from "./NavBar.module.css";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    console.log("Toggling side nav. Current state:", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.navbarToggler} onClick={toggleSideNav}>
        &#9776;
      </button>
      <nav className={`${styles.sidenav} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={toggleSideNav}>
          &times;
        </button>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default SideNav;

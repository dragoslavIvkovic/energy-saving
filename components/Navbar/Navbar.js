import React from "react";
import styles from "./navbar.module.css";
import ActiveLink from "./ActiveLink";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ActiveLink href="/compare">Compare</ActiveLink>
      <ActiveLink href="/Calc">Calculation</ActiveLink>
      <ActiveLink href="/Contact">Contact</ActiveLink>
    </div>
  );
}

export default Navbar;

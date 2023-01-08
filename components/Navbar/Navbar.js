import React from "react";
import styles from "./navbar.module.css";
import ActiveLink from "./ActiveLink";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ActiveLink href="/compare" className={styles.nav_link}>
        Compare
      </ActiveLink>
      <ActiveLink href="/Calc" className={styles.nav_link}>
        Calculation
      </ActiveLink>
      <ActiveLink href="/Contact" className={styles.nav_link}>
        Contact
      </ActiveLink>
    </div>
  );
}

export default Navbar;

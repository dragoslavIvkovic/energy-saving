import React from 'react'
import Link from "next/link";   //import this
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/compare">Compare</Link>
      <Link href="/Calc">Calculation</Link>
      <Link href="/Contact">Contact</Link>
    </div>
  );
}

export default Navbar
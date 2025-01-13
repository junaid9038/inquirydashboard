import React from 'react'
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.navb} container`}>
        <div className='logo'>
            <img src="public\canva_logo_design.jpg" width="72px" alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact us</li>
        </ul>
    </nav>
  )
}

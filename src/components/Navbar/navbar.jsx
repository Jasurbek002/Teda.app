import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss'
const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <Link className={styles.Navbar__logo} to='/'>TEDA</Link>
        </div>
    );
}

export default Navbar;

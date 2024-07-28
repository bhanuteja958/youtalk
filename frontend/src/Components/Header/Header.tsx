import { FC } from "react";
import styles from './Header.module.css';
import Logo from "../Common/SVGs/Logo";

const Header:FC<{}> = () => {
    return (
        <header className={styles.header}>
            <Logo styles={styles.headerLogo}/>
            <nav className={styles.headerNav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="#" className={styles.navLink}>Home</a>
                    </li>
                    <li className={styles.navItem}>
                        <button type="button" className={styles.navBtn}>Login</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
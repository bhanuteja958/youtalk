import { FC, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Common/SVGs/Logo";
import Login from "../Popups/Login/Login";

const Header: FC<{}> = () => {
    const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);

    return (
        <>
            <header className={styles.header}>
                <Logo styles={styles.headerLogo} />
                <nav className={styles.headerNav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a href="/" className={styles.navLink}>
                                Home
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <button type="button" className={styles.navBtn} onClick={() => { setShowLoginPopup(true); }}>
                                Login
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            {showLoginPopup ? <Login closePopup={() => { setShowLoginPopup(false); }}/> : ''}
        </>
    );
};

export default Header;

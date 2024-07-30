import { FC } from "react";
import styles from './Login.module.css';
import PopupSkeleton from "../PopupSkeleton/PopupSkeleton";
import GoogleIcon from "../../Common/SVGs/GoogleIcon";

interface LoginProps {
    closePopup: () => void
}

const Login:FC<LoginProps> = ({ closePopup }) => {
    return (
        <PopupSkeleton title="Social Login" closePopup={closePopup}>
            <div className={styles.loginContainer}>
                <div className={styles.socialLogins}>
                    <button type="button" className={styles.googleLoginBtn}>
                        <GoogleIcon styles={styles.googleIcon}/>
                        <span>Continue with google</span>
                    </button>
                </div>
            </div>
        </PopupSkeleton>
    );
}

export default Login;
import { FC, ReactElement, useEffect } from "react";
import styles from './PopupSkeleton.module.css'
import CloseIcon from "../../Common/SVGs/CloseIcon";

interface PopupSkeletionProps {
    title?: string
    children?:ReactElement<any>
    closePopup:() => void
}

const PopupSkeleton:FC<PopupSkeletionProps> = ({ title, children, closePopup }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return (() => {
            document.body.style.overflow = 'auto';
        });
    },[]);

    return (
        <div className={styles.popupOuterContainer}>
            <div className={styles.popupInnerContainer}>
                <div className={styles.popupHeader}>
                    {title ? <h2 className={styles.popupTitle}>{title}</h2> : ''}
                    <CloseIcon styles={styles.popupCloseIcon} iconClickHandler={closePopup}/>
                </div>
                <div className={styles.popupBody}>
                    {children || ''}
                </div>
            </div>
        </div>
    );
}

export default PopupSkeleton;
import React from 'react';
import styles from './message.module.scss'
const Message = ({message}) => {
    return (
        <div className={styles.Message}>
            <h3 className={styles.Message__title}>{message}</h3>
        </div>
    );
}

export default Message;

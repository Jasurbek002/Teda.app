import React from 'react';
import styles from './modal.module.scss'
const Modal = ({setModal}) => {
    return (
        <div className={styles.Modal}>
            <h1>Add product</h1>
            <button onClick={() => setModal(false)}>X</button>
            <input className={styles.Modal__name} type="text" />
            <select name="" id=""></select>
        </div>
    );
}

export default Modal;

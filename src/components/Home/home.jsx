import React from 'react';
import Navbar from '../Navbar/navbar';
import styles from './home.module.scss'
const Home = () => {
    return (
        <>
      <Navbar />
         <div className={styles.Home}>
           <div className={styles.Home__sitebar}>
            <ul>
              sitebar
            </ul>
           </div>
           <div className={styles.Home__box}>

           </div>
           </div>
        </>
       
    );
}

export default Home;

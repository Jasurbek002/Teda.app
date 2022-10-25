import React, { useState } from 'react';
import Card from '../card/card';
import Modal from '../modal/modal';
import Navbar from '../Navbar/navbar';
import styles from './home.module.scss'
const Home = () => {
  const [modal,setModal] = useState(false)
  const [putId,setPutId] = useState(0)
    const addMaodal = () =>{
      setModal(true)
    }

    return (
        <>
      <Navbar />
         <div className={styles.Home}>
           {/* <div className={styles.Home__sitebar}>
            <ul>
              sitebar
            </ul>
           </div> */}
           <div className={styles.Home__box}>
            <button onClick={addMaodal} className={styles.Home__box__add}>add product</button>
               <Card setModal={setModal} setPutId={setPutId}/>
                { modal ? <Modal setModal={setModal} putId={putId} /> : '' }
           </div>
           </div>
        </>
       
    );
}

export default Home;

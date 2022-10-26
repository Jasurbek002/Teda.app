import React, { useState } from 'react';
import Card from '../card/card';
import Message from '../message/message';
import Modal from '../modal/modal';
import Navbar from '../Navbar/navbar';
import styles from './home.module.scss'
const Home = () => {
  const [modal,setModal] = useState(false)
  const [toos,setToos] = useState(false)
  const [message,setMessage] = useState('')
  const [putId,setPutId] = useState(false)
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
               <Card padding={modal ? 500 : 0} setModal={setModal}
                setPutId={setPutId}
                setToos={setToos} 
                setMessage={setMessage} 
                />
                 { toos ? <Message message={message} /> : '' }
                { modal ? <Modal
                  setModal={setModal}
                  putId={putId} 
                  setToos={setToos} 
                  setMessage={setMessage} 
                  /> : '' }
           </div>
           </div>
        </>
       
    );
}

export default Home;
